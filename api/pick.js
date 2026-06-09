const { getPool, setPool } = require("./_kv");

function onClock(order, count) {
  const n = order.length;
  const r = Math.floor(count / n);
  const seq = (r % 2 === 0) ? order : order.slice().reverse();
  return seq[count % n];
}
function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  try { return JSON.parse(req.body || "{}"); } catch (e) { return {}; }
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  try {
    const { player, team } = readBody(req);
    const pool = await getPool();
    if (!pool || pool.uninitialized) return res.status(400).json({ error: "Draft not initialized" });
    const total = pool.order.length * (pool.rounds || 6);
    if (pool.picks.length >= total) return res.status(400).json({ error: "Draft complete" });
    const cur = onClock(pool.order, pool.picks.length);
    if (player !== cur) return res.status(409).json({ error: "Not your turn", onClock: cur });
    const allTeams = Object.values(pool.groups).flat();
    if (!allTeams.includes(team)) return res.status(400).json({ error: "Unknown team" });
    if (pool.picks.some(p => p.team === team)) return res.status(409).json({ error: "Team already taken" });
    pool.picks.push({ team, player });
    await setPool(pool);
    res.status(200).json(pool);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
