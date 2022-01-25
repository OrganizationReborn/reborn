<<<<<<< HEAD
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class BiteCommand extends BaseCommand {
    constructor() {
        super('bite', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to bite an air? How creepy. `?bite @user`')
    } else {
      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` bite ` + member)
      .setImage('https://c.tenor.com/n0DPyBDtZHgAAAAM/anime-bite.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
=======
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class BiteCommand extends BaseCommand {
    constructor() {
        super('bite', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to bite an air? How creepy. `?bite @user`')
    } else {
      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` bite ` + member)
      .setImage('https://c.tenor.com/n0DPyBDtZHgAAAAM/anime-bite.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
>>>>>>> b2a7d61e0be6a6c61b9d038cc1dbbd340a8d17ee
}