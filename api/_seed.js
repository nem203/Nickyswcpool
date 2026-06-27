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
    date: "Morning Report — Sat Jun 27",
    html: `<h3>The story so far</h3>
<p>A new leader, and a stunner in Group I. Reilly's France ran the table — Dembélé's first-half hat-trick burying Gabey's Norway 4–1 to sweep the group — a colossal haul that rockets Reilly off the bottom all the way to 4th. With Norway settling for runner-up, Gabey had a rare quiet day and slipped to a tie for 2nd. And on top of it all: Nicky's Spain beat Gary's Uruguay 1–0 to win Group H and seize <b>outright first</b> at 32. Grades below.</p>
<h3>Friday's results (Groups G–I)</h3>
<ul>
<li>France 4–1 Norway</li>
<li>Senegal 5–0 Iraq</li>
<li>Spain 1–0 Uruguay</li>
<li>Cape Verde 0–0 Saudi Arabia</li>
<li>Egypt 1–1 Iran</li>
<li>Belgium 5–1 New Zealand</li>
</ul>
<h3>Report card</h3>
<p><b>Diccy — B.</b> Egypt backed into a runner-up finish in Group G — a 1–1 with Iran, a VAR-overturned Iranian winner doing you a quiet favor — good for +3. Enough to hold 2nd at 30, now level with a suddenly-mortal Gabey. England and DR Congo both close out today — a chance to chase Nicky down and reclaim top spot.</p>
<p><b>Nicky — A+.</b> TO THE TOP. Spain edged Gary's Uruguay 1–0 to win Group H outright — head-to-head bragging rights and a first-place bonus — and with Gabey stumbling, you've seized sole possession of <b>first</b> at 32. The handsome Dutch bastard leads the whole pool. Austria faces Gabey's Algeria tonight — keep the hammer down.</p>
<p><b>Reilly — A+.</b> THE SURGE WENT NUCLEAR. France ran the table in Group I — Dembélé's first-half hat-trick demolishing Gabey's Norway 4–1 — for a first-place AND a sweep bonus, while Senegal battered Iraq 5–0. A monstrous +9 day catapults you to 26 and all the way up to 4th. From dead last to genuine contender in 24 hours. Croatia and Colombia both play today — keep it rolling.</p>
<p><b>Lee — B.</b> Belgium delivered — a 5–1 rout of New Zealand to overtake Diccy's Egypt and win Group G, bonus and all, a tidy +5 to 22. The cruel twist: Reilly's France-fueled explosion leapfrogged you anyway, so you're dead last on the alphabet despite a genuinely strong day. Argentina's out tonight to fight back.</p>
<p><b>Gary — D+.</b> Brutal. Uruguay lost the Group H decider 1–0 to Nicky's Spain — no win, no group bonus, a clean zero — and as the pack surged you tumbled to 5th on 24. The Portugal-sized cushion is long gone. Portugal faces Reilly's Colombia today; you desperately need the big dog to roar again.</p>
<p><b>Gabey — B.</b> The reign paused. Norway ran into a Dembélé buzzsaw — beaten 4–1 by Reilly's France — and had to settle for 2nd in Group I and a mere +2. Your first ordinary day in a while knocked you off the throne: you're now tied for 2nd at 30, two back of Nicky. Still a generational run, just no longer the outright lead. Ghana and Algeria both close today to reclaim it.</p>
<h3>Standings</h3>
<table><thead><tr><th>#</th><th>Manager</th><th>Pts</th><th>Move</th></tr></thead><tbody>
<tr><td>1</td><td>Nicky</td><td>32</td><td><span style="color:#059669">▲ 2</span></td></tr>
<tr><td>2</td><td>Diccy</td><td>30</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>3</td><td>Gabey</td><td>30</td><td><span style="color:#dc2626">▼ 2</span></td></tr>
<tr><td>4</td><td>Reilly</td><td>26</td><td><span style="color:#059669">▲ 2</span></td></tr>
<tr><td>5</td><td>Gary</td><td>24</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
<tr><td>6</td><td>Lee</td><td>22</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
</tbody></table>
<h3>Today's slate (Sat Jun 27)</h3>
<ul>
<li>5:00 PM ET — Panama v England <b>(Diccy)</b></li>
<li>5:00 PM ET — Croatia <b>(Reilly)</b> v Ghana <b>(Gabey)</b></li>
<li>7:30 PM ET — Colombia <b>(Reilly)</b> v Portugal <b>(Gary)</b></li>
<li>7:30 PM ET — DR Congo <b>(Diccy)</b> v Uzbekistan</li>
<li>10:00 PM ET — Jordan v Argentina <b>(Lee)</b></li>
<li>10:00 PM ET — Algeria <b>(Gabey)</b> v Austria <b>(Nicky)</b></li>
</ul>
<p>The final day of the group stage — Groups J, K and L wrap, then it's knockouts. Three head-to-heads to close it out: Reilly's Croatia v Gabey's Ghana, Reilly's Colombia v Gary's Portugal, and Gabey's Algeria v Nicky's Austria. Everyone's in action one last time before the bracket locks.</p>`
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
