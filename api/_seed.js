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
    date: "Group Stage Final — Sun Jun 28",
    html: `<h3>The story so far</h3>
<p>The group stage is in the books — and it belongs to Diccy. All <b>six</b> of his teams advanced, Mexico swept Group A, and the all-advance bonus carries him to a commanding 42 and the outright lead. Astonishingly, Gabey ALSO got all six through, vaulting to 37 and sole 2nd — the laughing-stock-to-contender arc complete. Nicky (35) slips to a tie for 3rd with a surging Reilly, whose France sweep dragged him from the cellar. Gary sits 5th, and Lee — despite Argentina and Belgium both winning their groups — is dead last after losing half his roster. On to the Round of 32. Grades below.</p>
<h3>Saturday's results (Groups J–L)</h3>
<ul>
<li>Argentina 3–1 Jordan</li>
<li>Austria 3–3 Algeria</li>
<li>Colombia 0–0 Portugal</li>
<li>DR Congo 3–1 Uzbekistan</li>
<li>England 2–0 Panama</li>
<li>Croatia 2–1 Ghana</li>
</ul>
<h3>Report card</h3>
<p><b>Diccy — A+.</b> GROUP-STAGE CHAMPION. All six of your teams advanced — every single one — and Mexico's flawless sweep of Group A was the cherry on top. The all-advance bonus rockets you to <b>42</b> and the outright lead into the knockouts. This isn't luck anymore; it's a juggernaut. And the bracket gift-wraps it: England v DR Congo AND USA v Bosnia are both all-Diccy ties, so you're guaranteed two teams into the Round of 16.</p>
<p><b>Nicky — A.</b> Five of six through and a Group H title — but the all-advancers leapfrogged you, so you slip from 1st to a tie for 3rd at 35 (only South Korea let you down). Don't sulk: the bracket adores you. Netherlands v Morocco AND Spain v Austria are both all-Nicky ties — guaranteed bodies in the Round of 16. The handsome Dutch bastard is far from finished.</p>
<p><b>Reilly — A.</b> From dead last to a tie for 3rd — what a finish. France's group sweep, plus Colombia, Croatia, Canada and Senegal all advancing, dragged you all the way to 35. Only Iran's three sleepy draws kept you from a perfect six. The second-half Reilly was real after all. France v Sweden opens your knockout run.</p>
<p><b>Lee — D+.</b> A tale of two squads. Argentina swept their group and Belgium won theirs — genuinely elite — but the other half of your roster was a bonfire: Turkey, Czech Republic and Scotland all crashed out. Just three of six advanced, and you're dead last at 28. The silver lining: your survivors are studs. Argentina v Cape Verde, Belgium v Senegal and Ivory Coast v Norway are your knockout tickets.</p>
<p><b>Gary — C+.</b> Quietly fine, quietly fifth. Germany won Group E and five of your six advanced, but a stack of runner-up and third-place finishes — plus Uruguay's limp, winless exit — leaves you at 29 and mid-table. A cruel quirk awaits: your Germany plays your Paraguay in the R32, so one of your own ends another's run. Portugal v Croatia and France v your Sweden also loom.</p>
<p><b>Gabey — A+.</b> THE FAIRYTALE IS COMPLETE. All six of your teams advanced — every one — capping the greatest laughing-stock-to-contender arc the pool has ever seen. The all-advance bonus lifts you to 37 and a clear 2nd, right on Diccy's heels, and you pulled it off mid-house-move. Switzerland v Algeria is an all-Gabey R32 tie; the dream rolls on.</p>
<h3>Standings</h3>
<table><thead><tr><th>#</th><th>Manager</th><th>Pts</th><th>Move</th></tr></thead><tbody>
<tr><td>1</td><td>Diccy</td><td>42</td><td><span style="color:#059669">▲ 1</span></td></tr>
<tr><td>2</td><td>Gabey</td><td>37</td><td><span style="color:#059669">▲ 1</span></td></tr>
<tr><td>3</td><td>Nicky</td><td>35</td><td><span style="color:#dc2626">▼ 2</span></td></tr>
<tr><td>4</td><td>Reilly</td><td>35</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>5</td><td>Gary</td><td>29</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>6</td><td>Lee</td><td>28</td><td><span style="color:#9ca3af">—</span></td></tr>
</tbody></table>
<h3>Round of 32 — it begins</h3>
<ul>
<li>Sun Jun 28, 3:00 PM ET — South Africa v Canada <b>(Reilly)</b></li>
<li>Mon Jun 29 — Brazil <b>(Gabey)</b> v Japan <b>(Gary)</b>; Germany <b>(Gary)</b> v Paraguay <b>(Gary)</b>; Netherlands <b>(Nicky)</b> v Morocco <b>(Nicky)</b></li>
<li>Tue Jun 30 — Ivory Coast <b>(Lee)</b> v Norway <b>(Gabey)</b>; France <b>(Reilly)</b> v Sweden <b>(Gary)</b>; Mexico <b>(Diccy)</b> v Ecuador <b>(Gabey)</b></li>
</ul>
<p>Win or go home. 32 teams, 16 ties — and six of them are all-one-owner showdowns (a manager guaranteed to advance, and to eliminate one of their own). The full bracket with every matchup and owner is on the new <b>Bracket</b> page.</p>`
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
