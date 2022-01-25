const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ScoffCommand extends BaseCommand {
  constructor() {
    super('scoff', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " scoffed.")
    .setImage('https://c.tenor.com/cQep850sKJ8AAAAM/hmpf-anime.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}