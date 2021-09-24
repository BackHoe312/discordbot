const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('<명령어 이름>')
        .setDescription('<명령 설명>'),
    //  async execute(<매개변수>) { // interactionCreate 이벤트가 실행되면
    // 어떤 객체로 매개변수를 받겠다고 했었죠??
    async execute(interaction) {
        await interaction.reply('<명령어에 대한 응답>');
    }
} 
