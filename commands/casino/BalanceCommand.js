const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BalanceCommand extends BaseCommand {
  constructor() {
    super('balance', 'casino', []);
  }

async run(client, message, args) {
  const { MessageEmbed, Message } = require('discord.js');

  const eco = require('discord-mongoose-economy');
  eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");

  const balance = await eco.balance(message.author.id, message.guild.id);
  const embed = new MessageEmbed()
  .setDescription(`Wallet: ${balance.wallet}\nBank: ${balance.bank}/${balance.bankCapacity}`)
  .setColor('RANDOM')
  message.channel.send({embeds: [embed]})
  }
}