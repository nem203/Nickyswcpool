// Initial pool state, written to KV by POST /api/admin {action:"init"}.
module.exports = {
  name: "Nicky's World Cup Pool",
  order: ["Nicky", "Reilly", "Diccy", "Gary", "Gabey", "Lee"],
  colors: {
    "Nicky": "#ea580c", "Reilly": "#d97706", "Diccy": "#db2777",
    "Gary": "#ffffff", "Gabey": "#059669", "Lee": "#7c3aed"
  },
  rounds: 6,
  scoring: {
    groupWin: 2, groupDraw: 1, r32: 2, r16: 3, qf: 3, sf: 3, third: 1, final: 4,
    bonus1st: 3, bonus2nd: 2, bonus3rdAdvance: 1, bonusAllAdvance: 3, bonusSweep: 1
  },
  groups: {
    A: ["Mexico", "South Africa", "South Korea", "Czech Republic"],
    B: ["Canada", "Bosnia and Herzegovina", "Qatar", "Switzerland"],
    C: ["Brazil", "Morocco", "Haiti", "Scotland"],
    D: ["United States", "Paraguay", "Australia", "Turkey"],
    E: ["Germany", "Curaçao", "Ivory Coast", "Ecuador"],
    F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
    G: ["Belgium", "Egypt", "Iran", "New Zealand"],
    H: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"],
    I: ["France", "Senegal", "Iraq", "Norway"],
    J: ["Argentina", "Algeria", "Austria", "Jordan"],
    K: ["Portugal", "DR Congo", "Uzbekistan", "Colombia"],
    L: ["England", "Croatia", "Ghana", "Panama"]
  },
  codes: {
    "Mexico":"MEX","South Africa":"RSA","South Korea":"KOR","Czech Republic":"CZE","Canada":"CAN","Bosnia and Herzegovina":"BIH","Qatar":"QAT","Switzerland":"SUI","Brazil":"BRA","Morocco":"MAR","Haiti":"HAI","Scotland":"SCO","United States":"USA","Paraguay":"PAR","Australia":"AUS","Turkey":"TUR","Germany":"GER","Curaçao":"CUW","Ivory Coast":"CIV","Ecuador":"ECU","Netherlands":"NED","Japan":"JPN","Sweden":"SWE","Tunisia":"TUN","Belgium":"BEL","Egypt":"EGY","Iran":"IRN","New Zealand":"NZL","Spain":"ESP","Cape Verde":"CPV","Saudi Arabia":"KSA","Uruguay":"URU","France":"FRA","Senegal":"SEN","Iraq":"IRQ","Norway":"NOR","Argentina":"ARG","Algeria":"ALG","Austria":"AUT","Jordan":"JOR","Portugal":"POR","DR Congo":"COD","Uzbekistan":"UZB","Colombia":"COL","England":"ENG","Croatia":"CRO","Ghana":"GHA","Panama":"PAN"
  },
  picks: [],     // [{team, player}] in draft order
  results: {},   // { "A-1": {hs,as} } group-match scores
  teams: {},     // per-team scoring records (set by admin / daily task)
  recap: {
    date: "🏆 Diccy Clinches the Pool — Sun Jul 12",
    html: `<h3>The story so far</h3>
<p>It's over. England's quarterfinal win over Norway banked Diccy's 56th point — and no one left alive can reach 56. <b>Diccy is the 2026 champion of Nicky's World Cup Pool</b>, crowned with the World Cup semifinals still to be played. That result was also the dagger: England knocked out Gabey's Norway — the only live threat — and hours later Gabey's Switzerland fell to Lee's Argentina, so the runner-up spent both his teams in a single afternoon. All that's left now is the race for 2nd. Grades below.</p>
<h3>Quarterfinals — results</h3>
<ul>
<li>France 2–0 Morocco — Les Bleus cruise into the semis</li>
<li>Spain 2–1 Belgium — Merino's late winner</li>
<li>England edge Norway — Diccy's clinching point</li>
<li>Argentina beat Switzerland — more late Messi heroics</li>
</ul>
<h3>Report card</h3>
<p><b>Diccy — A+ 🏆 CHAMPION.</b> England saw off Norway to bank your 56th point — and with that, it's mathematically <b>over</b>: nobody left can reach 56. You've <b>won Nicky's World Cup Pool</b>. The four-team armada became a one-man dinghy, and the dinghy still lapped the field. Fittingly, the clinching win also knocked out Gabey's Norway — your only real threat — in one stroke. Diccy the inevitable. Pop the champagne.</p>
<p><b>Nicky — A.</b> Spain edged Belgium behind Merino's late strike and you're up to 48 with a semifinalist still standing — excellent work. The only snag: Diccy already clinched, so you're now playing for a very handsome 2nd. Spain v France next; win the whole thing and you're a proud runner-up. The handsome Dutch bastard settles for silver contention.</p>
<p><b>Reilly — B+.</b> France did France things past Morocco (2–0) and your lone survivor is into the semis as a title favorite — you're up to 47. The pool crown's gone, but you're square in the scrap with Nicky for silver. Only Spain stands between France and the final.</p>
<p><b>Lee — B.</b> Argentina rode more Messi magic past Switzerland and you're up to 41 — down to one team, but what a one. No route to the pool crown, but Argentina v England in the semis is appointment viewing, and a run to the final locks you well clear of the basement.</p>
<p><b>Gabey — D.</b> Gut-punch. Both Norway and Switzerland lost their quarterfinals on the same afternoon — the generational run ends one step short of the semis, and the man who was Diccy's only real threat is suddenly out of teams. Frozen at 49 and about to be passed for 2nd. From fairytale to funeral in the space of a single day.</p>
<p><b>Gary — F.</b> Still 33, still eliminated — but now you've got company down in the graveyard. Misery loves it.</p>
<h3>Standings</h3>
<table><thead><tr><th>#</th><th>Manager</th><th>Pts</th><th>Move</th></tr></thead><tbody>
<tr style="background:#fff7ed"><td>1</td><td><b>Diccy 🏆</b></td><td><b>56</b></td><td><span style="color:#059669">CLINCHED</span></td></tr>
<tr><td>2</td><td>Gabey</td><td>49</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>3</td><td>Nicky</td><td>48</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>4</td><td>Reilly</td><td>47</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>5</td><td>Lee</td><td>41</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>6</td><td>Gary</td><td>33</td><td><span style="color:#9ca3af">—</span></td></tr>
</tbody></table>
<h3>Semifinal slate (Jul 14–15)</h3>
<ul>
<li>Tue Jul 14, 3:00 PM ET — France <b>(Reilly)</b> v Spain <b>(Nicky)</b></li>
<li>Wed Jul 15, 3:00 PM ET — England <b>(Diccy)</b> v Argentina <b>(Lee)</b></li>
</ul>
<p>The World Cup rolls on to the final (Jul 19), but the pool trophy is decided. These games are now about the <b>race for 2nd</b>.</p>
<h3>The race for 2nd</h3>
<ul>
<li><b>Gabey — 49</b> (no teams left) — frozen; can only watch and hope the chasers fall short.</li>
<li><b>Nicky — 48</b> (Spain) — a Spain semifinal win (→51) leapfrogs Gabey. Best-placed for silver.</li>
<li><b>Reilly — 47</b> (France) — France v Spain is a straight silver-medal shootout with Nicky; a SF win (→50) also clears Gabey.</li>
<li><b>Lee — 41</b> (Argentina) — needs a deep Argentina run to crash the top of the chasing pack.</li>
</ul>
<p><b>But at the top, it's settled: Diccy has won it all.</b> 🏆</p>`
  },   // { date, html } latest daily report
  ntfyTopic: "nickys-wcpool-alerts-9k4m2",  // phone-push topic on ntfy.sh; subscribers get a buzz on standings updates + the daily report
  history: [
    { label: "Jun 11", pts: { Nicky:2, Reilly:0, Diccy:2, Gary:0, Gabey:0, Lee:0 } },
    { label: "Jun 12", pts: { Nicky:2, Reilly:1, Diccy:5, Gary:0, Gabey:0, Lee:0 } }
  ],   // [{label,pts:{...}}] daily standings, drives the Points Over Time chart
  stats: {},     // cumulative scorers/assists (future stats page)
  // Betting odds (FanDuel). Refreshed each morning by the daily task with that day's games.
  // ml/total/title = FanDuel published; dnb & dc = derived from FanDuel moneyline; spread = goal handicap (price approx).
  odds: {
    updated: "Jul 12, 2026",
    gamesLabel: "Semifinals — moneyline & to advance",
    title: [
      { team: "France", american: "+180" }, { team: "Argentina", american: "+240" },
      { team: "Spain", american: "+360" }, { team: "England", american: "+500" }
    ],
    longshots: "the final four — France v Spain and England v Argentina. Point-in-time FanDuel snapshot; check the app for live prices.",
    games: [
      { id:"SF-1", time:"Tue Jul 14 · 3:00 PM ET", venue:"AT&T Stadium, Dallas", home:"France", away:"Spain",
        ml:{ home:"", draw:"", away:"" }, toadv:{ home:"", away:"" } },
      { id:"SF-2", time:"Wed Jul 15 · 3:00 PM ET", venue:"Mercedes-Benz Stadium, Atlanta", home:"England", away:"Argentina",
        ml:{ home:"", draw:"", away:"" }, toadv:{ home:"", away:"" } }
    ],
    goldenBoot: [
      { name: "Kylian Mbappé", team: "France", american: "+280" },
      { name: "Harry Kane", team: "England", american: "+450" },
      { name: "Lionel Messi", team: "Argentina", american: "+900" },
      { name: "Erling Haaland", team: "Norway", american: "+1000" },
      { name: "Mikel Oyarzabal", team: "Spain", american: "+1400" }
    ],
    groupOdds: {}
  }
};
