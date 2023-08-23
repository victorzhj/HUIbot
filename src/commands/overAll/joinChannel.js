const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('Join the voice channel'),
    async execute(interaction) {
        if (!interaction.member.voice.channel) {
            return interaction.reply('You need to join a voice channel first!');
        }
        // TODO Check if the bot is already in the same voice channel
        
        /** 
         * const client = interaction.client;
         *  console.log(interaction.client);
        if (client.voice.channel) {
            if (client.voice.channel.id === interaction.member.voice.channel.id) {
                return interaction.reply('I am already in your voice channel!');
            }
        }
        */
        
        const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });
        interaction.reply('Joined the voice channel' + interaction.member.voice.channel.name);
        connection.on('error', console.warn);
    },
};