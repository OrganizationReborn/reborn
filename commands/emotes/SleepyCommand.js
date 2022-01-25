const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SleepyCommand extends BaseCommand {
  constructor() {
    super('sleepy', 'emotes', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " is sleepy.")
    .setImage('https://c.tenor.com/re9a71mA5xwAAAAM/nogamenolife-shiro.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}