const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class BullyCommand extends BaseCommand {
    constructor() {
        super('bully', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    const bullies = require('../assets/bully.json');
    const total = Object.keys(bullies).length
    if(user === undefined) {
      return message.reply('Are you going to bully an air? How creepy. `?bully @user`')
    } 
      let somethingThere = message.content.split(/\s+/g).slice(1).join(" ");
      if(!somethingThere || args.number == 'none'){
        var random = Math.floor(Math.random() * total + 1);
        var bully = bullies[random]

      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` bullied ` + member)
      .setImage(bully.image)
      .setFooter({text: `Bully Style No: ${random}`})
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
}