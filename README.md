# Nicky's World Cup Pool — Vercel app

A shareable site with three pages, backed by one tiny database:

- `/` — **Standings** (read-only): live points, rosters, group tables.
- `/draft.html` — **Live draft**: everyone opens it on their phone, picks their own teams when on the clock, board syncs for all.
- `/recap.html` — **Daily Recap**: the morning report, posted by the scheduled task.

No build step, no framework — just static pages + small serverless functions in `/api`, with state stored in a free **Vercel KV** (Upstash Redis) database.

---

## Deploy it (about 5 minutes)

You do these steps while logged into your own Vercel account.

### 1. Get the project into Vercel
Easiest: install the CLI and run it from this folder.
```bash
npm i -g vercel
cd wc-pool-vercel
vercel            # follow prompts; accept defaults. Then:
vercel --prod
```
(Or: push this folder to a GitHub repo and "Import Project" in the Vercel dashboard.)

### 2. Add the free database
In the Vercel dashboard → your project → **Storage** → **Create Database** → choose **KV** (Upstash Redis) → **Connect** it to this project. Vercel auto-adds the `KV_REST_API_URL` and `KV_REST_API_TOKEN` environment variables.

### 3. Add your admin password
Project → **Settings → Environment Variables** → add:
- `ADMIN_TOKEN` = *(any secret string you choose — keep it private)*

### 4. Redeploy so the new env vars take effect
```bash
vercel --prod
```

### 5. Initialize the pool (one time)
Replace `YOUR_SITE` and `YOUR_TOKEN`:
```bash
curl -X POST https://YOUR_SITE.vercel.app/api/admin \
  -H "Content-Type: application/json" \
  -d '{"token":"YOUR_TOKEN","action":"init"}'
```
That seeds the players, colors, scoring, and the 2026 groups.

### 6. Share the links
- Send everyone **`https://YOUR_SITE.vercel.app/draft.html`** for the draft.
- **`https://YOUR_SITE.vercel.app/`** is the standings page to bookmark.

---

## Running the draft
Each person opens `/draft.html`, picks their name from the dropdown (top-left), and waits. When the board says they're on the clock, the team buttons light up — tap one to draft it. It auto-advances and syncs to everyone within a couple of seconds. Snake order is built in (Nicky → Reilly → Diccy → Gary → Gabey → Lee, reversing each round).

Fix a mistake (admin):
```bash
curl -X POST https://YOUR_SITE.vercel.app/api/admin -H "Content-Type: application/json" -d '{"token":"YOUR_TOKEN","action":"undo"}'
```

## Keeping standings & recap updated
Standings come from `results` (match scores) and `teams` (per-team point records) in the database. You (or the daily task in Claude) push updates with:
```bash
curl -X POST https://YOUR_SITE.vercel.app/api/admin -H "Content-Type: application/json" \
  -d '{"token":"YOUR_TOKEN","patch":{"results":{"A-1":{"hs":2,"as":1}}, "teams":{...}, "recap":{"date":"Jun 17","html":"<h3>Results</h3>..."}}}'
```
**Tip:** give Claude your site URL and `ADMIN_TOKEN` and it will wire the existing morning task to push results, standings, and the daily recap to the site automatically each day.

## API reference
- `GET /api/state` → current pool JSON (public).
- `POST /api/pick` `{player, team}` → records a pick if it's that player's turn (public).
- `POST /api/admin` `{token, action|patch}` → init / undo / reset-picks / merge a patch (results, teams, recap). Requires `ADMIN_TOKEN`.

## Notes
- It's a friends' pool, so the draft trusts each person to pick as themselves (they choose their name). Add a per-person PIN later if you want stricter control.
- Scoring is the locked set: group win 2 / draw 1; R32 2, R16 3, QF 3, SF 3, Final 4; bonuses (1st +3, 2nd +2, 3rd-&-advance +1, all-six-advance +3, group sweep +1).
