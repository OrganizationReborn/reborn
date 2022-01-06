const BaseCommand = require('../../utils/structures/BaseCommand');
const randomnsfw = require("random-anime");
const { MessageEmbed } = require('discord.js');

module.exports = class HanimeCommand extends BaseCommand {
  constructor() {
    super('hanime', 'hentai', []);
  }

async run(client, msg, args) {
    if(msg.channel.nsfw){
      const nsfw = randomnsfw.nsfw();
        const embed = new MessageEmbed()
        .setTitle('Random Anime')
        .setColor('RANDOM')
        .setImage(nsfw)
        .setTimestamp()
        msg.channel.send({embeds: [embed]});
    }else{
      const nsfwerror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [nsfwerror]})
    }
  }
}