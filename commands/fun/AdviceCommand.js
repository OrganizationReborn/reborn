const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class AdviceCommand extends BaseCommand {
  constructor() {
    super('advice', 'fun', []);
  }

async run(client, message, args) {
    const request = require('superagent')
    const res = await request.get('https://api.adviceslip.com/advice')
    try {
      const advice = (JSON.parse(res.text)).slip.advice
      
      const embed = new MessageEmbed()
      .setTitle('Advice Machine')
      .setDescription(advice)
      .setColor('RANDOM')
      .setFooter({text: "Requested by " + message.author.tag})
      .setTimestamp()

      message.channel.send({embeds: [embed]})
    } catch (e) {
      console.error(e)
    }
  }
}