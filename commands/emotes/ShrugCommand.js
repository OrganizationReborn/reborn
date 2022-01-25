const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ShrugCommand extends BaseCommand {
  constructor() {
    super('shrug', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " shrugged.")
    .setImage('https://c.tenor.com/0GOwPHgcUj0AAAAM/anime-shrug.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}