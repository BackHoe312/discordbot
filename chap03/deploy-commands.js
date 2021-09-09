const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require(__dirname + '/../config.json');

const commands = [];
const commandFiles = fs.readdirSync(__dirname + '/../commands')
    .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

}

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
