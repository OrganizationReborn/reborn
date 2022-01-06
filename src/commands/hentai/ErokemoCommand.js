const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class ErokemoCommand extends BaseCommand {
  constructor() {
    super('erokemo', 'hentai', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const erokemo = await nsfw.erokemo();
        const erokemoembed = new MessageEmbed()
            .setTitle('Eroku Image')
            .setColor('RANDOM')
            .setImage(erokemo)
            .setTimestamp()
        msg.channel.send({embeds: [erokemoembed]});
    }else{
      const erokemoerror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [erokemoerror]})
    }
  }
}