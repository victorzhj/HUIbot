const {SlashCommandBuilder} = require('discord.js');

const pause = new SlashCommandBuilder()
            .setName('pause')
            .setDescription('Pause the current song');