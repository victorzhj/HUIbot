const { SlashCommandBuilder } = require('discord.js');
const { checkUserChannel, connect, checkSameChannel } = require('../../utils.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('Join the voice channel'),
    async execute(interaction) {
        const userInChannel = checkUserChannel(interaction);
        if (!userInChannel) {
            return interaction.reply('You need to join a voice channel first!');
        }
        
        if (checkSameChannel(interaction)) {
            return interaction.reply('I am already in your voice channel!');
        }

        /**
        const voiceConnection = getVoiceConnection(interaction.guild.id);
        if (voiceConnection) {
            if (voiceConnection.joinConfig.channelId === interaction.member.voice.channel.id) {
                return interaction.reply('I am already in your voice channel!');
            }
        }
         */

        const connection = connect(interaction);

        interaction.reply('Joined the voice channel ' + interaction.member.voice.channel.name);
        connection.on('error', console.warn);
    },
};