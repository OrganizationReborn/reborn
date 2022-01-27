const BaseCommand = require('../../utils/structures/BaseCommand');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

async run (client, message, args) {
//if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You can't use this command.");
//if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send("My role does not have the manage channels permission");
  const { MessageEmbed, Util } = require('discord.js');
  const quest = require('../assets/questions/question.json');
  const total = Object.keys(quest).length

  let somethingThere = message.content.split(/\s+/g).slice(1).join(" ");
  const percentage = Math.random()
  if(!somethingThere || args.numer == 'none') {
    var random = Math.floor(Math.random() * total + 1);
    var questions = quest[random];

    const embed = new MessageEmbed()
    .setDescription(">  " + questions.question)
    .setColor('RANDOM')
    .setFooter({text:`Question Number: ${random}`});

    message.channel.send({embeds: [embed]})
  }
  }
}