const { SlashCommandBuilder } = require('discord.js');

const queue = new SlashCommandBuilder()
            .setName('queue')
            .setDescription('Show the current queue');