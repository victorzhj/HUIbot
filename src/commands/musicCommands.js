const { SlashCommandBuilder } = require('discord.js');

const play = new SlashCommandBuilder()
            .setName('play')
            .setDescription('Play a song (youtube link, spotify link)')
            .addStringOption(option =>
                option.setName('link')
                    .setDescription('Link to the song')
                    .setRequired(true));

const pause = new SlashCommandBuilder()
            .setName('pause')
            .setDescription('Pause the current song');

const resume = new SlashCommandBuilder()
            .setName('resume')
            .setDescription('Resume the current song');

const skip = new SlashCommandBuilder()
            .setName('skip')
            .setDescription('Skip the current song');

const queue = new SlashCommandBuilder()
            .setName('queue')
            .setDescription('Show the current queue');

const clear = new SlashCommandBuilder()
            .setName('clear')
            .setDescription('Clear the current queue');

const repeat = new SlashCommandBuilder()
            .setName('repeat')
            .setDescription('Repeat the current song');


module.exports = {
    play, pause, resume, skip, queue, clear, repeat}