const BaseCommand = require('../../utils/structures/BaseCommand');
const afk = require('../../afkSchema');
const mongoose = require('mongoose');

module.exports = class AfkCommand extends BaseCommand {
  constructor() {
    super('afk', 'informations', []);
  }

async run(client, message, args) {
    const { MessageEmbed } = require('discord.js');
    let user = message.author.id
    let reason = args.join(" ");
    if(!reason) reason = "No reason given";
    let afkProfile = await afk.findOne({userID: message.author.id});
    if(!afkProfile) {
      afkProfile = await new afk({
        _id: mongoose.Types.ObjectId(),
        userID: message.author.id,
        reason: reason,
      });
      await afkProfile.save();
      const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .setDescription(`<@${user}>. You are AFK now for a reason of: **${reason}**`)
      message.channel.send({embeds: [embed]})
    } else return message.channel.send('You are already AFK');
  }
}