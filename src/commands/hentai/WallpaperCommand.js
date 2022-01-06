const BaseCommand = require('../../utils/structures/BaseCommand');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = class WallpaperCommand extends BaseCommand {
  constructor() {
    super('wallpaper', 'hentai', []);
  }

  async run(client, msg, args) {
    if(msg.channel.nsfw){
      const wallpaper = await nsfw.wallpaper();
        const wallpaperembed = new MessageEmbed()
            .setTitle('Wallpaper Image')
            .setColor('RANDOM')
            .setImage(wallpaper)
            .setTimestamp()
        msg.channel.send({embeds: [wallpaperembed]});
    }else{
      const wallpapererror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [wallpapererror]})
    }
  }
}