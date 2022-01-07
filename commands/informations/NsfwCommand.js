const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class NsfwCommand extends BaseCommand {
  constructor() {
    super('nsfw', 'informations', []);
  }

async run(client, msg, args) {
    if(msg.channel.nsfw){
      const nsfw = new MessageEmbed()
		.setTitle('NSFW Commands')
		.setDescription('Only 18+ Can do this or else!')
		.addFields(
            {name:"Real life NSFW", value:"`anal, 4k, ass, gonewild, porngif, pussy, thigh, boobs`"},
            {name:"Anime NSFW", value:"`hentai, hentaiass, hentaimidriff, hentaithigh, erokemo, kitsune, lewd, nekofeet, nekopussy, nekotits, solo, wallpaper`"},
            )
        .setColor('RANDOM')
        .setTimestamp()

        msg.channel.send({embeds: [nsfw]});
    }else{
      const hentaiasserror = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('This is not NSFW channel!')
        msg.channel.send({embeds: [hentaiasserror]})
    }
  }
}