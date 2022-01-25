const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class NekofeetCommand extends BaseCommand {
  constructor() {
    super('nekofeet', 'hentai', ['nf']);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const nekofeet = await nsfw.nekofeet();
        const nekofeetembed = new MessageEmbed()
            .setTitle('Neko Feet Image')
            .setColor('RANDOM')
            .setImage(nekofeet)
            .setTimestamp()
        msg.channel.send({embeds: [nekofeetembed]});
    }else{
      const nekofeeterror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [nekofeeterror]})
    }
  }
}