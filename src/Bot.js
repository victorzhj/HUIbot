require("dotenv").config()

const {Client, GatewayIntentBits } = require("discord.js")
const client = new Client({
  intents: [
    GatewayIntentBits .Flags.Guilds,
    GatewayIntentBits .Flags.GuildMessages,
    GatewayIntentBits .Flags.GuildMembers,
    GatewayIntentBits .Flags.MessageContent,
  ],
})

client.on("ready", (c) => {
  console.log(`Logged in as ${c.user.tag}!`)
})


client.login(process.env.TOKEN)