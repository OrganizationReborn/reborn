const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GrinCommand extends BaseCommand {
  constructor() {
    super('grin', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " grin.")
    .setImage('https://c.tenor.com/8kCSTOFZB3kAAAAM/nagatoro-smile-nagatoro-smirk.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}