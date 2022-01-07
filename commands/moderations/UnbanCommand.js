const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderations', []);
  }

async run(client, msg, args) {
    if(!msg.member.permissions.has("BAN_MEMBERS")) return msg.channel.send("You can't use this command.");
    if(!msg.guild.me.permissions.has("BAN_MEMBERS")) return msg.channel.send("My role does not have the manage channels permission");
    
    const id = ('920847730480390175');

    msg.guild.members.unban(id)
    {
        const unbanEmbed = new MessageEmbed()
            .setTitle(`**Unban from** ${msg.guild.name}`)
            .setDescription(`Sent to <@`+id+">"+" an invitation link.")
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`Unbanned | Reborn`)

            msg.channel.send({embeds: [unbanEmbed]});
    }
  }
}