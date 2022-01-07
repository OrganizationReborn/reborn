const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class HentaithighCommand extends BaseCommand {
  constructor() {
    super('hentaithigh', 'hentai', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const hentaithigh = await nsfw.hentaithigh();
        const hentaithighembed = new MessageEmbed()
            .setTitle('Hentai Thigh Image')
            .setColor('RANDOM')
            .setImage(hentaithigh)
            .setTimestamp()
        msg.channel.send({embeds: [hentaithighembed]});
    }else{
      const hentaithigherror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [hentaithigherror]})
    }
  }
}