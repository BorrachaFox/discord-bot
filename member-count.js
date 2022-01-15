module.exports = async (client) => {   
    const guild = client.guilds.cache.get('898657448750088192')
  
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('931927084140470373')
        channel.setName(`🌎 Members: ${memberCount}`)
        return memberCount
    }, 5000)
}