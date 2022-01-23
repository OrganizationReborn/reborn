const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class KissCommand extends BaseCommand {
    constructor() {
        super('kiss', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to bite an air? How creepy. `?handholding @user`')
    } else {
      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` holding hands ` + member)
      .setImage('https://c.tenor.com/-76rfR0BNTAAAAAM/anime-couple-hand-holding.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
}