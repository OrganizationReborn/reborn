const BaseCommand = require('../../utils/structures/BaseCommand');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");
const beg = require('../../events/casino/beg.json')
const cooldowns = new Map();
const humanizeDuration = require('humanize-duration');  

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

async run(client, message, args) {
 // if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You can't use this command.");
// if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send("My role does not have the manage channels permission");
  const { MessageEmbed, Collection } = require('discord.js');

  var nickname = `[AFK]`;
  message.member.setNickname(nickname + ' ' + message.author.username);
  const embed = new MessageEmbed()
  .setAuthor({iconURL: `${message.author.avatarURL()}`,name: `${message.member.user.tag}`})
  .setDescription(`${message.author.toString()}` + " is now AFK")
  .setTimestamp()
  .setColor('RANDOM')
  
  message.channel.send({embeds: [embed]})

  }
}
