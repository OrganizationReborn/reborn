const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BlushCommand extends BaseCommand {
  constructor() {
    super('blush', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " blushed.")
    .setImage('https://c.tenor.com/T51BLj_Cj8cAAAAC/blush.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}