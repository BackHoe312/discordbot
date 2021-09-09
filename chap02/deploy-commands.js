const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require(__dirname + '/../config.json');

const commands = [
    // new SlashCommandBuilder().setName('<명령어 이름>').setDescription('<명령어 설명>'),
    new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully registered application commands.');
    } catch (err) {
        console.error(err);
    }
})();