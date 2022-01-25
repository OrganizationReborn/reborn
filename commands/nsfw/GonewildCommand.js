const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class GonewildCommand extends BaseCommand {
  constructor() {
    super('gonewild', 'nsfw', ['gw']);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const gonewild = await nsfw.gonewild();
        const gonewildembed = new MessageEmbed()
            .setTitle('Gone Wild Image')
            .setColor('RANDOM')
            .setImage(gonewild)
            .setTimestamp()
        msg.channel.send({embeds: [gonewildembed]});
    }else{
      const gonewilderror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [gonewilderror]})
    }
  }
}