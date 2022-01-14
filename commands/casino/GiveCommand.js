const BaseCommand = require('../../utils/structures/BaseCommand');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");

module.exports = class GiveCommand extends BaseCommand {
  constructor() {
    super('give', 'casino', []);
  }

async run(client, message, args) {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You can't use this command.");
    if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send("My role does not have the manage channels permission");
    const { MessageEmbed } = require('discord.js');
    
    const user = new MessageEmbed()
    .setDescription(`please mention a user.`)
    .setColor('RANDOM')
    if(!message.mentions.users.first()) return message.reply({embeds: [user]});
  
    const amountuser = new MessageEmbed()
    .setDescription('Please specify an amount.')
    .setColor('RANDOM')
      if(!args[1]) return message.reply({embeds: [amountuser]});
  
    const give = await eco.give(message.mentions.users.first().id, message.guild.id, args[1]);
    const giveuser = new MessageEmbed()
    .setDescription(`Government gives ${message.mentions.users.first()} some ${give.amount} coins`)
    .setColor('RANDOM')
      message.reply({embeds: [giveuser]});
  }
}