<<<<<<< HEAD
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class LickCommand extends BaseCommand {
    constructor() {
        super('lick', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to lick an air? How creepy. `?lick @user`')
    } else {
      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` licked ` + member)
      .setImage('https://c.tenor.com/bgGMTIJhEvEAAAAC/anime-lick-lick.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
=======
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class LickCommand extends BaseCommand {
    constructor() {
        super('lick', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to lick an air? How creepy. `?lick @user`')
    } else {
      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` licked ` + member)
      .setImage('https://c.tenor.com/bgGMTIJhEvEAAAAC/anime-lick-lick.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
>>>>>>> b2a7d61e0be6a6c61b9d038cc1dbbd340a8d17ee
}