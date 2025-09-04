import express from "express";
import fetch from "node-fetch";
import 'dotenv/config'; // or: import dotenv from 'dotenv'; dotenv.config();

const app = express();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const GUILD_ID = process.env.GUILD_ID; // your server ID

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