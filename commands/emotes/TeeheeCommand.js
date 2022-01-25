const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TeeheeCommand extends BaseCommand {
  constructor() {
    super('teehee', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " c:.")
    .setImage('https://c.tenor.com/-5AUG9ixQZgAAAAM/anime-girl.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}