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
    date: "Morning Report — Mon Jun 22",
    html: `<h3>The story so far</h3>
<p>Sunday reshuffled the summit. Diccy's Egypt ground out their first-ever World Cup win and Nicky's Spain dismantled Saudi Arabia 4–0 — both vault to 15 and a share of first, knocking Gary off the top after his Uruguay could only draw. Down in the basement, Belgium and Iran played out a goalless six-pointer, handing Lee and Reilly a point apiece. Grades below.</p>
<h3>Sunday's results</h3>
<ul>
<li>Spain 4–0 Saudi Arabia</li>
<li>Uruguay 2–2 Cape Verde</li>
<li>Belgium 0–0 Iran</li>
<li>Egypt 3–1 New Zealand</li>
</ul>
<h3>Report card</h3>
<p><b>Diccy — A.</b> Egypt did the work — a 3–1 over New Zealand, their first-ever World Cup win — and you sit tied for the lead at 15 — with a game in hand on the field. The lead you thought had slipped away is right back, and then some. Funny how that keeps happening for you. Off today, so kick back and watch the chasers sweat.</p>
<p><b>Nicky — A+.</b> You asked the sleeping giant to wake and Spain ANSWERED — a 4–0 demolition of Saudi Arabia, Yamal pulling every string. You've stormed to 15 and a share of first. The pool is now well and truly yours to seize. Austria's out today against Lee's Argentina — keep the foot down. Great job, you handsome Dutch bastard.</p>
<p><b>Reilly — C+.</b> The basement six-pointer ended even — Iran's 0–0 with Belgium banked you a point and nudged you to 9, though the alphabet still has you dead last. Notably, you were the lone American in the country rooting for the Iranians — and presumably the only one who disagrees with them being escorted out of the country seconds after the final whistle. But here comes the turn you keep promising: France <b>and</b> Senegal both play today. The great second-half Reilly surge has officially run out of excuses.</p>
<p><b>Lee — C.</b> Belgium looked as listless as your chances in this pool — a goalless draw with Iran. You're tied with Reilly at 9, despite him having played three fewer games than you. Let that sink in. Argentina's out today against Nicky's Austria: win that head-to-head or the basement is your permanent address.</p>
<p><b>Gary — B.</b> Splitting a point with a country nobody has ever heard of is not how you want your Sunday to go — Uruguay could only draw Cape Verde 2–2, two points left on the table, and you slip to 3rd as Diccy and Nicky pulled level at 15. Still very much alive on 14. Off today, so no damage to be done — and none to be undone. The lead is right there.</p>
<p><b>Gabey — B−.</b> An idle Sunday while the top three feasted — you're holding at 11, but the gap to first ballooned to four. And it's house-closing week, a monumentous day in the lad's life — good luck with the logistics. You used to fret about the gap between renting and owning; your gap in this pool is now creeping dangerously close to those historic highs. The good news: Norway and Algeria both play today, with Norway drawn against Reilly's Senegal in a tasty head-to-head. A real chance to claw points back before the gap hardens.</p>
<h3>Standings</h3>
<table><thead><tr><th>#</th><th>Manager</th><th>Pts</th><th>Move</th></tr></thead><tbody>
<tr><td>1</td><td>Diccy</td><td>15</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>2</td><td>Nicky</td><td>15</td><td><span style="color:#059669">▲ 1</span></td></tr>
<tr><td>3</td><td>Gary</td><td>14</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
<tr><td>4</td><td>Gabey</td><td>11</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>5</td><td>Lee</td><td>9</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>6</td><td>Reilly</td><td>9</td><td><span style="color:#9ca3af">—</span></td></tr>
</tbody></table>
<h3>Today's slate (Mon Jun 22)</h3>
<ul>
<li>1:00 PM ET — Argentina <b>(Lee)</b> v Austria <b>(Nicky)</b></li>
<li>5:00 PM ET — France <b>(Reilly)</b> v Iraq</li>
<li>8:00 PM ET — Norway <b>(Gabey)</b> v Senegal <b>(Reilly)</b></li>
<li>11:00 PM ET — Jordan v Algeria <b>(Gabey)</b></li>
</ul>
<p>Groups I and J, matchday 2 — and it's a bottom-half showcase. Two head-to-heads headline it: Lee's Argentina v Nicky's Austria, and Gabey's Norway v Reilly's Senegal. Reilly's France and Gabey's Algeria round out a huge day for the chasers, while Diccy and Gary sit back and watch their lead get tested.</p>`
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
