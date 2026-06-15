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
    date: "Morning Report — Mon Jun 15",
    html: `<h3>The story so far</h3>
<p>Sunday was a goal-fest — 23 of them across four games — and the table got shaken like a snow globe. Gary went from dead last to genuine contender in one afternoon, Nicky's alone at the top, and the Knicks honeymoon is officially over. Movement column added so you can see exactly who's rising and who's sinking. Grades below.</p>
<h3>Sunday's results</h3>
<ul>
<li>Germany 7–1 Curaçao</li>
<li>Netherlands 2–2 Japan</li>
<li>Ivory Coast 1–0 Ecuador</li>
<li>Sweden 5–1 Tunisia</li>
</ul>
<h3>Report card</h3>
<p><b>Diccy — B.</b> Another quiet Sunday on the couch and you got leapfrogged — Nicky's clear of you now and Gary sprinted right up your back. None of your teams played. Again. Still nursing the hangover from Friday night's 4–1 USA romp, apparently — and while you slept it off, the host-nation lead you built quietly started shrinking.</p>
<p><b>Nicky — A.</b> The sweet, sweet Netherlands you hyped all weekend… drew 2–2 with Japan. Bit of an anticlimax for the headline act. But the role players keep covering for you, and you've backed into <i>sole</i> first place anyway. The luckiest man in the pool stays on top — for now.</p>
<p><b>Reilly — D.</b> Didn't play, got passed by everyone who did, and now sits dead last all by yourself. France remains a rumor you whisper to feel something. The entire portfolio is one drawn Canada and a prayer — and the prayer hasn't kicked off yet. But chin up, champ: at least Darien won the state championship. Cling to that one — it might be the only banner you raise all summer.</p>
<p><b>Lee — B−.</b> Ivory Coast nicked a 90th-minute winner over Ecuador and suddenly the dumpster fire has two working sprinklers. Up to 4th and genuinely climbing. The catch? You're now stuck exactly one spot behind Gary — yes, <i>that</i> Gary, the guy who couldn't even be bothered to congratulate you on your Knicks winning it all, and he <i>still</i> ranks above you. Argentina and Belgium remain no-shows, but credit where it's due — the fire's finally pointed in the right direction.</p>
<p><b>Gary — A+.</b> Stop everything: yesterday's milk-carton candidate just dropped <b>five points in one afternoon</b>. Germany hung a SEVEN on Curaçao, Sweden put five on Tunisia, and Japan chipped in a draw against Nicky's Dutch. Dead last to the podium in a single Sunday — the white jersey is suddenly the hottest brand in the pool. That Tartan Army hangover was clearly worth it.</p>
<p><b>Gabey — C−.</b> The championship hangover hit hard. Ecuador went down to a last-gasp Ivory Coast goal, you banked nothing, and you slid to 5th. The Knicks banner and the Ferrari win were glorious, my friend — but the World Cup's gone cold again, and it's back to the parking lot. Brazil needs to actually win one of these.</p>
<h3>Standings</h3>
<table><thead><tr><th>#</th><th>Manager</th><th>Pts</th><th>Move</th></tr></thead><tbody>
<tr><td>1</td><td>Nicky</td><td>6</td><td><span style="color:#059669">▲ 1</span></td></tr>
<tr><td>2</td><td>Diccy</td><td>5</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
<tr><td>3</td><td>Gary</td><td>5</td><td><span style="color:#059669">▲ 3</span></td></tr>
<tr><td>4</td><td>Lee</td><td>4</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>5</td><td>Gabey</td><td>2</td><td><span style="color:#dc2626">▼ 2</span></td></tr>
<tr><td>6</td><td>Reilly</td><td>1</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
</tbody></table>
<h3>Today's slate (Mon Jun 15)</h3>
<ul>
<li>12:00 PM ET — Spain <b>(Nicky)</b> v Cape Verde</li>
<li>3:00 PM ET — Belgium <b>(Lee)</b> v Egypt <b>(Diccy)</b></li>
<li>6:00 PM ET — Saudi Arabia v Uruguay <b>(Gary)</b></li>
<li>9:00 PM ET — Iran <b>(Reilly)</b> v New Zealand</li>
</ul>
<p>The big guns are out at last: Spain finally plays, and Belgium v Egypt is a head-to-head — Lee and Diccy go to war directly. Gary can stretch his lead with Uruguay, and Reilly's lonely portfolio adds Iran. Gabey, with no team in action today, is free to keep polishing that Knicks banner.</p>`
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
