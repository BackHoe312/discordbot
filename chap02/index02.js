// discord.js
const { Client, Intents } = require('discord.js');
const { token } = require(__dirname + '/../config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log(`Ready!\nLogged in as ${client.user.tag}`);
});

client.on('', async () => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === '<입력했던 명령어>') {
        await interaction.reply('<입력된 명령어에 대한 응답>');
    }
});

client.login(token);
