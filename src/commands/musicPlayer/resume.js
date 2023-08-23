const { SlashCommandBuilder } = require('discord.js');

const resume = new SlashCommandBuilder()
            .setName('resume')
            .setDescription('Resume the current song');
