const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const { token } = require(__dirname + '/../config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
//

for (const file of commandFiles) {
    //
}

client.once('ready', () => {
    console.log(`Ready!\nLogged in as ${client.user.tag}`);
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    //

    if (!command) return;

    try {
        //
    } catch (err) {
        console.error(err);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.login(token);
