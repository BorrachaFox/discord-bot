const MessageEmbed = require("discord.js").MessageEmbed;
const chatId = require("../data/channels.json").channel.documentation;
const docs = require('../data/techs.json');

const mkEmbed = (tech) => {
    const embed = new MessageEmbed()
        .setTitle(`Documentation | ${tech.name}`)
        .setURL(tech.link)
        .setColor(tech.color)
        .setTimestamp()

    return embed;
}

const execute = (client, msg, args) => { 
    if(msg.channel.id !== chatId) return;
    
    const tech = args[0].toLowerCase()

    if(tech in docs) {
        const embed = mkEmbed(docs[tech])
        msg.channel.send({ embeds: [embed] })
    } else {
        msg.channel.send(`A documentação de **${tech}** não foi encontrada`);
    }
}

module.exports = {
    name: "docs",
    help: "Retorna a documentação da tecnologia informada",
    execute,
}