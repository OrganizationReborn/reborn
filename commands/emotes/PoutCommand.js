const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PoutCommand extends BaseCommand {
  constructor() {
    super('pout', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " pouted.")
    .setImage('https://c.tenor.com/yCR6JOoxS6wAAAAM/anime-angry.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}