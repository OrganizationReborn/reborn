const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HighfiveCommand extends BaseCommand {
    constructor() {
        super('highfive', 'games', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first().username;
    if(user === undefined) {
      return message.reply('Are you going to highfive an air? How creepy. `?highfive @user`')
    }

    const kissed = new MessageEmbed()
    .setTitle(message.author.username + " highfive " + user)
    .setImage('https://c.tenor.com/ch1kq7TOxlkAAAAS/anime-highfive.gif')
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send({embeds: [kissed]})
  }
}