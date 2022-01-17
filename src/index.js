const { Client, Intents, Collection } = require("discord.js");
const dotenv = require("dotenv")
const fs = require("fs")
const path = require("path")

dotenv.config()
const config = { token:process.env.TOKEN, prefix:'$' }

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
client.commands = new Collection()

const commandFiles = fs
    .readdirSync(path.join(__dirname, "/commands"))
    .filter((filename) => filename.endsWith(".js"))

for(filename of commandFiles) {
    const command = require(`./commands/${filename}`)
    client.commands.set(command.name, command)
}

client.on("ready", () => {
    console.log('\x1b[36m','Bot is online ✔', '\x1b[0m')
})

client.on("message", async msg => {
    // Mensagens que serão ignoradas
    if(!msg.content.startsWith(config.prefix) || msg.author.bot || msg.channel.type === 'dm') return;
    
    const args = msg.content.slice(config.prefix.length).trim().split(" ");
    const command = args.shift().toLocaleLowerCase()
    
    try {
        client.commands.get(command).execute(client, msg, args);
    } catch(e) {
        console.log(e)
        return msg.reply('Ops! eu não conheço este comando').then(msg => { setTimeout(() => msg.delete(), 10000)})
    }
})

client.login(config.token)
