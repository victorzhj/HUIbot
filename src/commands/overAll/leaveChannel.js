const { getVoiceConnection } = require('@discordjs/voice');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('Leave the voice channel'),
        async execute(interaction) {
            const connection = getVoiceConnection(interaction.guild.id);
            if (!connection) {
                return interaction.reply('I am not in a voice channel!');
            }
            connection.destroy();
            interaction.reply('Left the voice channel');
        }
}

            