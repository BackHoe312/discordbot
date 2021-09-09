// discord.js
const { Client, Intents } = require('discord.js');
const { token } = require(__dirname + '/../config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// npm install @discordjs/builders @discordjs/rest discord discord-api-types
// @discordjs/builders => 슬래쉬명령어 생성 api
// @discordjs/rest => discord.js 용 REST API
// discord-api-types => discord API에 대한 단순 유형 정의.

client.once('ready', () => {
    console.log(`Ready!\nLogged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
    // client.on('', async () => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === '<입력했던 명령어>') {
        await interaction.reply('<입력된 명령어에 대한 응답>');
    }
    else if (commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name}\n`
            + `Total members: ${interaction.guild.memberCount}`);

    } else if (commandName === 'user') {
        const date = new Date(interaction.user.createdAt);
        await interaction.reply(`Your tag: ${interaction.user.tag}\n`
            + `Your id: ${interaction.user.id}\n`
            + `Join: ${date}`);
    }
});

client.login(token);
