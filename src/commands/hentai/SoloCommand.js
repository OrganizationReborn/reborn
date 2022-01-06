const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class SoloCommand extends BaseCommand {
  constructor() {
    super('solo', 'hentai', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const solo = await nsfw.solo();
        const soloembed = new MessageEmbed()
            .setTitle('Solo Image')
            .setColor('RANDOM')
            .setImage(solo)
            .setTimestamp()
        msg.channel.send({embeds: [soloembed]});
    }else{
      const soloerror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [soloerror]})
    }
  }
}