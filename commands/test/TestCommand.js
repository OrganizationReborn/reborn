const BaseCommand = require('../../utils/structures/BaseCommand');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");
const afk = require('../../afk');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

async run(client, message, args) {
//if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You can't use this command.");
//if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send("My role does not have the manage channels permission");
  const { MessageEmbed } = require('discord.js');

    if(message.mentions.roles.first()) {
      return message.channel.send("**CAN'T PING ROLES**")
    }

    const data = await afk.findOne({
      UserID: message.author.id
    });

    if(!data) {
      const reason = args.slice(0).join(' ') || 'No Reason';
      const embedAFK = new MessageEmbed()
      .setDescription(`**${message.author.username}**, You are now **AFK**. Reason: **${reason}**`)
      .setTimestamp()
      .setColor('RANDOM')
      message.channel.send({embeds: [embedAFK]});
      const newAfk = new afk({
        UserID: message.author.id,
        Reason: reason,
      });
      newAfk.save();
    }else if (data) {
      await afk.deleteOne({
        UserID: message.author.id
      });
      const embedremovedAFK = new MessageEmbed()
      .setDescription(`${message.author.username}, welcome back! I removed your AFK.`)
      .setTimestamp()
      .setColor('RANDOM')
      message.channel.send({embeds: [embedremovedAFK]});
    }
  }
}