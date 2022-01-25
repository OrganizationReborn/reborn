const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WagCommand extends BaseCommand {
  constructor() {
    super('wag', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + "'s tail is wagging~.")
    .setImage('https://c.tenor.com/jqnbSlE62aAAAAAM/anime-cute.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}