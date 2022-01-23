const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class KissCommand extends BaseCommand {
    constructor() {
        super('kiss', 'games', []);
    }

async run(client, message, args) {
    //const username = message.member.user.tag;
    const member = message.member
    const user = message.mentions.members.first();
    if(user === undefined) {
      return message.reply('Are you going to kiss an air? How creepy. `?kiss @user`')
    } else {
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` kissed ` + `<@${member}>`)
      .setImage('https://i.imgur.com/WVSwvm6.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
}