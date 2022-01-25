const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class SlapCommand extends BaseCommand {
    constructor() {
        super('slap', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to slap an air? How creepy. `?slap @user`')
    }
    const member = message.mentions.users.first().username
    const slapped = new MessageEmbed()
    .setTitle(message.author.username + " slapped " + member)
    .setImage('https://c.tenor.com/rVXByOZKidMAAAAd/anime-slap.gif')
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send({embeds: [slapped]})
  }
}