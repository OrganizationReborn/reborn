const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class AssCommand extends BaseCommand {
  constructor() {
    super('ass', 'nsfw', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const ass = await nsfw.ass();
        const assembed = new MessageEmbed()
            .setTitle('Ass Image')
            .setColor('RANDOM')
            .setImage(ass)
            .setTimestamp()
        msg.channel.send({embeds: [assembed]});
    }else{
      const asserror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [asserror]})
    }
  }
}