const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SmugCommand extends BaseCommand {
  constructor() {
    super('smug', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " thinks little of you~.")
    .setImage('https://c.tenor.com/p2dWs1LsL_wAAAAM/vampire-anime-girl.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}