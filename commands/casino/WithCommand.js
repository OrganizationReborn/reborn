const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");

module.exports = class WithCommand extends BaseCommand {
  constructor() {
    super('with', 'casino', []);
  }

async run(client, message, args) {
    const notvalid = new MessageEmbed()
    .setDescription('Not Valid')
    .setColor('RANDOM')
    if(args[1] !== "all" && isNaN(args[1])) return message.reply({embeds: [notvalid]});
  
    const withdraw = await eco.withdraw(message.author.id, message.guild.id, args[1]);
    const withdrawamount = new MessageEmbed()
      .setDescription(`You can't withdraw what you don't have.`)
      .setColor('RANDOM')
    if(withdraw.noten) return message.reply({embeds: [withdrawamount]});
    
    const withdrawsuccess = new MessageEmbed()
    .setAuthor({iconURL: `${message.author.avatarURL()}`,name: `${message.member.user.tag}`})
    .setDescription(`Withdrawed ${withdraw.amount} coins to your wallet.`)
    .setColor('RANDOM')
    message.reply({embeds: [withdrawsuccess]});
  }
}