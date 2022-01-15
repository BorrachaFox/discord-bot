const docs = require('./techs.json')

module.exports = (commando, args) => { 
    if (commando.toLowerCase() === 'docs') {
        tech = args[0].toLowerCase()
        if(tech in docs) return docLink = docs[tech];
    };
    return `A documentação de **${tech}** não foi encontrada`;
}