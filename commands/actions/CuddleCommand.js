const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CuddleCommand extends BaseCommand {
    constructor() {
        super('cuddle', 'games', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first().username;
    if(user === undefined) {
      return message.reply('Are you going to cuddle an air? How creepy. `?cuddle @user`')
    }

    const kissed = new MessageEmbed()
    .setTitle(message.author.username + " cuddle " + user)
    .setImage('https://c.tenor.com/ch1kq7TOxlkAAAAS/anime-cuddle.gif')
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send({embeds: [kissed]})
  }
}