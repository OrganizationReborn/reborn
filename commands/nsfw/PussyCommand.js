const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class PussyCommand extends BaseCommand {
  constructor() {
    super('pussy', 'nsfw', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const pussy = await nsfw.pussy();
        const pussyembed = new MessageEmbed()
            .setTitle('Pussy Image')
            .setColor('RANDOM')
            .setImage(pussy)
            .setTimestamp()
        msg.channel.send({embeds: [pussyembed]});
    }else{
      const pussyerror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [pussyerror]})
    }
  }
}