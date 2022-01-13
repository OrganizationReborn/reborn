const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RestartCommand extends BaseCommand {
  constructor() {
    super('restart', 'moderations', []);
  }

async run(client, message, args) {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You can't use this command.");
    if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send("My role does not have the manage channels permission");
    const { MessageEmbed, Message } = require('discord.js');
    
    const anchannel = message.mentions.channels.first();
  
    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bot Restarting!**`)
    .setDescription('Bot will reset in few seconds.')
    .setTimestamp()
  
    anchannel.send({ embeds: [embed] }).then(() => {
    client.destroy();
    process.exit();
  });
  }
}