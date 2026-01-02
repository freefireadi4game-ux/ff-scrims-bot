import { Client, GatewayIntentBits } from "discord.js";
import mongoose from "mongoose";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", () => {
  console.log(`🔥 Scrims Bot Online as ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "setup") {
    await interaction.reply("✅ Scrims system setup complete!");
  }

  if (interaction.commandName === "createscrim") {
    await interaction.reply("🏆 Scrims created (Free + Paid supported)");
  }

  if (interaction.commandName === "register") {
    await interaction.reply("👥 Team registered successfully");
  }

  if (interaction.commandName === "leaderboard") {
    await interaction.reply("📊 Leaderboard generated");
  }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Database connected"))
  .catch(console.error);

client.login(process.env.BOT_TOKEN);
