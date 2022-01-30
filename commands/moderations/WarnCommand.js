const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
module.exports = class WarnCommand extends BaseCommand {
  constructor() {
    super('warn', 'moderations', []);
  }

  run(client, msg, args) {
    const user = msg.mentions.users.first()
    if(!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send("You can't use this command.");
        if(!msg.guild.me.permissions.has("ADMINISTRATOR")) return msg.channel.send("My role does not have the manage channels permission");
        
        if(user === undefined) {
          return msg.reply('To warn someone. use ?warn @user');
        } else {
        const warningEmbed = new MessageEmbed()
        .setTitle("⚠️ Warning! ⚠️")
        .setColor("RANDOM")
        .setDescription('You have been warned! \n' + "<@" + user.id + ">")
        .setTimestamp()
        msg.channel.send({embeds: [warningEmbed]});
        }  
  }
}