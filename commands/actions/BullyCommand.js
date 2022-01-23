const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class BullyCommand extends BaseCommand {
    constructor() {
        super('bully', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    let bully = [
        'https://c.tenor.com/JMRAWJgcfF0AAAAM/nagatoro-ijirinaide-nagatoro-san.gif',
        'https://c.tenor.com/i7OHCW-o8y4AAAAM/anime-bully.gif',
        'https://c.tenor.com/k9QsoTYjJSUAAAAM/kick-anime.gif',
        'https://c.tenor.com/v0zNBL6W3DMAAAAM/bleach-ichigo-kurosaki.gif'
    ];
    if(user === undefined) {
      return message.reply('Are you going to bully an air? How creepy. `?bully @user`')
    } else {
      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` bullied ` + member)
      .setImage(bully)
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
}