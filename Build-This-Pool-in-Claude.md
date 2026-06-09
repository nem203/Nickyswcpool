# Build a World Cup 2026 Pool Tracker in Claude

This is a starter brief for recreating the pool-tracking setup my friend and I use. Open **Claude** (the desktop **Cowork** mode works best — it can create files, a live tracker, and scheduled tasks), then paste the prompt below. Edit the **bracketed bits** first so it's yours.

---

## How to use this

1. Open Claude Cowork.
2. Copy everything in the **"Paste this to Claude"** box.
3. Replace the bracketed placeholders (`[your players]`, etc.).
4. Send it. Claude will build everything and ask you anything it needs.
5. After your draft, give Claude each player's six teams and it fills them in.

---

## Paste this to Claude

> I'm running a **2026 FIFA World Cup pool** and want you to build and maintain it for me. Please create:
>
> 1. **A live tracker** (a self-contained, persistent HTML page / artifact) with tabs:
>    - **Standings** — players ranked by points, each in their own color, with rank-movement since the last update, a points bar behind each row, a leader "hero" strip up top, a **Points Over Time** line chart (Chart.js), and a **Still Alive & Ceiling** table (points banked + max still achievable, flagging anyone mathematically eliminated).
>    - **Groups** — live group tables (P/W/D/L/GD/Pts) computed from match results, with owned teams marked in their owner's color.
>    - **Games** — all 104 fixtures with date + kickoff time in **US Eastern**, a "Next Up" section, and each team's owner shown.
>    - **H2H** — a manager-vs-manager grid (W–D–L) for whenever two players' teams meet.
>    - **Audit** — an itemized breakdown of every point, plus a chronological scoring log.
>    - Use country **3-letter code badges** (BRA, ENG…) rather than flag emoji (Windows doesn't render flag emoji).
>    - Visual style: navy header with an orange accent and a round "26" badge; clean, modern, mobile-friendly.
> 2. **A rules one-pager** as a polished PDF (build it as a pure-ASCII PDF written directly, so it opens without permission errors) and as a slide deck (HTML, arrow-key navigation, Print-to-PDF to share).
> 3. **A private draft helper** (just for me): all 48 teams ranked by *expected pool points* under our exact scoring, from a Monte-Carlo simulation, with click-to-pick, "mark as taken," a running projected total, and the chance all my teams advance.
> 4. **A daily recap, scheduled every morning during the tournament**, that pulls the previous day's results from the web (verified against a reputable source), updates the tracker, and sends a brief recap with these sections: yesterday's results & scorers (goals + assists), pool standings with movement, still-alive & ceiling, head-to-head, the real group standings, and today's games with owners — all times in ET.
>
> **Players:** [list 6 names, e.g. Sam, Alex, Jordan, …] — give each a distinct color.
> **Format:** each player drafts **6 national teams**; your score is the sum of points your teams earn all tournament.
> **Scoring** (adjust if we want):
> - Group stage: **win 2, draw 1**
> - Knockout wins: **Round of 32 = 3, Round of 16 = 3, Quarterfinal = 4, Semifinal = 5, 3rd-place match = 1, Final = 6**
> - Bonuses: **1st in group +3, 2nd +2, 3rd & advance +1, all six of your teams reach the knockout +3, a team wins all 3 group games +1**
> - Tiebreaker: commissioner's discretion (whoever's teams reached the furthest stage). Commissioner = [name].
>
> The 2026 tournament has 48 teams in 12 groups; top two of each group plus the eight best third-placed teams reach a Round of 32. You can pull the official group draw and full schedule from the web (FIFA / NBC Sports / ESPN). Ask me anything you need, then build it.

---

## What to customize

- **Players & colors** — swap in your group's names; pick 6 distinct, readable colors.
- **Scoring** — the values above are our tuned set (the knockout escalates so deep runs matter, but no single champion runs away with it). Change any number if your group prefers.
- **Time zone** — we use US Eastern; tell Claude yours.
- **Delivery** — we keep the daily recap as a chat message + a shareable deck. If you want it emailed automatically, you'll need to connect a send-capable mail connector.

## Notes / tips (things we learned)

- The 2026 group draw and match schedule are the **same for everyone** — Claude can fetch them; you only supply players, scoring, and (after the draft) each person's six teams.
- Ask for **country-code badges, not flag emoji** — flag emoji show up as plain letters on Windows.
- For PDFs, ask Claude to build a **pure-ASCII PDF written directly** (not compiled in its sandbox) so it opens without an "access denied" error.
- Scheduled tasks only run while the Claude app is open; if it's closed when one is due, it runs at next launch.

Have fun — and may the best drafter win. 🏆
