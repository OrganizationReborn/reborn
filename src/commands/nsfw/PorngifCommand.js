const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class PorngifCommand extends BaseCommand {
  constructor() {
    super('porngif', 'nsfw', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const porngif = await nsfw.porngif();
        const porngifembed = new MessageEmbed()
            .setTitle('Porngif Image')
            .setColor('RANDOM')
            .setImage(porngif)
            .setTimestamp()
        msg.channel.send({embeds: [porngifembed]});
    }else{
      const porngiferror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [porngiferror]})
    }
  }
}