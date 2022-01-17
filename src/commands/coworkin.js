const chatId = require("../data/channels.json").channel.coworking;
const categoryId = require("../data/channels.json").category.coworking;

const execute = (client, msg, args) => {
    if(msg.channel.id !== chatId) return;
    msg.delete()

    const limit = parseInt(args[0])
    const name = `🔊〢co-working`

    msg.guild.channels
        .create(name, {
            type: 'GUILD_VOICE',
        })
        .then((channel) => {
            channel.setParent(categoryId)
            channel.setUserLimit(limit)

            msg.channel.send(`Canal de voz para ${limit} usuarios\nCanal criado: <#${channel.id}>`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 10000)
                })
        })
}

module.exports = {
    name: "cowork",
    help: "create a coworking voice channel",
    execute,
}