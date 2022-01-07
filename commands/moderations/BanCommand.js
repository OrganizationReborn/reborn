const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderations', []);
  }

async run(client, msg, args) {
    if(!msg.member.permissions.has("BAN_MEMBERS")) return msg.channel.send("You can't use this command.");
        if(!msg.guild.me.permissions.has("BAN_MEMBERS")) return msg.channel.send("My role does not have the manage channels permission");
        let reason = args.slice(1).join(" ");
        const mentionedMember = msg.mentions.members.first();
        
         //Input Checking:
        if(!reason) reason = 'No reason given.';
        if(!args[0]) return msg.channel.send('You must state someone to ban. `\.ban @user reason\`');
        if(!mentionedMember) return msg.channel.send('The member mentioned is not in the server.');
        if(!mentionedMember.bannable) return msg.channel.send('I cannot ban that member.');
      
         //Executing:
         const banEmbed = new MessageEmbed()
         .setTitle(`Ban Sucessfully from ${msg.guild.name}`)
         .setDescription("Reason for being banned:  `Already kicked 3 times.\rDays of Ban: 7 days (Can be removed. **Contact the Highest Authorized Personel**)`")
         .setColor("RANDOM")
         .setTimestamp()
    
         msg.channel.send({embeds: [banEmbed]}).catch(err => console.log(err));
         await mentionedMember.ban ({
           days: 7,
           reason: reason
         });
  }
}