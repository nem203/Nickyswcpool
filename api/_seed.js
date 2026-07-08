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
    date: "Quarterfinals — Wed Jul 8",
    html: `<h3>The story so far</h3>
<p>The Round of 16 thinned the herd and shook the pool. Diccy's armada was gutted — three of his four teams went out in a single round, leaving just England to protect a lead now trimmed to four. Gabey (two teams) surged to sole 2nd and gets a shot at England. Lee's Argentina and Belgium both won to climb off the floor. And Gary is done — both his teams lost, so he's out of teams and out of the race. Grades below.</p>
<h3>Round of 16 — headlines</h3>
<ul>
<li>Morocco 3–0 Canada; Spain 1–0 Portugal</li>
<li>France 1–0 Paraguay; Belgium 4–1 USA</li>
<li>Norway 2–1 Brazil (all-Gabey); England 3–2 Mexico (all-Diccy)</li>
<li>Argentina 3–2 Egypt — Messi-inspired comeback</li>
<li>Switzerland beat Colombia on penalties</li>
</ul>
<h3>Report card</h3>
<p><b>Diccy — C+.</b> The mortal juggernaut. Three of your four teams — Mexico, USA, Egypt — crashed out in a single round, and only England survived (by knocking out your own Mexico, naturally). You still lead at 53, but the four-team armada is now a one-man dinghy, and it sails straight into Gabey's Norway in the quarters. Everyone can suddenly smell blood.</p>
<p><b>Nicky — A.</b> Finally, a round where you didn't assassinate your own players. Morocco dispatched Canada and Spain edged Portugal — two clean wins, +6, up to 3rd at 45 with both teams intact. The handsome Dutch bastard has remembered which goal to shoot at, and now has as good a two-team hand as anyone in the field.</p>
<p><b>Reilly — C.</b> The surge sputters. France did its job past Paraguay, but Canada and Colombia both bowed out, and you're down to a single team — France, sitting 4th at 44. The good news: France is arguably the best team left standing. The bad news: it's <i>all</i> you've got, so it has to win the entire thing. No pressure.</p>
<p><b>Lee — A.</b> Well, look at you. Argentina survived a Messi-inspired thriller and Belgium hammered the USA 4–1 — both through, +6, and you've bullied your way off the bottom to 38. From punching bag to genuinely dangerous in one round, and both your teams can actually play. Who invited this guy?</p>
<p><b>Gary — F.</b> It's over. Paraguay's fairytale ended against France, Portugal fell to Spain, and you're left with exactly <b>zero</b> teams and zero ways to score another point. Frozen at 33, mathematically eliminated, and demoted to a spectator with strong opinions. Pour one out — the Tartan Army disbands early and the golf-pool Commish slander was, in the end, correct.</p>
<p><b>Gabey — A.</b> The glow-up rolls on. Norway ended Brazil's tournament (you wept, then remembered you owned both), and Switzerland ground Colombia out on penalties. Two teams into the quarters, up to 49 and sole 2nd — and now Norway gets a crack at knocking out the leader's last team. From laughing stock to the man most likely to catch Diccy. Wild.</p>
<h3>Standings</h3>
<table><thead><tr><th>#</th><th>Manager</th><th>Pts</th><th>Move</th></tr></thead><tbody>
<tr><td>1</td><td>Diccy</td><td>53</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>2</td><td>Gabey</td><td>49</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>3</td><td>Nicky</td><td>45</td><td><span style="color:#059669">▲ 1</span></td></tr>
<tr><td>4</td><td>Reilly</td><td>44</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
<tr><td>5</td><td>Lee</td><td>38</td><td><span style="color:#059669">▲ 1</span></td></tr>
<tr><td>6</td><td>Gary</td><td>33</td><td><span style="color:#dc2626">▼ 1</span></td></tr>
</tbody></table>
<h3>Quarterfinal slate (Jul 9–11)</h3>
<ul>
<li>Thu Jul 9, 4:00 PM ET — France <b>(Reilly)</b> v Morocco <b>(Nicky)</b></li>
<li>Fri Jul 10, 3:00 PM ET — Spain <b>(Nicky)</b> v Belgium <b>(Lee)</b></li>
<li>Sat Jul 11, 5:00 PM ET — Norway <b>(Gabey)</b> v England <b>(Diccy)</b></li>
<li>Sat Jul 11, 9:00 PM ET — Argentina <b>(Lee)</b> v Switzerland <b>(Gabey)</b></li>
</ul>
<p>A QF win is worth <b>3</b> points. The whole pool may hinge on <b>Norway v England</b> — the leader's last team against the top challenger's. Full bracket and every owner on the <b>Bracket</b> page.</p>
<h3>Path to win</h3>
<ul>
<li><b>Diccy — 53.</b> Clinches the title the moment <b>England reaches the final</b> (that puts him at 59, out of reach). If England loses in the QF or semi, the door swings open.</li>
<li><b>Gabey — 49.</b> Needs <b>Norway to beat England</b> in the QF (freezing Diccy at 53), then Norway or Switzerland to reach the final. A title makes it certain.</li>
<li><b>Nicky — 45.</b> Needs Morocco <b>and</b> Spain to win their quarterfinals and one to go on and win the tournament — with England falling before the final.</li>
<li><b>Reilly — 44.</b> One thread: <b>France wins it all</b>, England loses its QF, and Argentina is the team France beats in the final. Anything else and a rival passes him.</li>
<li><b>Lee — 38.</b> Needs an <b>all-Lee final</b> — both Argentina and Belgium reaching it — plus England losing its QF. It's the only way he reaches 54.</li>
<li><b>Gary — 33.</b> Eliminated — no teams left, no way to score.</li>
</ul>
<p>The fulcrum of the whole pool: <b>Norway (Gabey) v England (Diccy)</b> on Saturday — it decides whether Diccy cruises or the race blows wide open.</p>`
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
    updated: "Jul 8, 2026",
    gamesLabel: "Quarterfinals — moneyline & to advance",
    title: [
      { team: "France", american: "+260" }, { team: "Argentina", american: "+320" },
      { team: "Spain", american: "+550" }, { team: "England", american: "+650" },
      { team: "Belgium", american: "+1400" }, { team: "Morocco", american: "+2000" },
      { team: "Switzerland", american: "+2800" }, { team: "Norway", american: "+3000" }
    ],
    longshots: "all eight quarterfinalists are listed above — point-in-time FanDuel snapshot; check the app for live prices.",
    games: [
      { id:"QF-1", time:"Thu Jul 9 · 4:00 PM ET", venue:"Gillette Stadium, Boston", home:"France", away:"Morocco",
        ml:{ home:"-175", draw:"+290", away:"+550" }, toadv:{ home:"-390", away:"+300" } },
      { id:"QF-2", time:"Fri Jul 10 · 3:00 PM ET", venue:"SoFi Stadium, Los Angeles", home:"Spain", away:"Belgium",
        ml:{ home:"-165", draw:"+290", away:"+490" }, toadv:{ home:"-380", away:"+280" } },
      { id:"QF-3", time:"Sat Jul 11 · 5:00 PM ET", venue:"Hard Rock Stadium, Miami", home:"Norway", away:"England",
        ml:{ home:"+330", draw:"+260", away:"-120" }, toadv:{ home:"+182", away:"-230" } },
      { id:"QF-4", time:"Sat Jul 11 · 9:00 PM ET", venue:"Arrowhead Stadium, Kansas City", home:"Argentina", away:"Switzerland",
        ml:{ home:"-145", draw:"+260", away:"+450" }, toadv:{ home:"-310", away:"+240" } }
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
