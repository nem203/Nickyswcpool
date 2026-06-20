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
    date: "Morning Report — Sat Jun 20",
    html: `<h3>The story so far</h3>
<p>Friday belonged to the front-runners. Diccy's USA beat Nicky's Australia 2–0 — yes, Diccy beat Nicky head-to-head <i>again</i> — to stretch the lead to 13, Brazil finally roared for Gabey, and Paraguay rescued Gary off the bottom. The casualty: Lee, whose Turkey and Scotland both lost on a brutal zero day. Grades below.</p>
<h3>Friday's results</h3>
<ul>
<li>United States 2–0 Australia</li>
<li>Scotland 0–1 Morocco</li>
<li>Brazil 3–0 Haiti</li>
<li>Turkey 0–1 Paraguay</li>
</ul>
<h3>Report card</h3>
<p><b>Diccy — A.</b> First Mexico over South Korea, now the USA over Australia — you have personally beaten Nicky head-to-head <i>twice</i>, and the lead is out to a fat <b>13</b>. This is starting to look less like a pool and more like a coronation. Off today, so put the feet up, hit the beach with the lads, and pound drinks. You deserve it.</p>
<p><b>Nicky — B.</b> Mileage at last — Morocco actually <i>won</i> (one of those eternally-drawing top picks finally woke up!), but Australia fell to Diccy's USA, so you took the split and sit a clear 2nd on 11. Pulling double-commish duty across two pools is no small task, and you're handling it wonderfully. And the big one: your Dutch play today — Hup Hup Holland, you handsome, fresh-haircutted bastard.</p>
<p><b>Reilly — C.</b> No teams in action, so you stood still and sank right back to <b>dead last</b> — the cellar clearly missed you. You're a second-half kind of guy, though: your teams all play at the back end of this round of group games, so don't worry — we all know you'll pass Lee.</p>
<p><b>Lee — D+.</b> A putrid, putrid performance by Türkiye, and you are the one to blame. Safe to say you won't be welcome in that country when you inevitably need a hair transplant. Oh, and the Tartan Army lost too. Zero points on the day — tough. Ivory Coast face the Germans today, which will likely be another fat 0. Last-place Lee? We shall see.</p>
<p><b>Gary — B+.</b> You begged for "anything," and Paraguay answered with a 1–0 — vaulting you off the bottom and up to 4th. Still a long way to go, though. While pundits are questioning your role as Commish in the golf pool, they're also questioning your ability in this one. Can Gary prove the haters wrong? The answer is likely not — but today's the big one: <b>three</b> of your teams play (Germany, Sweden, Japan). Bank a couple of wins and the hater talk perhaps dies for good.</p>
<p><b>Gabey — A.</b> Brazil FINALLY arrived — a tidy 3–0 over Haiti — and you're up to 10 in clear 3rd, genuinely knocking on the door. The tides have well and truly turned; the odds keep climbing right alongside the rates. Genuinely impressed by your resilience in times of turmoil. Ecuador plays today for a real crack at the podium-toppers.</p>
<h3>Standings</h3>
<table><thead><tr><th>#</th><th>Manager</th><th>Pts</th><th>Move</th></tr></thead><tbody>
<tr><td>1</td><td>Diccy</td><td>13</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>2</td><td>Nicky</td><td>11</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>3</td><td>Gabey</td><td>10</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>4</td><td>Gary</td><td>9</td><td><span style="color:#059669">▲ 2</span></td></tr>
<tr><td>5</td><td>Lee</td><td>8</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
<tr><td>6</td><td>Reilly</td><td>8</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
</tbody></table>
<h3>Today's slate (Sat Jun 20)</h3>
<ul>
<li>1:00 PM ET — Netherlands <b>(Nicky)</b> v Sweden <b>(Gary)</b></li>
<li>4:00 PM ET — Germany <b>(Gary)</b> v Ivory Coast <b>(Lee)</b></li>
<li>8:00 PM ET — Ecuador <b>(Gabey)</b> v Curaçao</li>
<li>12:00 AM ET — Tunisia v Japan <b>(Gary)</b></li>
</ul>
<p>Groups E and F, matchday 2 — and it's Gary's biggest day yet, with <b>three</b> teams out: Sweden (v Nicky's Netherlands), Germany (v Lee's Ivory Coast), and Japan. Gabey's Ecuador also plays. Diccy and Reilly are the ones on the sidelines.</p>`
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
    updated: "Jun 13, 2026",
    gamesLabel: "Sat Jun 13 — Groups B & C",
    title: [
      { team: "Spain", american: "+450" }, { team: "France", american: "+500" },
      { team: "England", american: "+700" }, { team: "Brazil", american: "+850" },
      { team: "Portugal", american: "+850" }, { team: "Argentina", american: "+1000" },
      { team: "Germany", american: "+1300" }, { team: "Netherlands", american: "+1600" },
      { team: "Belgium", american: "+2200" }, { team: "Colombia", american: "+4000" },
      { team: "Morocco", american: "+5000" }, { team: "Uruguay", american: "+5500" },
      { team: "Croatia", american: "+7500" }
    ],
    longshots: "all other drafted teams sit at +10000 or longer — the morning update refreshes the full board.",
    games: [
      {
        id: "B-2", time: "Sat Jun 13 · 3:00 PM ET", venue: "Levi's Stadium, Santa Clara",
        home: "Qatar", away: "Switzerland",
        ml: { home: "+1400", draw: "+550", away: "-550" },
        dnb: { home: "+1300", away: "-1300" },
        dc: { hd: "+380", ha: "-600", da: "-1500" },
        total: { line: "2.5", over: "+110", under: "-135" },
        spread: { homeLine: "Qatar +1.5", home: "+100", awayLine: "Switzerland -1.5", away: "-120" }
      },
      {
        id: "C-1", time: "Sat Jun 13 · 6:00 PM ET", venue: "MetLife Stadium, NY/NJ",
        home: "Brazil", away: "Morocco",
        ml: { home: "-155", draw: "+300", away: "+450" },
        dnb: { home: "-340", away: "+340" },
        dc: { hd: "-470", ha: "-320", da: "+141" },
        total: { line: "2.5", over: "-138", under: "+110" },
        spread: { homeLine: "Brazil -1", home: "+135", awayLine: "Morocco +1", away: "-165" }
      },
      {
        id: "C-2", time: "Sat Jun 13 · 9:00 PM ET", venue: "Gillette Stadium, Foxborough",
        home: "Haiti", away: "Scotland",
        ml: { home: "+525", draw: "+350", away: "-225" },
        dnb: { home: "+430", away: "-430" },
        dc: { hd: "+181", ha: "-380", da: "-580" },
        total: { line: "2.5", over: "-105", under: "-115" },
        spread: { homeLine: "Haiti +1", home: "-135", awayLine: "Scotland -1", away: "+110" }
      }
    ],
    goldenBoot: [
      { name: "Kylian Mbappé", team: "France", american: "+600" },
      { name: "Harry Kane", team: "England", american: "+700" },
      { name: "Mikel Oyarzabal", team: "Spain", american: "+1200" },
      { name: "Erling Haaland", team: "Norway", american: "+1600" },
      { name: "Lionel Messi", team: "Argentina", american: "+1800" },
      { name: "Lamine Yamal", team: "Spain", american: "+2700" }
    ],
    groupOdds: {
      A: [ { team: "Mexico", win: "-140", adv: "-1200" }, { team: "South Korea", win: "+370", adv: "-300" }, { team: "Czech Republic", win: "+390", adv: "-280" }, { team: "South Africa", win: "+1200", adv: "+160" } ],
      B: [ { team: "Switzerland", win: "-135", adv: "-1200" }, { team: "Canada", win: "+170", adv: "-550" }, { team: "Bosnia and Herzegovina", win: "+470", adv: "-150" }, { team: "Qatar", win: "+3500", adv: "+350" } ],
      C: [ { team: "Brazil", win: "-340", adv: "-5000" }, { team: "Morocco", win: "+340", adv: "-400" }, { team: "Scotland", win: "+950", adv: "+100" }, { team: "Haiti", win: "+12500", adv: "+500" } ],
      D: [ { team: "United States", win: "+130", adv: "-750" }, { team: "Turkey", win: "+175", adv: "-500" }, { team: "Paraguay", win: "+400", adv: "-180" }, { team: "Australia", win: "+800", adv: "+120" } ],
      E: [ { team: "Germany", win: "-270", adv: "-4000" }, { team: "Ecuador", win: "+330", adv: "-350" }, { team: "Ivory Coast", win: "+550", adv: "-130" }, { team: "Curaçao", win: "+12500", adv: "+450" } ],
      F: [ { team: "Netherlands", win: "-125", adv: "-2000" }, { team: "Japan", win: "+270", adv: "-450" }, { team: "Sweden", win: "+440", adv: "-170" }, { team: "Tunisia", win: "+1300", adv: "+200" } ],
      G: [ { team: "Belgium", win: "-240", adv: "-3000" }, { team: "Egypt", win: "+420", adv: "-300" }, { team: "Iran", win: "+750", adv: "-110" }, { team: "New Zealand", win: "+2200", adv: "+280" } ],
      H: [ { team: "Spain", win: "-425", adv: "-10000" }, { team: "Uruguay", win: "+410", adv: "-350" }, { team: "Saudi Arabia", win: "+4000", adv: "+300" }, { team: "Cape Verde", win: "+5500", adv: "+400" } ],
      I: [ { team: "France", win: "-210", adv: "-5000" }, { team: "Norway", win: "+280", adv: "-300" }, { team: "Senegal", win: "+750", adv: "-120" }, { team: "Iraq", win: "+6500", adv: "+400" } ],
      J: [ { team: "Argentina", win: "-290", adv: "-10000" }, { team: "Austria", win: "+370", adv: "-280" }, { team: "Algeria", win: "+800", adv: "-110" }, { team: "Jordan", win: "+6500", adv: "+400" } ],
      K: [ { team: "Portugal", win: "-210", adv: "-2000" }, { team: "Colombia", win: "+200", adv: "-450" }, { team: "DR Congo", win: "+2000", adv: "+220" }, { team: "Uzbekistan", win: "+2700", adv: "+300" } ],
      L: [ { team: "England", win: "-250", adv: "-3000" }, { team: "Croatia", win: "+340", adv: "-350" }, { team: "Ghana", win: "+1100", adv: "+100" }, { team: "Panama", win: "+4000", adv: "+320" } ]
    }
  }
};
