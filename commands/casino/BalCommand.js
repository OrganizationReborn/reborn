const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BalCommand extends BaseCommand {
  constructor() {
    super('bal', 'casino', []);
  }

  async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
    const eco = require('discord-mongoose-economy');
    eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");
  
    const balance = await eco.balance(message.author.id, message.guild.id);
    const embed = new MessageEmbed()
    .setAuthor({iconURL: `${message.author.avatarURL()}`,name: `${message.member.user.tag}`})
    .setDescription(`Wallet: ${balance.wallet}\nBank: ${balance.bank}\nTotal Amount: ${balance.wallet + balance.bank}`)
    .setColor('RANDOM')

    message.channel.send({embeds: [embed]})
    }
  }