const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class WaveCommand extends BaseCommand {
    constructor() {
        super('wave', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to wave an air? How creepy. `?wave @user`')
    } else {
      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` waved ` + member)
      .setImage('https://c.tenor.com/UPa7j2Dz3rgAAAAM/wave.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
}