const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');
const request = require('node-superfetch');

module.exports = class TrumpCommand extends BaseCommand {
  constructor() {
    super('trump', 'fun', []);
  }

async run(client, message, args) {
    try {
      const { body } = await request.get('https://www.tronalddump.io/random/quote');
      const embed = new MessageEmbed()
      .setTitle('Trump Quotes')
      .setDescription(body.value)
      .setColor('RANDOM')
      .setFooter({text: "Requested by " + message.author.tag})
      .setTimestamp()
      
      message.channel.send({embeds: [embed]})
  } catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
  }
  }
}