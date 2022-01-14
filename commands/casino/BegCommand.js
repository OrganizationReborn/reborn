const BaseCommand = require('../../utils/structures/BaseCommand');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");
const beg = require('../../events/casino/beg.json')
const cooldowns = new Map();
const humanizeDuration = require('humanize-duration');  

module.exports = class BegCommand extends BaseCommand {
  constructor() {
    super('beg', 'casino', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Collection } = require('discord.js');
    const cooldown = cooldowns.get(message.author.id);
    if(cooldown) {
      const remaining = humanizeDuration(cooldown - Date.now(), {units: ['m','s'], round: true})
      const cd = new MessageEmbed()
      .setAuthor({iconURL: `${message.author.avatarURL()}`,name: `${message.member.user.tag}`})
      .setDescription(`You need to wait ${remaining} to do beg again, go work!`)
      .setColor('RANDOM')
      return message.channel.send({embeds: [cd]})
      .catch(console.error);
    } else {
      const total = Object.keys(beg).length
      var random = Math.floor(Math.random() * total + 1);
      var begInfo = beg[random];
      const min = 25000;
      const max = 50000;
      const coin = Math.floor(Math.random() * (max - min + 1) ) + min;
    
      if(message.author.bot) return;
      await eco.give(message.author.id, message.guild.id, coin);
      const begembed = new MessageEmbed()
      .setAuthor({iconURL: `${message.author.avatarURL()}`,name: `${message.member.user.tag}`})
      .setDescription(begInfo.description + `and recieved ` + coin + ` coins`)
      .setColor('RANDOM')
      .setFooter({text: `Work #${random}`}) 
  
      message.channel.send({embeds: [begembed]});
  
      cooldowns.set(message.author.id, Date.now() + 600000);
      setTimeout(() => cooldowns.delete(message.author.id), 600000);
      }
  }
}