const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class KissCommand extends BaseCommand {
    constructor() {
        super('kiss', 'games', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to kiss an air? How creepy. `?kiss @user`')
    } else {
      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setDescription(message.author.username + ` kissed ` + member)
      .setImage('https://i.imgur.com/WVSwvm6.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
}