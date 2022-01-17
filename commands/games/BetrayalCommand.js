const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BetrayalCommand extends BaseCommand {
  constructor() {
    super('betrayal', 'games', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
  
    if(!message.member.voice.channelId) {
      const embedvoice = new MessageEmbed()
      .setDescription('You need to join a voice channel first!')
      .setColor('RANDOM')
      return message.channel.send({embeds: [embedvoice]})
    }
    client.discordTogether.createTogetherCode(message.member.voice.channelId, 'betrayal').then(async(invite) => {
            
      let embed = new MessageEmbed()
      .setTitle("Betrayal.io")
      .setDescription(`[Click Here](${invite.code}) to play Betrayal.io!\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
      .setColor("GREEN")
      .setFooter({text: `Requested By: ${message.author.tag}`})
      
      return message.channel.send({ embeds: [embed] });
  });
  }
}