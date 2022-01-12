const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');
var randomnumber = require('random-number');

module.exports = class IqCommand extends BaseCommand {
  constructor() {
    super('iq', 'fun', []);
  }

async run(client, message, args) {
    try {
      var options = { min: 20, max: 170, integer: true }
      const RandomIQ = randomnumber(options);
  
      let Message = "Your IQ is " + RandomIQ + " :brain:";
      if (message.mentions.users.first()) {
        Message = message.mentions.users.first().username + " IQ is " + RandomIQ + " :brain:";
      }
      const embed = new MessageEmbed()
      .setTitle('IQ Measurement Machine')
      .setDescription(Message)
      .setColor('RANDOM')
      .setFooter({text: "Requested by " + message.author.tag})
      .setTimestamp()
  
      message.channel.send({embeds: [embed]})
    }
    catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
}