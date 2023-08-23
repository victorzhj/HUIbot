const { SlashCommandBuilder } = require('discord.js');
// const { join } = require('../overAll/join.js');

const play = new SlashCommandBuilder()
            .setName('play')
            .setDescription('Play a song (youtube link, spotify link)')
            .addStringOption(option =>
                option.setName('link')
                    .setDescription('Link to the song')
                    .setRequired(true))
