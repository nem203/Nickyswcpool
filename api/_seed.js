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
    updated: "Jun 28, 2026",
    gamesLabel: "Round of 32 — moneyline & to advance",
    title: [
      { team: "France", american: "+360" }, { team: "Argentina", american: "+390" },
      { team: "Spain", american: "+600" }, { team: "England", american: "+600" },
      { team: "Brazil", american: "+1200" }
    ],
    longshots: "every other team still alive sits at +1400 or longer (Germany, Portugal, Netherlands, Belgium, Colombia, Morocco, Croatia, Switzerland…) — check FanDuel for the full live board.",
    games: [
      { id:"R32-1", time:"Sun Jun 28 · 3:00 PM ET", venue:"SoFi Stadium, Los Angeles", home:"South Africa", away:"Canada",
        ml:{ home:"+470", draw:"+250", away:"-145" }, toadv:{ home:"+260", away:"-340" } },
      { id:"R32-2", time:"Mon Jun 29 · 1:00 PM ET", venue:"NRG Stadium, Houston", home:"Brazil", away:"Japan",
        ml:{ home:"-145", draw:"+290", away:"+410" }, toadv:{ home:"-310", away:"+240" } },
      { id:"R32-3", time:"Mon Jun 29 · 4:30 PM ET", venue:"Gillette Stadium, Boston", home:"Germany", away:"Paraguay",
        ml:{ home:"-280", draw:"+400", away:"+800" }, toadv:{ home:"-750", away:"+490" } },
      { id:"R32-4", time:"Mon Jun 29 · 9:00 PM ET", venue:"Estadio BBVA, Guadalajara", home:"Netherlands", away:"Morocco",
        ml:{ home:"+110", draw:"+210", away:"+290" }, toadv:{ home:"-188", away:"+152" } },
      { id:"R32-5", time:"Tue Jun 30 · 1:00 PM ET", venue:"AT&T Stadium, Dallas", home:"Ivory Coast", away:"Norway",
        ml:{ home:"+260", draw:"+240", away:"+110" }, toadv:{ home:"+156", away:"-190" } },
      { id:"R32-6", time:"Tue Jun 30 · 5:00 PM ET", venue:"MetLife Stadium, NY/NJ", home:"France", away:"Sweden",
        ml:{ home:"-370", draw:"+490", away:"+1000" }, toadv:{ home:"-950", away:"+600" } },
      { id:"R32-7", time:"Tue Jun 30 · 9:00 PM ET", venue:"Estadio Azteca, Mexico City", home:"Mexico", away:"Ecuador",
        ml:{ home:"+115", draw:"+210", away:"+280" }, toadv:{ home:"-184", away:"+150" } },
      { id:"R32-8", time:"Wed Jul 1 · 12:00 PM ET", venue:"Mercedes-Benz Stadium, Atlanta", home:"England", away:"DR Congo",
        ml:{ home:"-360", draw:"+440", away:"+1100" }, toadv:{ home:"-1200", away:"+700" } },
      { id:"R32-9", time:"Wed Jul 1 · 4:00 PM ET", venue:"Lumen Field, Seattle", home:"Belgium", away:"Senegal",
        ml:{ home:"+105", draw:"+220", away:"+290" }, toadv:{ home:"-194", away:"+158" } },
      { id:"R32-10", time:"Wed Jul 1 · 8:00 PM ET", venue:"Levi's Stadium, SF Bay Area", home:"United States", away:"Bosnia and Herzegovina",
        ml:{ home:"-280", draw:"+380", away:"+800" }, toadv:{ home:"-800", away:"+530" } },
      { id:"R32-11", time:"Thu Jul 2 · 3:00 PM ET", venue:"SoFi Stadium, Los Angeles", home:"Spain", away:"Austria",
        ml:{ home:"-330", draw:"+390", away:"+1100" }, toadv:{ home:"-1200", away:"+670" } },
      { id:"R32-12", time:"Thu Jul 2 · 7:00 PM ET", venue:"BMO Field, Toronto", home:"Portugal", away:"Croatia",
        ml:{ home:"-110", draw:"+230", away:"+330" }, toadv:{ home:"-235", away:"+186" } },
      { id:"R32-13", time:"Thu Jul 2 · 11:00 PM ET", venue:"BC Place, Vancouver", home:"Switzerland", away:"Algeria",
        ml:{ home:"-155", draw:"+300", away:"+440" }, toadv:{ home:"-340", away:"+260" } },
      { id:"R32-14", time:"Fri Jul 3 · 2:00 PM ET", venue:"AT&T Stadium, Dallas", home:"Australia", away:"Egypt",
        ml:{ home:"+230", draw:"+190", away:"+150" }, toadv:{ home:"+114", away:"-140" } },
      { id:"R32-15", time:"Fri Jul 3 · 6:00 PM ET", venue:"Hard Rock Stadium, Miami", home:"Argentina", away:"Cape Verde",
        ml:{ home:"-650", draw:"+600", away:"+1900" }, toadv:{ home:"-2500", away:"+1320" } },
      { id:"R32-16", time:"Fri Jul 3 · 9:30 PM ET", venue:"Arrowhead Stadium, Kansas City", home:"Colombia", away:"Ghana",
        ml:{ home:"-135", draw:"+250", away:"+410" }, toadv:{ home:"-300", away:"+235" } }
    ],
    goldenBoot: [
      { name: "Kylian Mbappé", team: "France", american: "+600" },
      { name: "Harry Kane", team: "England", american: "+700" },
      { name: "Mikel Oyarzabal", team: "Spain", american: "+1200" },
      { name: "Erling Haaland", team: "Norway", american: "+1600" },
      { name: "Lionel Messi", team: "Argentina", american: "+1800" },
      { name: "Lamine Yamal", team: "Spain", american: "+2700" }
    ],
    groupOdds: {}
  }
};
