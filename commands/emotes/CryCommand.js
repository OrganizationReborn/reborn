const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CryCommand extends BaseCommand {
  constructor() {
    super('cry', 'emotes', []);
  }

  async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const embed = new MessageEmbed()
    .setTitle(message.author.username + " cried.")
    .setImage('https://c.tenor.com/r0XjQL8Fd5MAAAAM/crying-sad.gif')
    .setColor('RANDOM')
    .setTimestamp()
    message.reply({embeds: [embed]});
  }
}