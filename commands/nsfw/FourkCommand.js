const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class FourkCommand extends BaseCommand {
  constructor() {
    super('4k', 'nsfw', []);
  }

async run(client, msg, args) {
    if(msg.channel.nsfw){
      const fourk = await nsfw.fourk();
        const fourkembed = new MessageEmbed()
            .setTitle('4k Image')
            .setColor('RANDOM')
            .setImage(fourk)
            .setTimestamp()
        msg.channel.send({embeds: [fourkembed]});
    }else{
      const fourkerror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [fourkerror]})
    }
  }
}
