const { SlashCommandBuilder } = require('discord.js');

const clear = new SlashCommandBuilder()
            .setName('clear')
            .setDescription('Clear the current queue');