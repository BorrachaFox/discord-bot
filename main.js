const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

const getDocs = require("./commands/get-docs")
const memberCount = require("./member-count")

require("dotenv").config()
const config = { token:process.env.TOKEN, prefix:'$' }

client.on("ready", () => {
    console.log(`Bot is online in ${client.guilds.cache.size} guilds`);
    memberCount(client)
})

client.on("message", async message => {
    // Mensagens a serem ignoradas
    if(!message.content.startsWith(config.prefix) || message.author.bot || message.channel.type === 'dm') return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const commando = args.shift().toLocaleLowerCase()
    
    // resposta do bot
    const response = args.length === 0 ? "'-'" : getDocs(commando, args) 
    message.channel.send(response)
})


client.login(config.token)