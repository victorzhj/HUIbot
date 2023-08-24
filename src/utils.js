const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');

const checkUserChannel = (interaction) => {
    if (!interaction.member.voice.channel) {
        return false
    } else {
        return true
    }
}

const checkSameChannel = (interaction) => {
    const voiceConnection = getVoiceConnection(interaction.guild.id);
        if (voiceConnection) {
            if (voiceConnection.joinConfig.channelId === interaction.member.voice.channel.id) {
                return true
            } else {
                return false
            }
        }
}

const connect = (interaction) => {
    const connection = joinVoiceChannel({
        channelId: interaction.member.voice.channel.id,
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator,
    })
    return connection
}

module.exports = {
    checkUserChannel,
    connect,
    checkSameChannel
}