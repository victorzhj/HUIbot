const { SlashCommandBuilder } = require('discord.js');

const repeat = new SlashCommandBuilder()
            .setName('repeat')
            .setDescription('Repeat the current song');