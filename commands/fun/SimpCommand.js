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
  
      const user = message.mentions.users.first();
      if(user === undefined) {
        return message.reply('Do you think someone is simping you? Try to use this `?simp @user`');
      }
        const Message = message.mentions.users.first().username + " is simping " + message.author.username + " " + SimpRate;
        const simp = new MessageEmbed()
        .setTitle('Simp Machine')
        .setDescription(Message)
        .setColor('RANDOM')
        .setFooter({text: 'Requested by ' + message.author.tag})
        .setTimestamp()
  
        return message.reply({embeds: [simp]});
    }
    catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
}