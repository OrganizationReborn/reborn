const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class BullyCommand extends BaseCommand {
    constructor() {
        super('bully', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to bully an air? How creepy. `?bully @user`')
    } 
      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` bullied ` + member)
      .setImage('https://c.tenor.com/WK3t25D8fhgAAAAM/bully-mean.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
  }
}