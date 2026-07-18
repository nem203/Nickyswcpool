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
    date: "The Final Is Set — Wed Jul 15",
    html: `<h3>The story so far</h3>
<p>The World Cup final is set: <b>Nicky's Spain v Lee's Argentina</b> on Sunday. Spain dismantled France 2–0 and Argentina edged England 2–1 (Messi, of course) to book it. In the pool, the podium is now locked in bronze, silver and gold: <b>Diccy is champion</b> (long since clinched), <b>Nicky has secured 2nd</b> — Spain reaching the final pushed him to 51, out of reach — and <b>Gabey is stuck in 3rd</b>, frozen at 49 with no one able to catch him. Diccy's England and Reilly's France meet in the third-place game. Grades below.</p>
<h3>Semifinals — results</h3>
<ul>
<li>Spain 2–0 France — La Roja into the final; France off to the third-place game</li>
<li>Argentina 2–1 England — Messi drags Argentina to another final</li>
</ul>
<h3>Report card</h3>
<p><b>Diccy — A+ 🏆 CHAMPION.</b> England bowed out to Argentina, but it couldn't matter less — you wrapped this up a week ago. The pool title is yours, wire to wire, and England's off to the ceremonial third-place kickabout. Kick back and watch the peasants squabble over the scraps.</p>
<p><b>Nicky — A 🥈.</b> Spain dismantled France 2–0 to reach the World Cup final AND lock up 2nd in the pool at 51 — nobody can catch you now. The handsome Dutch bastard takes silver and still has a live shot at the actual trophy on Sunday. A monster tournament that just fell one draft slot short.</p>
<p><b>Gabey — C 🥉.</b> No teams, no drama, no more points — but the frozen 49 holds up for bronze because the chasers ran out of runway. A quiet, teamless coast to a medal you earned in the group stage. The generational run lands on the podium after all.</p>
<p><b>Reilly — C+.</b> France ran into a buzzsaw — 2–0 to Spain — and the dream dies in the semis. Stuck at 47 and locked in 4th (a third-place-game win nudges you to 48). France for bronze in the real thing, at least.</p>
<p><b>Lee — A– 🎉.</b> From dead last a fortnight ago to a <b>World Cup finalist</b> — Argentina beat England and you're up to 44. No pool medal, but Argentina v Spain on Sunday, and a title would cap the greatest glow-up of the whole pool. Nobody's laughing now.</p>
<p><b>Gary — F.</b> Still 33, still last, still teamless. At this point it's less a grade than a memorial.</p>
<h3>Standings</h3>
<table><thead><tr><th>#</th><th>Manager</th><th>Pts</th><th>Move</th></tr></thead><tbody>
<tr style="background:#fff7ed"><td>1</td><td><b>Diccy 🏆</b></td><td><b>56</b></td><td><span style="color:#059669">CHAMPION</span></td></tr>
<tr><td>2</td><td>Nicky 🥈</td><td>51</td><td><span style="color:#059669">▲ 1 · 2nd locked</span></td></tr>
<tr><td>3</td><td>Gabey 🥉</td><td>49</td><td><span style="color:#dc2626">▼ 1 · 3rd locked</span></td></tr>
<tr><td>4</td><td>Reilly</td><td>47</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>5</td><td>Lee</td><td>44</td><td><span style="color:#9ca3af">—</span></td></tr>
<tr><td>6</td><td>Gary</td><td>33</td><td><span style="color:#9ca3af">—</span></td></tr>
</tbody></table>
<h3>What's left (Jul 18–19)</h3>
<ul>
<li>Sat Jul 18, 3:00 PM ET — 3rd place: France <b>(Reilly)</b> v England <b>(Diccy)</b></li>
<li>Sun Jul 19, 3:00 PM ET — <b>FINAL</b>: Spain <b>(Nicky)</b> v Argentina <b>(Lee)</b></li>
</ul>
<p>The pool podium is set — <b>Diccy 🏆, Nicky 🥈, Gabey 🥉</b>. Only 4th place is still live: Reilly (47) leads Lee (44), but if Argentina wins the World Cup, Lee jumps to 48 and could pass him. And Nicky's Spain plays for the real trophy on Sunday.</p>`
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
    updated: "Jul 15, 2026",
    gamesLabel: "The Final — Sun Jul 19",
    title: [
      { team: "Argentina", american: "+115" }, { team: "Spain", american: "+160" }
    ],
    longshots: "down to two — Spain (Nicky) v Argentina (Lee) for the World Cup. Point-in-time FanDuel snapshot; check the app for live prices.",
    games: [
      { id:"FINAL", time:"Sun Jul 19 · 3:00 PM ET", venue:"MetLife Stadium, NY/NJ", home:"Spain", away:"Argentina",
        ml:{ home:"", draw:"", away:"" }, toadv:{ home:"", away:"" } },
      { id:"THIRD", time:"Sat Jul 18 · 3:00 PM ET", venue:"Hard Rock Stadium, Miami · 3rd place", home:"France", away:"England",
        ml:{ home:"", draw:"", away:"" }, toadv:{ home:"", away:"" } }
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
