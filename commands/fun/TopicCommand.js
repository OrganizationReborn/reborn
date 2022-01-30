const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TopicCommand extends BaseCommand {
  constructor() {
    super('topic', 'fun', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Util } = require('discord.js');
    const quest = require('../assets/questions/question.json');
    const total = Object.keys(quest).length
  
    let somethingThere = message.content.split(/\s+/g).slice(1).join(" ");
    if(!somethingThere || args.numer == 'none') {
      var random = Math.floor(Math.random() * total + 1);
      var questions = quest[random];
  
      const embed = new MessageEmbed()
      .setDescription(">  " + questions.question + `\n\n>  Question Number: ${random}`)
      .setColor('RANDOM')
  
      message.channel.send({embeds: [embed]})
    }
  }
}