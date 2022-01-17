const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DoodleCommand extends BaseCommand {
  constructor() {
    super('doodle', 'game', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
  
    if(!message.member.voice.channelId) {
      const embedvoice = new MessageEmbed()
      .setDescription('You need to join a voice channel first!')
      .setColor('RANDOM')
      return message.channel.send({embeds: [embedvoice]})
    }
    client.discordTogether.createTogetherCode(message.member.voice.channelId, 'doodlecrew').then(async(invite) => {
            
      let embed = new MessageEmbed()
      .setTitle("Doodle Crew.io")
      .setDescription(`[Click Here](${invite.code}) to play Doodle Crew.io!\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
      .setColor("GREEN")
      .setFooter(`Requested By: ${message.author.tag}`)
      
      return message.channel.send({ embeds: [embed] });
  });
  }
}