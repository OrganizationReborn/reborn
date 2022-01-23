const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SlapCommand extends BaseCommand {
    constructor() {
        super('slap', 'games', []);
    }

async run(client, message, args) {
    const user = message.mentions.users.first().username;
    if(user === undefined) {
      return message.reply('Are you going to slap an air? How creepy. `?slap @user`')
    }

    const slapped = new MessageEmbed()
    .setTitle(message.author.username + " slapped " + user)
    .setImage('https://c.tenor.com/rVXByOZKidMAAAAd/anime-slap.gif')
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send({embeds: [slapped]})
  }
}