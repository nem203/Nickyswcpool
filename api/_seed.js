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
    date: "Morning Report — Wed Jun 24",
    html: `<h3>The story so far</h3>
<p>The summit got crowded again. Gary's Portugal demolished Uzbekistan 5–0 (a Ronaldo brace) to surge back into a three-way tie for first at 16 with Diccy and Gabey, both of whom scraped draws to hold on. But the day belonged to Reilly: Colombia and Croatia both won 1–0, a +4 haul that finally delivered the long-promised second-half surge — and bounced idle Lee down to dead last. Grades below.</p>
<h3>Tuesday's results</h3>
<ul>
<li>Portugal 5–0 Uzbekistan</li>
<li>Colombia 1–0 DR Congo</li>
<li>England 0–0 Ghana</li>
<li>Croatia 1–0 Panama</li>
</ul>
<h3>Report card</h3>
<p><b>Diccy — B.</b> A mixed night across your two head-to-heads — England ground out a goalless draw with Gabey's Ghana, but DR Congo got nicked 1–0 by Reilly's Colombia. Just +1 on the day, and yet you're STILL atop a three-way tie at 16. The phenomenon endures. Two more in action today — Bosnia and Mexico close their groups — so the cushion-less lead gets another test.</p>
<p><b>Nicky — C+.</b> An idle Tuesday and the table slid right past you — you're 4th now on 15, the only one of the top four who didn't move. The handsome Dutch bastard has gone quiet. Morocco and South Korea both close their groups today; you'll need points to climb back into the title picture.</p>
<p><b>Reilly — A+.</b> THE SURGE IS REAL. Colombia edged DR Congo 1–0 and Croatia saw off Panama 1–0 — back-to-back wins, +4 on the day — and just like you swore for two weeks, the second-half Reilly has arrived. You've vaulted to 15 and, for the first time, climbed OUT of the basement. Canada plays today to keep the heater running.</p>
<p><b>Lee — D.</b> You enjoyed the view from not-quite-last for exactly one day. Reilly's double-win surge sailed right past your idle side, and the basement is once again, fittingly, yours — dead last on 11. Scotland and Czech Republic both play today; time to actually show up, or last place becomes a long-term lease.</p>
<p><b>Gary — A.</b> The big dog ROARED. Portugal battered Uzbekistan 5–0 with a Ronaldo brace, and you've surged right back into a three-way tie for first at 16 — exactly the statement the doubters needed. And you weren't even watching your own team: spotted at the England game having the time of your life with the lads. Off today, so plant the flag on your share of the summit and enjoy the view.</p>
<p><b>Gabey — A−.</b> Ghana couldn't break down Diccy's England — a goalless draw — but a point keeps you locked in a three-way tie for first at 16. Not Monday's four-point fireworks, but holding station at the very top mid-house-closing week is no small feat. You're on a generational run — from laughing stock to outright leader in a matter of days. Switzerland and Brazil both play today for a real crack at the outright lead.</p>
<h3>Standings</h3>
<table><thead><tr><th>#</th><th>Manager</th><th>Pts</th><th>Move</th></tr></thead><tbody>
<tr><td>1</td><td>Diccy</td><td>16</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>2</td><td>Gabey</td><td>16</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>3</td><td>Gary</td><td>16</td><td><span style="color:#059669">▲ 1</span></td></tr>
<tr><td>4</td><td>Nicky</td><td>15</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
<tr><td>5</td><td>Reilly</td><td>15</td><td><span style="color:#059669">▲ 1</span></td></tr>
<tr><td>6</td><td>Lee</td><td>11</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
</tbody></table>
<h3>Today's slate (Wed Jun 24)</h3>
<ul>
<li>3:00 PM ET — Switzerland <b>(Gabey)</b> v Canada <b>(Reilly)</b></li>
<li>3:00 PM ET — Bosnia and Herzegovina <b>(Diccy)</b> v Qatar</li>
<li>6:00 PM ET — Scotland <b>(Lee)</b> v Brazil <b>(Gabey)</b></li>
<li>6:00 PM ET — Morocco <b>(Nicky)</b> v Haiti</li>
<li>9:00 PM ET — Czech Republic <b>(Lee)</b> v Mexico <b>(Diccy)</b></li>
<li>9:00 PM ET — South Africa v South Korea <b>(Nicky)</b></li>
</ul>
<p>Groups A, B and C wrap up — matchday 3, win-or-go-home for the teams and a points bonanza for the pool. Everyone's in action except Gary: two apiece for Diccy (Bosnia, Mexico), Lee (Scotland, Czech Republic), Nicky (Morocco, South Korea) and Gabey (Switzerland, Brazil), plus Reilly's Canada. Group-placement bonuses start landing tonight.</p>`
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
