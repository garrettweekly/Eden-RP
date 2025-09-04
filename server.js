/* eslint-env node */
/* global process */
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import 'dotenv/config'; // or: import dotenv from 'dotenv'; dotenv.config();

const app = express();
app.use(cors());
const DISCORD_TOKEN = 'MTQxMjY4MDE5ODIxODA1NTcyMA.GC2I7W.hwBQRS9LpGALDFGcS4myE3ujiBGFSZfceTSTrQ';
const GUILD_ID = '1386475286136356924'; // your server ID

if (!DISCORD_TOKEN || !GUILD_ID) {
  console.error('Missing DISCORD_TOKEN or GUILD_ID');
  process.exit(1);
}

app.get("/events", async (_req, res) => {
  try {
    const resp = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}/scheduled-events`,
      { headers: { Authorization: `Bot ${DISCORD_TOKEN}` } }
    );
    if (!resp.ok) throw new Error(`Discord API error ${resp.status}`);
    const events = await resp.json();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));