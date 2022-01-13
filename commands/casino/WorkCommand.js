const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");
const work = require('../../events/casino/work.json')

module.exports = class WorkCommand extends BaseCommand {
  constructor() {
    super('work', 'casino', []);
  }

async run(client, message, args) {
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("This is 404 (Working for cooldown.)");
  if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send("My role does not have the manage channels permission");
    
    const total = Object.keys(work).length
    var random = Math.floor(Math.random() * total + 1);
    var workInfo = work[random];
    const min = 10;
    const max = 100;
    const coin = Math.floor(Math.random() * (max - min + 1) ) + min;
  
    if(message.author.bot) return;
  
    await eco.give(message.author.id, message.guild.id, coin);
      const workembed = new MessageEmbed()
      .setDescription(workInfo.description + `and recieved ` + coin + ` coins`)
      .setColor('RANDOM')
      .setFooter({text: `Work #${random}`}) 
  
      message.channel.send({embeds: [workembed]});
  }
}