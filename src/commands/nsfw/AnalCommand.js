const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class AnalCommand extends BaseCommand {
  constructor() {
    super('anal', 'nsfw', []);
  }

async run(client, msg, args) {
    if(msg.channel.nsfw){
      const anal = await nsfw.anal();
        const analembed = new MessageEmbed()
            .setTitle('Anal Image')
            .setColor('RANDOM')
            .setImage(anal)
            .setTimestamp()
        msg.channel.send({embeds: [analembed]});
    }else{
      const analerror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [analerror]})
    }
  }
}