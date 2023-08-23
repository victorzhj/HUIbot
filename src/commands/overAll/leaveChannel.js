const { SlashCommandBuilder } = require('discord.js');

const leave = new SlashCommandBuilder()
            .setName('leave')
            .setDescription('Leave the voice channel');