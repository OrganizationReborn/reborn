const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class NekopussyCommand extends BaseCommand {
  constructor() {
    super('nekopussy', 'hentai', ['np']);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const nekopussy = await nsfw.nekopussy();
        const nekopussyembed = new MessageEmbed()
            .setTitle('Neko Pussy Image')
            .setColor('RANDOM')
            .setImage(nekopussy)
            .setTimestamp()
        msg.channel.send({embeds: [nekopussyembed]});
    }else{
      const nekopussyerror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [nekopussyerror]})
    }
  }
}