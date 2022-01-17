const MessageEmbed = require("discord.js").MessageEmbed;
const chatId = require("../data/channels.json").channel.divulge;

const mkEmbed = (sender, link, description) => {
    const embed = new MessageEmbed()
        .setTitle(sender)
        .setColor('#2C3E50')
        .setURL(link)
        .setDescription(description)

    return embed
}

const execute = (client, msg, args) => {
    if(msg.channel.id !== chatId) return;
    msg.delete()
    
    const link = args[0]
    const sender = msg.author.username
    const frase = args.slice(1).join(" ").toString()

    const embed = mkEmbed(sender, link, frase)
    msg.channel.send({ embeds:[embed] })
}

module.exports = {
    name: "divulga",
    help: "Comando de divulgação",
    execute,
}

//$Divulga [link] ‘obs’
