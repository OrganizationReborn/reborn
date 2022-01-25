const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DeredereCommand extends BaseCommand {
  constructor() {
    super('deredere', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " is inlove ~.")
    .setImage('https://c.tenor.com/11XPK5HEweUAAAAM/koisuru-asteroid-asteroid-in-love.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}