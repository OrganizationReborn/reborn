const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class HentaiCommand extends BaseCommand {
  constructor() {
    super('hentai', 'hentai', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const hentai = await nsfw.hentai();
        const hentaiembed = new MessageEmbed()
            .setTitle('Hentai Image')
            .setColor('RANDOM')
            .setImage(hentai)
            .setTimestamp()
        msg.channel.send({embeds: [hentaiembed]});
    }else{
      const hentaierror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [hentaierror]})
    }
  }
}