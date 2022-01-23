const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class PunchCommand extends BaseCommand {
    constructor() {
        super('punch', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to bite an air? How creepy. `?punch @user`')
    } else {
      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` punch ` + member)
      .setImage('https://c.tenor.com/SwMgGqBirvcAAAAM/saki-saki-kanojo-mo-kanojo.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
}