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
    date: "Morning Report — Thu Jun 18",
    html: `<h3>The story so far</h3>
<p>Plot twist of the tournament: Diccy "went dark," watched zero minutes, and his teams still hauled him from 3rd back to a tie for the lead — England battered Reilly's Croatia 4–2 and DR Congo nicked a point. It's a logjam now: 9–9 at the top, 7–7 in the middle, 6–6 at the back. Grades below.</p>
<h3>Wednesday's results</h3>
<ul>
<li>Portugal 1–1 DR Congo</li>
<li>England 4–2 Croatia</li>
<li>Ghana 1–0 Panama</li>
<li>Colombia 3–1 Uzbekistan</li>
</ul>
<h3>Report card</h3>
<p><b>Diccy — A+.</b> Unbelievable. You "went dark," didn't watch a single minute, and your teams still dragged you from 3rd to a tie for <b>1st</b> — England bludgeoned Reilly's Croatia 4–2 and DR Congo grabbed a point off Portugal. Turns out the secret to this whole pool is simply refusing to acknowledge it exists. Back on top, somehow, without even looking.</p>
<p><b>Nicky — B+.</b> The Commish sits tied for first place — and get this, his top three picks (Spain, Netherlands, Morocco) have done nothing but <i>draw</i>. Imagine the carnage when they actually start winning. The rest of the pool had better watch out for that handsome Dutch bastard. Tonight, his South Korea faces Diccy's Mexico in a genuine four-pointer.</p>
<p><b>Reilly — C−.</b> Let's stop being polite about it: you are in <b>dead last</b>, and it is not a fluke. You loudly called your shot to steamroll past Gabey — then Croatia got carpet-bombed 4–2 by England the very same day and you faceplanted right back to the bottom. Colombia's 3–1 bailed you out — and let's be honest, it is certainly not the first time you've been saved by Colombia ;) — but one functioning team does not a roster make, and let's not forget you literally drafted <i>both sides</i> of a match to cap your own ceiling. The big talk keeps writing checks the squad cannot cash. Two games today to claw out of the basement; the bar is on the floor.</p>
<p><b>Lee — C+.</b> A day off and the Messi magic wore off fast — you tumbled from 2nd all the way to 4th without kicking a ball. That's the danger of a quiet day when the pack is this tight: stand still and the field tramples you. You're also out here claiming you caught Ghana's fantastic late winner live — but we all know you were buried on a call and saw exactly none of it. Czech Republic plays today; maybe actually watch this one.</p>
<p><b>Gary — C+.</b> Portugal fumbled what should've been an easy two points, drawing DR Congo — and they did it the full Penaldo way, with Ronaldo spurning one glaring chance after another up top. You and your captain make quite the pair. The point still nudges you to 7 and a share of 3rd, but the critics are circling with the obvious question: is Gary, like his striker, simply too old for this?</p>
<p><b>Gabey — B.</b> Brutal week off the pitch — the Fed signaled a rate hike this year, so those mortgage rates aren't dropping any time soon — but you persevered and captured two key points, with Ghana edging Panama 1–0 for your second straight win. Up to 6 and still a nose ahead of Reilly. The campaign has a heartbeat. Switzerland faces Diccy's Bosnia today: a chance to climb and dent a co-leader in one go.</p>
<h3>Standings</h3>
<table><thead><tr><th>#</th><th>Manager</th><th>Pts</th><th>Move</th></tr></thead><tbody>
<tr><td>1</td><td>Diccy</td><td>9</td><td><span style="color:#059669">▲ 2</span></td></tr>
<tr><td>2</td><td>Nicky</td><td>9</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
<tr><td>3</td><td>Gary</td><td>7</td><td><span style="color:#059669">▲ 1</span></td></tr>
<tr><td>4</td><td>Lee</td><td>7</td><td><span style="color:#dc2626">▼ 2</span></td></tr>
<tr><td>5</td><td>Gabey</td><td>6</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>6</td><td>Reilly</td><td>6</td><td><span style="color:#9ca3af">—</span></td></tr>
</tbody></table>
<h3>Today's slate (Thu Jun 18)</h3>
<ul>
<li>12:00 PM ET — Czech Republic <b>(Lee)</b> v South Africa</li>
<li>3:00 PM ET — Switzerland <b>(Gabey)</b> v Bosnia &amp; Herzegovina <b>(Diccy)</b></li>
<li>6:00 PM ET — Canada <b>(Reilly)</b> v Qatar</li>
<li>9:00 PM ET — Mexico <b>(Diccy)</b> v South Korea <b>(Nicky)</b></li>
</ul>
<p>Matchday 2 opens in Groups A and B, and the headliner is the co-leaders colliding: Diccy's Mexico v Nicky's South Korea. Gabey's Switzerland also draws Diccy's Bosnia. Gary's the only manager fully on the sidelines today.</p>`
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
