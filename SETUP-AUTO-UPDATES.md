# Automatic score updates — one-time setup

This makes the **public website** update its own scores with zero input from you. It runs on Vercel's servers (which can reach the internet, unlike the daily-task environment): on a schedule it pulls finished World Cup matches from a free scores API, recomputes standings, updates the site, and fires phone alerts.

You set this up once. After that you never touch it.

## Files added
- `api/cron.js` — the auto-updater (fetch scores → map to your teams → recompute standings → save → push alert).
- `vercel.json` — tells Vercel to run it on a schedule.

## Steps

1. **Get a free scores API token.**
   - Go to **football-data.org** → register (free) → copy your API token from your account page.
   - Free tier includes the World Cup. (If it ever returns a 403, the free tier doesn't cover WC for your account and we'll switch to another free API — tell me.)

2. **Add two environment variables in Vercel** (Project → Settings → Environment Variables, Production):
   - `FOOTBALL_DATA_TOKEN` = the token from step 1
   - `CRON_SECRET` = any random string you make up, e.g. `wc-cron-7h2k9x` (this keeps strangers from triggering it)

3. **Push the new files to GitHub** (`api/cron.js` and `vercel.json`), then **Redeploy** so the env vars and cron take effect.

4. **Test it** — open this in your browser (use your CRON_SECRET):
   `https://nickyswcpool.vercel.app/api/cron?key=YOUR_CRON_SECRET`
   - You should get JSON back. `{"updated":true,"changes":["Mexico 2-0 South Africa", ...]}` means it worked and the live standings just updated.
   - `{"updated":false,"message":"no new finished matches"}` means it ran fine, nothing new to add.

## How often it runs
- **Automatic (built in):** Vercel runs it **once a day at 9 AM ET** — refreshes standings every morning, no action needed.
- **For ~every-2-hours (optional, free):** create a free job at **cron-job.org** that does a GET on
  `https://nickyswcpool.vercel.app/api/cron?key=YOUR_CRON_SECRET`
  every 2 hours. (Vercel's free plan caps its own cron at once daily, so an external pinger is how you get more frequent updates without paying.)

## Notes
- This auto-handles the **group stage** (wins/draws, group placement, advancement, sweeps). **Knockout** results and any edge cases can be entered on `/admin.html`.
- Any match whose team names don't map is listed under `"skipped"` in the JSON — send me that list and I'll add the alias.
