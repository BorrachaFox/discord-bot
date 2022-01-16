const docs = require('../data/techs.json');

const execute = (client, msg, args) => { 
    const tech = args[0].toLowerCase()
    if(tech in docs) {
        msg.channel.send(docs[tech])
    } else {
        msg.channel.send(`A documentação de **${tech}** não foi encontrada`);
    }
}

module.exports = {
    name: "docs",
    help: "Retorna uma MessageEmbed",
    execute,
}