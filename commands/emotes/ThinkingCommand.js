const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ThinkingCommand extends BaseCommand {
  constructor() {
    super('thinking', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " is thinking.")
    .setImage('https://c.tenor.com/eAqD-5MDzFAAAAAM/mai-sakurajima-sakurajima-mai.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}