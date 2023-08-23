const { SlashCommandBuilder } = require('discord.js');

const skip = new SlashCommandBuilder()
            .setName('skip')
            .setDescription('Skip the current song');