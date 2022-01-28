const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class UnmuteCommand extends BaseCommand {
  constructor() {
    super('unmute', 'moderations', []);
  }

  run(client, msg, args) {
    let member = msg.mentions.members.first();
    if(!msg.member.permissions.has("MANAGE_ROLES")) return msg.channel.send("You can't use this command.");
        if(!msg.guild.me.permissions.has("MANAGE_ROLES")) return msg.channel.send("My role does not have the manage channels permission");
        
        if(member === undefined) {
          return msg.reply('To unmute someone use ?unmute @user')
        } else {
          var role = msg.guild.roles.cache.find(role => role.name === "Muted")

        member.roles.remove(role)
        {
            const user = msg.mentions.users.first()
            const messageEmbed = new MessageEmbed()
            .setTitle('**Unmuted**')
            .setDescription(`Removed **Muted** role to:\r` + "<@" + user.id + ">" )
            .setColor('RANDOM')
            .setTimestamp()

            msg.channel.send({embeds: [messageEmbed]});
        }
        }
  }
}