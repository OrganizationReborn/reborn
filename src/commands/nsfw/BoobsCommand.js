const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class BoobsCommand extends BaseCommand {
  constructor() {
    super('boobs', 'nsfw', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const boobs = await nsfw.boobs();
        const boobsembed = new MessageEmbed()
            .setTitle('Boobs Image')
            .setColor('RANDOM')
            .setImage(boobs)
            .setTimestamp()
        msg.channel.send({embeds: [boobsembed]});
    }else{
      const boobserror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [boobserror]})
    }
  }
}