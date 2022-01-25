const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HappyCommand extends BaseCommand {
  constructor() {
    super('happy', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " is happy.")
    .setImage('https://c.tenor.com/LMxwdxg5Ba8AAAAM/gabriel-dropout.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}