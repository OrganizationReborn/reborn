const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'moderations', []);
  }

async run(client, msg, args) {
    if(!msg.member.permissions.has("MANAGE_ROLES")) return msg.channel.send("You can't use this command.");
        if(!msg.guild.me.permissions.has("MANAGE_ROLES")) return msg.channel.send("My role does not have the manage channels permission");
        let member = msg.mentions.members.first();
        var role = msg.guild.roles.cache.find(role => role.name === "Muted")
        
        member.roles.add(role)
        {
            const user = msg.mentions.users.first()
            const messageEmbed = new MessageEmbed()
            .setTitle('**Muted**')
            .setDescription(`Given **Muted** role to:\r` + "<@" + user.id + ">" )
            .setColor('RANDOM')
            .setTimestamp()

            msg.channel.send({embeds: [messageEmbed]});
        }
  }
}