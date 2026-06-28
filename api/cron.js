const { getPool, setPool } = require("./_kv");
const SEED = require("./_seed");

// Auto-updater: runs on Vercel's servers (not the sandbox), fetches finished
// World Cup matches from football-data.org, maps them to the pool's group-match
// ids, recomputes standings, saves to KV, and fires a phone push on changes.
// Triggered by Vercel Cron (see vercel.json) and/or an external pinger.

const PATTERN = [[[0,1],[2,3]],[[0,2],[3,1]],[[3,0],[1,2]]];

function norm(s){ return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]/g,""); }

// football-data.org name -> pool name (only where they differ)
const ALIAS = {
  "korearepublic":"South Korea", "republicofkorea":"South Korea", "southkorea":"South Korea",
  "czechia":"Czech Republic", "czechrepublic":"Czech Republic",
  "usa":"United States", "unitedstates":"United States", "unitedstatesofamerica":"United States",
  "cotedivoire":"Ivory Coast", "ivorycoast":"Ivory Coast",
  "drcongo":"DR Congo", "congodr":"DR Congo", "democraticrepublicofthecongo":"DR Congo", "democraticrepublicofcongo":"DR Congo",
  "turkiye":"Turkey", "turkey":"Turkey",
  "bosniaandherzegovina":"Bosnia and Herzegovina", "bosniaherzegovina":"Bosnia and Herzegovina",
  "caboverde":"Cape Verde", "capeverde":"Cape Verde",
  "curacao":"Curaçao",
  "irislamicrepublicofiran":"Iran", "iran":"Iran"
};

function resolveTeam(pool, apiName){
  const n = norm(apiName);
  if (!n) return null;
  if (ALIAS[n]) return ALIAS[n];
  const all = Object.values(pool.groups).flat();
  for (const t of all) if (norm(t) === n) return t;
  for (const t of all){ const nt = norm(t); if (nt && (nt.includes(n) || n.includes(nt))) return t; }
  return null;
}

function groupOf(pool, team){ return Object.keys(pool.groups).find(g => pool.groups[g].includes(team)); }

function matchSlot(pool, g, home, away){
  const gt = pool.groups[g];
  const i = gt.indexOf(home), j = gt.indexOf(away);
  if (i < 0 || j < 0) return null;
  let n = 0;
  for (const md of PATTERN) for (const [a,b] of md){ n++;
    if ((a===i && b===j) || (a===j && b===i)) return { id: g+"-"+n, firstSlot:a, secondSlot:b };
  }
  return null;
}

// football-data knockout stage -> the per-team scoring field a WIN earns.
const KO_FIELD = {
  "LAST_32":"r32", "ROUND_OF_32":"r32",
  "LAST_16":"r16", "ROUND_OF_16":"r16",
  "QUARTER_FINALS":"qf", "QUARTER_FINAL":"qf",
  "SEMI_FINALS":"sf", "SEMI_FINAL":"sf",
  "THIRD_PLACE":"third", "THIRD_PLACE_FINAL":"third", "3RD_PLACE":"third",
  "FINAL":"final"
};
// Which side won a knockout tie (accounts for extra time & penalties).
function koWinnerSide(m){
  const s = m.score || {};
  if (s.winner === "HOME_TEAM") return "home";
  if (s.winner === "AWAY_TEAM") return "away";
  const pair = o => (o && o.home != null && o.away != null) ? [o.home, o.away] : null;
  const pen = pair(s.penalties); if (pen && pen[0] !== pen[1]) return pen[0] > pen[1] ? "home" : "away";
  const et = pair(s.extraTime);  if (et  && et[0]  !== et[1])  return et[0]  > et[1]  ? "home" : "away";
  const ft = pair(s.fullTime);   if (ft  && ft[0]  !== ft[1])  return ft[0]  > ft[1]  ? "home" : "away";
  return null;
}

function recomputeTeams(pool){
  const prev = pool.teams || {}, results = pool.results || {}, teams = {};
  const thirds = [];               // collect each completed group's 3rd-place team
  const groupKeys = Object.keys(pool.groups);
  groupKeys.forEach(g=>{
    const gt = pool.groups[g];
    gt.forEach(t=>{ teams[t] = { gw:0, gd:0, r32:0, r16:0, qf:0, sf:0, third:0, final:0, groupPlace:null, advanced:false, sweep:false, out:false }; });
    const st = {}; gt.forEach(t=>st[t] = { t, w:0, d:0, l:0, gf:0, ga:0 });
    let n = 0, allPlayed = true;
    PATTERN.forEach(md=>md.forEach(([a,b])=>{ n++; const r = results[g+"-"+n];
      if (!r || r.hs==null || r.as==null){ allPlayed = false; return; }
      const h = gt[a], aw = gt[b];
      st[h].gf+=r.hs; st[h].ga+=r.as; st[aw].gf+=r.as; st[aw].ga+=r.hs;
      if (r.hs > r.as){ st[h].w++; st[aw].l++; teams[h].gw++; }
      else if (r.hs < r.as){ st[aw].w++; st[h].l++; teams[aw].gw++; }
      else { st[h].d++; st[aw].d++; teams[h].gd++; teams[aw].gd++; }
    }));
    gt.forEach(t=>{ if (st[t].w === 3) teams[t].sweep = true; });
    if (allPlayed){
      const rank = Object.values(st).map(x=>({ ...x, gd:x.gf-x.ga, pts:x.w*3+x.d })).sort((p,q)=>q.pts-p.pts||q.gd-p.gd||q.gf-p.gf||p.t.localeCompare(q.t));
      if (rank[0]){ teams[rank[0].t].groupPlace = 1; teams[rank[0].t].advanced = true; }
      if (rank[1]){ teams[rank[1].t].groupPlace = 2; teams[rank[1].t].advanced = true; }
      if (rank[2]){ thirds.push(rank[2]); }
    }
  });
  // Best 8 third-place teams advance (only once every group has finished).
  if (thirds.length === groupKeys.length){
    thirds.sort((p,q)=>q.pts-p.pts||q.gd-p.gd||q.gf-p.gf||p.t.localeCompare(q.t));
    thirds.slice(0,8).forEach(x=>{ teams[x.t].groupPlace = "3adv"; teams[x.t].advanced = true; });
  }
  // Knockout rounds — shared source of truth pool.ko (written by cron auto-detect and/or the admin page).
  Object.values(pool.ko || {}).forEach(k=>{
    if (k && k.field && teams[k.winner]) teams[k.winner][k.field] = 1;
    if (k && k.loser && teams[k.loser]) teams[k.loser].out = true;
  });
  return teams;
}

module.exports = async (req, res) => {
  const secret = process.env.CRON_SECRET;
  if (secret){
    const auth = req.headers["authorization"] || "";
    const key = (req.query && req.query.key) || "";
    if (auth !== "Bearer " + secret && key !== secret) return res.status(401).json({ error: "Unauthorized" });
  }
  const token = process.env.FOOTBALL_DATA_TOKEN;
  if (!token) return res.status(500).json({ error: "FOOTBALL_DATA_TOKEN env var not set" });
  try {
    const pool = await getPool();
    if (!pool || pool.uninitialized) return res.status(400).json({ error: "pool not initialized" });

    const r = await fetch("https://api.football-data.org/v4/competitions/WC/matches", { headers: { "X-Auth-Token": token } });
    const rawText = await r.text();
    let data; try { data = JSON.parse(rawText); } catch (e) { return res.status(502).json({ error: "non-JSON from football-data.org", httpStatus: r.status, body: rawText.slice(0, 400) }); }
    if (!r.ok) return res.status(502).json({ error: "football-data.org responded " + r.status, body: data });
    const matches = data.matches || [];

    const results = Object.assign({}, pool.results || {});
    const ko = Object.assign({}, pool.ko || {});
    let added = 0, koAdded = 0; const changes = []; const skipped = [];
    for (const m of matches){
      if (m.status !== "FINISHED") continue;
      const ft = m.score && m.score.fullTime ? m.score.fullTime : null;
      if (!ft || ft.home == null || ft.away == null) continue;
      const home = resolveTeam(pool, m.homeTeam && m.homeTeam.name);
      const away = resolveTeam(pool, m.awayTeam && m.awayTeam.name);
      if (!home || !away){ skipped.push((m.homeTeam&&m.homeTeam.name)+" v "+(m.awayTeam&&m.awayTeam.name)); continue; }
      const g = groupOf(pool, home);
      if (g && groupOf(pool, away) === g){
        // group-stage match (both teams in the same group)
        const slot = matchSlot(pool, g, home, away);
        if (!slot) continue;
        const gt = pool.groups[g];
        const firstIsHome = gt[slot.firstSlot] === home;
        const hs = firstIsHome ? ft.home : ft.away;
        const as = firstIsHome ? ft.away : ft.home;
        const ex = results[slot.id];
        if (!ex || ex.hs !== hs || ex.as !== as){
          results[slot.id] = { hs, as, status: "FT" };
          added++;
          changes.push(`${gt[slot.firstSlot]} ${hs}-${as} ${gt[slot.secondSlot]}`);
        }
      } else {
        // knockout match (teams from different groups) — award the round-win points to the winner
        const field = KO_FIELD[m.stage];
        if (!field){ skipped.push(`${home} v ${away} (stage ${m.stage||"?"})`); continue; }
        const side = koWinnerSide(m);
        if (!side) continue;
        const winner = side === "home" ? home : away;
        const loser  = side === "home" ? away : home;
        const key = field + "::" + [home, away].sort().join("|");  // source-independent (matches admin page)
        const ex = ko[key];
        if (!ex || ex.winner !== winner){
          ko[key] = { stage: m.stage, field, winner, loser, home, away, hs: ft.home, as: ft.away };
          koAdded++;
          changes.push(`${winner} def. ${loser} (${field.toUpperCase()})`);
        }
      }
    }

    pool.results = results;
    pool.ko = ko;
    pool.teams = recomputeTeams(pool);
    if (pool.ntfyTopic === "nickys-wcpool-draft-9k4m2") pool.ntfyTopic = "nickys-wcpool-alerts-9k4m2";
    // maintain daily standings history for the Points Over Time chart
    if (!Array.isArray(pool.history) || !pool.history.length) { try { pool.history = JSON.parse(JSON.stringify(SEED.history || [])); } catch (e) { pool.history = []; } }
    { const S = pool.scoring;
      const tp = t => { if(!t) return 0; let p=(t.gw||0)*S.groupWin+(t.gd||0)*S.groupDraw+(t.r32||0)*S.r32+(t.r16||0)*S.r16+(t.qf||0)*S.qf+(t.sf||0)*S.sf+(t.third||0)*S.third+(t.final||0)*S.final; if(t.groupPlace===1)p+=S.bonus1st; else if(t.groupPlace===2)p+=S.bonus2nd; else if(t.groupPlace==="3adv")p+=S.bonus3rdAdvance; if(t.sweep)p+=S.bonusSweep; return p; };
      const byP={}; (pool.order||[]).forEach(n=>byP[n]=[]); (pool.picks||[]).forEach(x=>{ if(byP[x.player]) byP[x.player].push(x.team); });
      const pts={}; (pool.order||[]).forEach(n=>{ let tot=0,adv=0; (byP[n]||[]).forEach(tn=>{ const t=pool.teams[tn]; tot+=tp(t); if(t&&t.advanced)adv++; }); if((byP[n]||[]).length===(pool.rounds||6)&&adv===(pool.rounds||6))tot+=S.bonusAllAdvance; pts[n]=tot; });
      const label = new Date().toLocaleDateString("en-US",{ timeZone:"America/New_York", month:"short", day:"numeric" });
      const ex = pool.history.find(h=>h.label===label);
      if (ex) ex.pts = pts; else pool.history.push({ label, pts });
    }
    await setPool(pool);

    const totalChanges = added + koAdded;
    if (totalChanges > 0 && pool.ntfyTopic){
      try {
        await fetch("https://ntfy.sh/" + pool.ntfyTopic, { method: "POST", headers: { "Title": "Nicky's World Cup Pool", "Tags": "soccer" }, body: `Scores updated — ${changes.slice(0,4).join("; ")}${changes.length>4?" …":""}` });
      } catch (e) { /* best-effort */ }
    }
    if (totalChanges === 0){
      const statuses = {}; matches.forEach(m => { statuses[m.status] = (statuses[m.status]||0)+1; });
      return res.status(200).json({ updated: false, recomputed: true, message: "no new finished matches (standings recomputed)", apiTotal: matches.length, statuses, skipped });
    }
    return res.status(200).json({ updated: true, added, koAdded, changes, skipped });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
};
