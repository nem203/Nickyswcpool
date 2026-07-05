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
    date: "Round of 16 — Sat Jul 4",
    html: `<h3>The story so far</h3>
<p>Down to the Sweet 16. The Round of 32 was carnage — Paraguay stunned Germany on penalties and Morocco bounced the Netherlands, two all-owner ties that quietly cost Gary and Nicky a contender each. Diccy went a flawless 4-for-4 to stretch his lead to <b>50</b>, while Reilly's trio (Canada, France, Colombia) all advanced to leapfrog Nicky into 3rd. Grades below.</p>
<h3>Round of 32 — headlines</h3>
<ul>
<li>Paraguay stun Germany on penalties (1–1 aet) — biggest win in their history</li>
<li>Morocco knock out the Netherlands on penalties</li>
<li>Canada beat South Africa in stoppage time — first-ever knockout win</li>
<li>Belgium edge Senegal 3–2 after extra time; France cruise past Sweden 3–0</li>
<li>Brazil edge Japan 2–1 on a 96th-minute winner; Haaland's Norway down Ivory Coast</li>
</ul>
<h3>Report card</h3>
<p><b>Diccy — A+.</b> Perfect. A flawless 4-for-4 — Mexico, England, USA and Egypt all through — and a 50-point lead so fat it belongs on a wealth-inequality chart. Mexico still hasn't conceded a goal all tournament; you still haven't conceded anyone else has a prayer. Everyone officially hates the frontrunner now. Mexico v England is an all-you tie, so kick back — you've already booked a quarterfinal against yourself.</p>
<p><b>Nicky — B.</b> A masterclass in shooting yourself in both feet. Morocco knocked out your Netherlands, Spain bounced your Austria — a two-tie civil war in which you eliminated your own men before anyone else got the chance. Morocco and Spain march on, technically, but the self-inflicted bloodbath let Reilly stroll right past you into 3rd. The handsome Dutch bastard, now doing his own dirty work.</p>
<p><b>Reilly — A.</b> The surge that refuses to die. Canada in stoppage time, France steamrolling Sweden 3–0, Colombia squeezing past Ghana — 3-for-3, and you've muscled past Nicky into sole 3rd at 41. We've stopped calling it a fluke and started calling it a problem. The reward? France draws your OWN Paraguay — so you're on track to knock yourself out. Poetic.</p>
<p><b>Lee — C+.</b> Two teams left and STILL in last — a genuine feat of engineering. In fairness, both delivered: Argentina waltzed past Cape Verde and Belgium clung on until the 125th minute against Senegal, presumably because they know how much you enjoy suffering. Argentina is your lone lottery ticket — laminate it. Belgium draws the USA; Argentina gets Egypt.</p>
<p><b>Gary — B.</b> Only you could lose a genuine contender and have nobody to blame — because you owned both sides. Paraguay (population: who-knows) dumped your Germany out on penalties: the biggest win in their history and the most on-brand loss in yours. Portugal survived to extend Ronaldo's farewell tour another week. Next, Paraguay "gets" France — which is the polite way of saying it's been fun.</p>
<p><b>Gabey — A.</b> Three-for-three and still climbing — Brazil on a 96th-minute winner, Haaland's Norway, and Switzerland doing Switzerland things — up to 43 and 2nd, the glow-up complete. But the football gods have jokes: Brazil v Norway is an all-Gabey tie, so you'll personally end one of your own fairytales this weekend. Bring tissues.</p>
<h3>Standings</h3>
<table><thead><tr><th>#</th><th>Manager</th><th>Pts</th><th>Move</th></tr></thead><tbody>
<tr><td>1</td><td>Diccy</td><td>50</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>2</td><td>Gabey</td><td>43</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>3</td><td>Reilly</td><td>41</td><td><span style="color:#059669">▲ 1</span></td></tr>
<tr><td>4</td><td>Nicky</td><td>39</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
<tr><td>5</td><td>Gary</td><td>33</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>6</td><td>Lee</td><td>32</td><td><span style="color:#9ca3af">—</span></td></tr>
</tbody></table>
<h3>Round of 16 slate (Jul 4–7)</h3>
<ul>
<li>Sat Jul 4, 1:00 PM ET — Canada <b>(Reilly)</b> v Morocco <b>(Nicky)</b></li>
<li>Sat Jul 4, 5:00 PM ET — Paraguay <b>(Gary)</b> v France <b>(Reilly)</b></li>
<li>Sun Jul 5, 4:00 PM ET — Brazil <b>(Gabey)</b> v Norway <b>(Gabey)</b></li>
<li>Sun Jul 5, 8:00 PM ET — Mexico <b>(Diccy)</b> v England <b>(Diccy)</b></li>
<li>Mon Jul 6, 3:00 PM ET — Portugal <b>(Gary)</b> v Spain <b>(Nicky)</b></li>
<li>Mon Jul 6, 8:00 PM ET — United States <b>(Diccy)</b> v Belgium <b>(Lee)</b></li>
<li>Tue Jul 7, 12:00 PM ET — Argentina <b>(Lee)</b> v Egypt <b>(Diccy)</b></li>
<li>Tue Jul 7, 4:00 PM ET — Switzerland <b>(Gabey)</b> v Colombia <b>(Reilly)</b></li>
</ul>
<p>Win or go home — a R16 win is worth <b>3</b> points. Two all-owner ties guarantee a quarterfinalist: Diccy's Mexico v England and Gabey's Brazil v Norway. Full bracket, with every matchup and owner, on the <b>Bracket</b> page.</p>`
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
    updated: "Jul 4, 2026",
    gamesLabel: "Round of 16 — moneyline & to advance",
    title: [
      { team: "France", american: "+360" }, { team: "Argentina", american: "+390" },
      { team: "Spain", american: "+600" }, { team: "England", american: "+600" },
      { team: "Brazil", american: "+1200" }
    ],
    longshots: "every other team still alive sits at +1400 or longer (Germany, Portugal, Netherlands, Belgium, Colombia, Morocco, Croatia, Switzerland…) — check FanDuel for the full live board.",
    games: [
      { id:"R16-1", time:"Sat Jul 4 · 1:00 PM ET", venue:"NRG Stadium, Houston", home:"Canada", away:"Morocco",
        ml:{ home:"+380", draw:"+230", away:"-115" }, toadv:{ home:"+205", away:"-260" } },
      { id:"R16-2", time:"Sat Jul 4 · 5:00 PM ET", venue:"Lincoln Financial Field, Philadelphia", home:"Paraguay", away:"France",
        ml:{ home:"+1900", draw:"+600", away:"-600" }, toadv:{ home:"+1220", away:"-2000" } },
      { id:"R16-3", time:"Sun Jul 5 · 4:00 PM ET", venue:"MetLife Stadium, NY/NJ", home:"Brazil", away:"Norway",
        ml:{ home:"-125", draw:"+260", away:"+360" }, toadv:{ home:"-270", away:"+215" } },
      { id:"R16-4", time:"Sun Jul 5 · 8:00 PM ET", venue:"Estadio Azteca, Mexico City", home:"Mexico", away:"England",
        ml:{ home:"+210", draw:"+210", away:"+140" }, toadv:{ home:"+114", away:"-140" } },
      { id:"R16-5", time:"Mon Jul 6 · 3:00 PM ET", venue:"AT&T Stadium, Dallas", home:"Portugal", away:"Spain",
        ml:{ home:"+310", draw:"+260", away:"-115" }, toadv:{ home:"+180", away:"-225" } },
      { id:"R16-6", time:"Mon Jul 6 · 8:00 PM ET", venue:"Lumen Field, Seattle", home:"United States", away:"Belgium",
        ml:{ home:"+165", draw:"+230", away:"+170" }, toadv:{ home:"-104", away:"-118" } },
      { id:"R16-7", time:"Tue Jul 7 · 12:00 PM ET", venue:"Mercedes-Benz Stadium, Atlanta", home:"Argentina", away:"Egypt",
        ml:{ home:"-290", draw:"+390", away:"+850" }, toadv:{ home:"-800", away:"+520" } },
      { id:"R16-8", time:"Tue Jul 7 · 4:00 PM ET", venue:"BC Place, Vancouver", home:"Switzerland", away:"Colombia",
        ml:{ home:"", draw:"", away:"" }, toadv:{ home:"", away:"" } }
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
