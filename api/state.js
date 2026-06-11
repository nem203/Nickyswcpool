const { getPool, setPool } = require("./_kv");
const SEED = require("./_seed");

// GET current pool. Auto-initializes from SEED the first time (no manual init step needed).
module.exports = async (req, res) => {
  try {
    let pool = await getPool();
    if (!pool) {
      pool = JSON.parse(JSON.stringify(SEED));
      await setPool(pool);
    }
    // Backfill odds for pools initialized before the field existed, so the Odds page isn't blank pre-token; the daily task overwrites it with live data.
    if (pool && !pool.odds && SEED.odds) pool.odds = SEED.odds;
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json(pool);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
