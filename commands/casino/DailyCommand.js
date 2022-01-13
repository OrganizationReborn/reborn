const BaseCommand = require('../../utils/structures/BaseCommand');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");

module.exports = class DailyCommand extends BaseCommand {
  constructor() {
    super('daily', 'casino', []);
  }

async run(client, message, args) {
    const { MessageEmbed } = require('discord.js');

    const daily = await eco.daily(message.author.id, message.guild.id, 500 * 50)
    const dailyclaimed = new MessageEmbed()
      .setDescription(`Daily on cooldown comback in ${daily.cdL}`)
      .setColor('RANDOM')
    if(daily.cd)  return message.reply({embeds: [dailyclaimed]});
      
  
    
    const dailyembed = new MessageEmbed()
    .setDescription(`you claimed ${daily.amount} for daily`)
    .setColor('RANDOM')
  
    message.reply({embeds: [dailyembed]});
  }
}