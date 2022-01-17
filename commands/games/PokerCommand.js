const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class PokerCommand extends BaseCommand {
  constructor() {
    super('poker', 'games', []);
  }

async run(client, message, args) {
    if(!message.member.voice.channelId) {
      const embedvoice = new MessageEmbed()
      .setDescription('You need to join a voice channel first!')
      .setColor('RANDOM')
      return message.channel.send({embeds: [embedvoice]})
    }
    client.discordTogether.createTogetherCode(message.member.voice.channelId, 'poker').then(async(invite) => {
            
      let embed = new MessageEmbed()
      .setTitle("Poker.io")
      .setDescription(`[Click Here](${invite.code}) to play Poker.io!\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
      .setColor("GREEN")
      .setFooter({text: `Requested By: ${message.author.tag}`})
      
      return message.channel.send({ embeds: [embed] });
  });
  }
}