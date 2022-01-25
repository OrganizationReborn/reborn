
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class CuddleCommand extends BaseCommand {
    constructor() {
        super('cuddle', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to cuddle an air? How creepy. `?cuddle @user`')
    }
    const member = message.mentions.users.first().username;
    const kissed = new MessageEmbed()
    .setTitle(message.author.username + " cuddle " + member)
    .setImage('https://c.tenor.com/ch1kq7TOxlkAAAAS/anime-cuddle.gif')
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send({embeds: [kissed]})
  }
}