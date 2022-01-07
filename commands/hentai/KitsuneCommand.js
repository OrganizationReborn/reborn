const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class KitsuneCommand extends BaseCommand {
  constructor() {
    super('kitsune', 'hentai', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const kitsune = await nsfw.kitsune();
        const kitsuneembed = new MessageEmbed()
            .setTitle('Kitsune Image')
            .setColor('RANDOM')
            .setImage(kitsune)
            .setTimestamp()
        msg.channel.send({embeds: [kitsuneembed]});
    }else{
      const kitsuneerror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [kitsuneerror]})
    }
  }
}