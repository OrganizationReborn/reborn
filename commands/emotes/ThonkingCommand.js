const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ThonkingCommand extends BaseCommand {
  constructor() {
    super('thonking', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " is trying to understand the situation.")
    .setImage('https://c.tenor.com/IwyNIipPItQAAAAM/anime-naruto.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}