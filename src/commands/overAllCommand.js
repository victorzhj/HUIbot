const { SlashCommandBuilder } = require('discord.js');

const leave = new SlashCommandBuilder()
            .setName('leave')
            .setDescription('Leave the voice channel');

const join = new SlashCommandBuilder()
            .setName('join')
            .setDescription('Join the voice channel');

module.exports = {
    leave, join}