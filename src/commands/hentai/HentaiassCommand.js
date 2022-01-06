const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class HentaiassCommand extends BaseCommand {
  constructor() {
    super('hentaiass', 'hentai', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const hentaiass = await nsfw.hentaiass();
        const hentaiassembed = new MessageEmbed()
            .setTitle('Hentai ass Image')
            .setColor('RANDOM')
            .setImage(hentaiass)
            .setTimestamp()
        msg.channel.send({embeds: [hentaiassembed]});
    }else{
      const hentaiasserror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [hentaiasserror]})
    }
  }
}