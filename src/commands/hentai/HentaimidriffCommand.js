const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HentaimidriffCommand extends BaseCommand {
  constructor() {
    super('hentaimidriff', 'hentai', []);
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