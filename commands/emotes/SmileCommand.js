const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SmileCommand extends BaseCommand {
  constructor() {
    super('smile', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " smiled.")
    .setImage('https://c.tenor.com/H7KcvGa568gAAAAM/dance-blush.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}