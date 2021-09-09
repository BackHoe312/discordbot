// discord.js
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// ready event
client.once('ready', () => {
    console.log('Ready!');
});

// message event
client.on('<발생할 이벤트>', () => {
    if (message.content === '<명령어 이름>') {
        message.channel.send('<명령에 대한 응답>');
    }
});

client.login('your-token-goes-here');
