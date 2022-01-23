const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class PokeCommand extends BaseCommand {
    constructor() {
        super('poke', 'actions', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first();
    if(user === undefined) {
      return message.reply('Are you going to poke an air? How creepy. `?poke @user`')
    } else {
      const member = message.mentions.users.first().username
      const kissed = new MessageEmbed()
      .setTitle(message.author.username + ` poked ` + member)
      .setImage('https://c.tenor.com/3dOqO4vVlr8AAAAM/poke-anime.gif')
      .setColor('RANDOM')
      .setTimestamp()
  
      message.channel.send({embeds: [kissed]})
    }
  }
}