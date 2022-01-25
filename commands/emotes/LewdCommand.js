const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LewdCommand extends BaseCommand {
  constructor() {
    super('lewd', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " is not old enough for that.")
    .setImage('https://c.tenor.com/Tk2xYonmrsEAAAAM/anime-blushing.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}