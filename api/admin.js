const { getPool, setPool } = require("./_kv");
const SEED = require("./_seed");

function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  try { return JSON.parse(req.body || "{}"); } catch (e) { return {}; }
}

// Actions (all require the correct token = process.env.ADMIN_TOKEN):
//   { action:"init" }            -> seed a fresh pool (resets everything)
//   { action:"undo" }            -> remove the last draft pick
//   { action:"reset-picks" }     -> clear all draft picks (keep settings)
//   { patch:{ results:{...}, teams:{...}, picks:[...] } } -> shallow-merge fields
module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  try {
    const body = readBody(req);
    if (!process.env.ADMIN_TOKEN || body.token !== process.env.ADMIN_TOKEN) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    let pool = await getPool();
    if (body.action === "init") {
      pool = JSON.parse(JSON.stringify(SEED));
    } else {
      if (!pool || pool.uninitialized) pool = JSON.parse(JSON.stringify(SEED));
      if (body.action === "undo") pool.picks.pop();
      else if (body.action === "reset-picks") pool.picks = [];
      else if (body.patch && typeof body.patch === "object") Object.assign(pool, body.patch);
      else return res.status(400).json({ error: "No valid action/patch" });
    }
    await setPool(pool);
    res.status(200).json(pool);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
