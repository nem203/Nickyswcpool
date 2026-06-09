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
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json(pool);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
