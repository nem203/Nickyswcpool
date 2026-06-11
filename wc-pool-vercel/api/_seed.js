// Initial pool state, written to KV by POST /api/admin {action:"init"}.
module.exports = {
  name: "Nicky's World Cup Pool",
  order: ["Nicky", "Reilly", "Diccy", "Gary", "Gabey", "Lee"],
  colors: {
    "Nicky": "#ea580c", "Reilly": "#d97706", "Diccy": "#db2777",
    "Gary": "#eab308", "Gabey": "#059669", "Lee": "#7c3aed"
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
  recap: null,   // { date:"Jun 17", html:"<...>" } latest daily report (pushed by the morning task)
  ntfyTopic: "nickys-wcpool-alerts-9k4m2",  // phone-push topic on ntfy.sh; subscribers get a buzz on standings updates + the daily report
  history: [],   // [{label,pts:{...}}] daily standings, drives the Points Over Time chart
  stats: {},     // cumulative scorers/assists (future stats page)
  // Betting odds (FanDuel). Refreshed each morning by the daily task with that day's games.
  // ml/total/title = FanDuel published; dnb & dc = derived from FanDuel moneyline; spread = goal handicap (price approx).
  odds: {
    updated: "Jun 11, 2026",
    gamesLabel: "Thu Jun 11 — Group A",
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
        id: "A-1", time: "Thu Jun 11 · 3:00 PM ET", venue: "Estadio Azteca, Mexico City",
        home: "Mexico", away: "South Africa",
        ml: { home: "-260", draw: "+360", away: "+700" },
        dnb: { home: "-580", away: "+575" },
        dc: { hd: "-750", ha: "-390", da: "+210" },
        total: { line: "2.5", over: "+116", under: "-148" },
        spread: { homeLine: "Mexico -1", home: "-115", awayLine: "South Africa +1", away: "-105" }
      },
      {
        id: "A-2", time: "Thu Jun 11 · 10:00 PM ET", venue: "Estadio Akron, Guadalajara",
        home: "South Korea", away: "Czech Republic",
        ml: { home: "+160", draw: "+200", away: "+195" },
        dnb: { home: "-115", away: "+105" },
        dc: { hd: "-210", ha: "-215", da: "-175" },
        total: { line: "2.5", over: "+130", under: "-141" },
        spread: { homeLine: "South Korea -0.5", home: "+125", awayLine: "Czech Republic +0.5", away: "-155" }
      }
    ]
  }
};
