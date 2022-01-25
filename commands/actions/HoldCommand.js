const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class HoldCommand extends BaseCommand {
    constructor() {
        super('hold', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to hold air? How creepy. `?hold @user`')
    } else {
      const member = message.mentions.users.first().username
      const holded = new MessageEmbed()
      .setTitle(message.author.username + ` hold ` + member)
      .setImage('https://c.tenor.com/RFY9xILOZHUAAAAM/princess-mononoke-hug.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [holded]})
    }
  }
}