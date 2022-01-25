const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DanceCommand extends BaseCommand {
  constructor() {
    super('dance', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " dance.")
    .setImage('https://c.tenor.com/2vRn7mgoMRMAAAAS/cute-anime-dance.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}