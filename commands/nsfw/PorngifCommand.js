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
      const pgif = await nsfw.pgif();
        const pgifembed = new MessageEmbed()
            .setTitle('Porngif Image')
            .setColor('RANDOM')
            .setImage(pgif)
            .setTimestamp()
        msg.channel.send({embeds: [pgifembed]});
    }else{
      const porngiferror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [porngiferror]})
    }
  }
}