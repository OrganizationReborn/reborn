const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class NekotitsCommand extends BaseCommand {
  constructor() {
    super('nekotits', 'hentai', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const nekotits = await nsfw.nekotits();
        const nekotitsembed = new MessageEmbed()
            .setTitle('Neko Tits Image')
            .setColor('RANDOM')
            .setImage(nekotits)
            .setTimestamp()
        msg.channel.send({embeds: [nekotitsembed]});
    }else{
      const nekotitserror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [nekotitserror]})
    }
  }
}