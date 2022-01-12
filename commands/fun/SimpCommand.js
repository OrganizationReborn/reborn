const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
var randomnumber = require('random-number');

module.exports = class SimpCommand extends BaseCommand {
  constructor() {
    super('simp', 'fun', []);
  }

async run(client, message, args) {
    try {
      var options = { min: 0, max: 100, integer: true }
      let SimpRate = randomnumber(options) + "%";
  
      let Message = message.author.username + " is " + SimpRate + " simp";
      if (message.mentions.users.first()) {
        Message = message.mentions.users.first().username + " is " + SimpRate + " simp";
      }
        const simp = new MessageEmbed()
        .setTitle('Simp Machine')
        .setDescription(Message)
        .setColor('RANDOM')
        .setFooter({text: 'Requested by ' + message.author.tag})
        .setTimestamp()
  
        message.channel.send({embeds: [simp]});
    }
    catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
}