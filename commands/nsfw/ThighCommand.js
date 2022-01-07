const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class ThighCommand extends BaseCommand {
  constructor() {
    super('thigh', 'nsfw', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const thigh = await nsfw.thigh();
        const thighembed = new MessageEmbed()
            .setTitle('Thigh Image')
            .setColor('RANDOM')
            .setImage(thigh)
            .setTimestamp()
        msg.channel.send({embeds: [thighembed]});
    }else{
      const thigherror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [thigherror]})
    }
  }
}