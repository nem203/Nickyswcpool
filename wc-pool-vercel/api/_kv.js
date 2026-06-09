// Tiny KV helper over the Upstash/Vercel-KV REST API (no dependencies; uses global fetch).
// Vercel KV integration sets KV_REST_API_URL / KV_REST_API_TOKEN.
// A raw Upstash integration sets UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.
const URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function cmd(args) {
  if (!URL || !TOKEN) throw new Error("KV env vars missing (KV_REST_API_URL / KV_REST_API_TOKEN)");
  const r = await fetch(URL, {
    method: "POST",
    headers: { Authorization: "Bearer " + TOKEN, "Content-Type": "application/json" },
    body: JSON.stringify(args)
  });
  const j = await r.json();
  return j.result;
}

module.exports = {
  async getPool() {
    const s = await cmd(["GET", "pool"]);
    return s ? JSON.parse(s) : null;
  },
  async setPool(pool) {
    await cmd(["SET", "pool", JSON.stringify(pool)]);
    return pool;
  }
};
