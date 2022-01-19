const BaseEvent = require('../../utils/structures/BaseEvent');
const afk = require('../../afkSchema.js');
const { MessageEmbed } = require('discord.js');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('messageCreate');
  }
  
  async run(client, message) {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }

    let user = message.author.id
    if (await afk.findOne({userID: message.author.id })){
      let afkProfile = await afk.findOne({userID: message.author.id});
      if(afkProfile.messagesLeft == 0){
        await afk.findOneAndDelete({userID: message.author.id});
        const afknon = new MessageEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setDescription(`Welcome back <@${user}>!`)
        message.channel.send({embeds: [afknon]})
      } else {
        await afk.findOneAndUpdate({ userID: message.author.id }, {messagesLeft: afkProfile.messagesLeft - 1});
      }
    }

    if(message.mentions.members.first()){
      await message.mentions.members.forEach(async member => {
        let afkProfile = await afk.findOne({userID: member.user.id});
        const afkadd = new MessageEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setDescription("<@" + member.user + `>, is in AFK mode for: **${afkProfile.reason}**`)
        if(afkProfile) message.channel.send({embeds: [afkadd]});
      });
    }
  }
}