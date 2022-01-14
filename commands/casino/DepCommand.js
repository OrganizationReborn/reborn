const BaseCommand = require('../../utils/structures/BaseCommand');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");

module.exports = class DepCommand extends BaseCommand {
  constructor() {
    super('dep', 'casino', []);
  }

async run(client, message, args) {
    const { MessageEmbed } = require('discord.js');

    const notvalid = new MessageEmbed()
    .setDescription('Not Valid')
    .setColor('RANDOM')
    if(args[0] !== "all" && isNaN(args[1])) return message.reply({embeds: [notvalid]});
  
    const deposit = await eco.deposit(message.author.id, message.guild.id, args[1]);
    const depositamount = new MessageEmbed()
    .setDescription(`You can't deposit what you don't have.`)
    .setColor('RANDOM')
    if(deposit.noten) return message.reply({embeds: [depositamount]});
  
    const depositsuccess = new MessageEmbed()
    .setAuthor({iconURL: `${message.author.avatarURL()}`,name: `${message.member.user.tag}`})
    .setDescription(`Deposited ${deposit.amount} coins to your bank account.`)
    .setColor('RANDOM')
    message.reply({embeds: [depositsuccess]});
  }
}