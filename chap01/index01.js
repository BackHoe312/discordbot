// discord.js
const { Client, Intents } = require('discord.js');
// const { token } = require(__dirname + '/../config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// ready event
client.once('ready', () => {
    console.log('Ready!');
});

// message event
client.on('message', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong.');
    }
    // else if (message.content === '!beep') {
    //     message.channel.send('Boop.');
    // }
});

client.login('your-token-goes-here');
// client.login(token);