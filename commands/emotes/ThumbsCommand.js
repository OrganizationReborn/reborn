const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ThumbsCommand extends BaseCommand {
  constructor() {
    super('thumbs', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " thumbs up!.")
    .setImage('https://c.tenor.com/LbyT0UNhPfEAAAAM/anime-thumbs-up.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}