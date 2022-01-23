const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class HighfiveCommand extends BaseCommand {
    constructor() {
        super('highfive', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to highfive an air? How creepy. `?highfive @user`')
    }
    const member = message.mentions.users.first().username;
    const kissed = new MessageEmbed()
    .setTitle(message.author.username + " highfive " + member)
    .setImage('https://c.tenor.com/ch1kq7TOxlkAAAAS/anime-highfive.gif')
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send({embeds: [kissed]})
  }
}