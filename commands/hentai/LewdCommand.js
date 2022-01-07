const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class LewdCommand extends BaseCommand {
  constructor() {
    super('lewd', 'hentai', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const lewd = await nsfw.lewd();
        const lewdembed = new MessageEmbed()
            .setTitle('Lewd Image')
            .setColor('RANDOM')
            .setImage(lewd)
            .setTimestamp()
        msg.channel.send({embeds: [lewdembed]});
    }else{
      const lewderror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [lewderror]})
    }
  }
}