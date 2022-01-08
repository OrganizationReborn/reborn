const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class AskCommand extends BaseCommand {
  constructor() {
    super('ask', 'informations', []);
  }

async run(client, msg, args) {
    let eightBall = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes – definitely',
      'You may rely on it',
      'As I see it, yes',
      'Most likely',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy, try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful',
  ];
  
    let answer = Math.floor(Math.random() * eightBall.length);
      const answerembed = new MessageEmbed()
      .setDescription(`<@${msg.author.id}>, ${eightBall[answer]}`)
      .setColor('RANDOM')
      .setTimestamp()
  
      msg.channel.send({embeds: [answerembed]});
    
  }
}