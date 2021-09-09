const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const { token } = require(__dirname + '/../config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync(__dirname + '/../commands')
    .filter(file => file.endsWith('.js'));
// fs.readdirSync() => 해당 디렉토리에 있는 모든 파일 이름의 배열을 반환
// endWith() => 매개변수로 입력한 문자열로 끝나는 파일이 아닌 것은 걸러서

for (const file of commandFiles) {
    const command = require(__dirname + `/../commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log(`Ready!\nLogged in as ${client.user.tag}`);
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    // 클라이언트에 들어간 command 중 사용자가 입력한 command가 있으면 해당 파일을 json를 반환

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (err) {
        console.error(err);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        // ephemeral => 입력한 사용자만 볼 수 있음.
    }
});

client.login(token);