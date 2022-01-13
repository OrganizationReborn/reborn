const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AnnounceCommand extends BaseCommand {
  constructor() {
    super('announce', 'moderations', []);
  }

async run(client, message, args) {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You can't use this command.");
    if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send("My role does not have the manage channels permission");
  
      const { MessageEmbed } = require('discord.js');
  
      const anchannel = message.mentions.channels.first();
    
      const announcementMessage = args.slice(1).join(' ');
      if (!announcementMessage) {
        return message.reply('');
      }
    
      const embed = new MessageEmbed()
        .setTitle('**Announcement!**')
        .setColor('RANDOM')
        .setDescription(announcementMessage)
        .setTimestamp()
    
      anchannel.send({ embeds: [embed] });
    
      const anembed = new MessageEmbed()
        .setTitle('Done!')
        .setDescription(`Announcement has been sent to ${anchannel}`)
        .setColor('RANDOM')
        .setTimestamp()
    
      message.reply({ embeds: [anembed] });
      
  }
}