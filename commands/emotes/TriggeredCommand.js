const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TriggeredCommand extends BaseCommand {
  constructor() {
    super('triggered', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " triggered.")
    .setImage('https://c.tenor.com/l0wdYHb_M9kAAAAM/triggered-anime.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}