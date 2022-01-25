const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class HentaimidriffCommand extends BaseCommand {
  constructor() {
    super('hentaimidriff', 'hentai', ['hm']);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const hmidriff = await nsfw.hmidriff();
        const hmidriffembed = new MessageEmbed()
            .setTitle('Hentai Midriff Image')
            .setColor('RANDOM')
            .setImage(hmidriff)
            .setTimestamp()
        msg.channel.send({embeds: [hmidriffembed]});
    }else{
      const hmidrifferror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [hmidrifferror]})
    }
  }
}