const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require(__dirname + '/../config.json');

const commands = [];
console.log(__dirname);
const commandFiles = fs.readdirSync(__dirname + '/../commands')
    .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(__dirname + `/../commands/${file}`);
    commands.push(command.data.toJSON());
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
