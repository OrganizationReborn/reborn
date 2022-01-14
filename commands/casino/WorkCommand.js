const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");
const work = require('../../events/casino/work.json')
const cooldowns = new Map();
const humanizeDuration = require('humanize-duration');

module.exports = class WorkCommand extends BaseCommand {
  constructor() {
    super('work', 'casino', []);
  }

async run(client, message, args) {
  const cooldown = cooldowns.get(message.author.id);
  if(cooldown) {
    const remaining = humanizeDuration(cooldown - Date.now(), {units: ['s'], round: true})
    const cd = new MessageEmbed()
    .setAuthor({iconURL: `${message.author.avatarURL()}`,name: `${message.member.user.tag}`})
    .setDescription(`You need to wait ${remaining} to do work again, take some rest!`)
    .setColor('RANDOM')
    return message.channel.send({embeds: [cd]})
    .catch(console.error);
  } else {
    const total = Object.keys(work).length
    var random = Math.floor(Math.random() * total + 1);
    var workInfo = work[random];
    const min = 80000;
    const max = 120000;
    const coin = Math.floor(Math.random() * (max - min + 1) ) + min;
  
    if(message.author.bot) return;
    await eco.give(message.author.id, message.guild.id, coin);
    const workembed = new MessageEmbed()
    .setAuthor({iconURL: `${message.author.avatarURL()}`,name: `${message.member.user.tag}`})
    .setDescription(workInfo.description + `and recieved ` + coin + ` coins`)
    .setColor('RANDOM')
    .setFooter({text: `Work #${random}`}) 

    message.channel.send({embeds: [workembed]});

    cooldowns.set(message.author.id, Date.now() + 30000);
    setTimeout(() => cooldowns.delete(message.author.id), 30000);
    }
  }
}