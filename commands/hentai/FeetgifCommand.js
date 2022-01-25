const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class FeetgifCommand extends BaseCommand {
  constructor() {
    super('feetgif', 'hentai', ['fg']);
  }

async run(client, message, args) {
    const nsfw = require('nekos.life');
    const neko = new nsfw();
  
      const { MessageEmbed, Message } = require('discord.js');
  
      var errMessage = "This is not an NSFW Channel";
      if (!message.channel.nsfw) {
          message.react('💢');
    
          return message.reply(errMessage)
          .then(msg => {
          msg.delete({ timeout: 3000 })
          })
    
      }
    
            async function work() {
            let owo = (await neko.nsfw.feetGif());
    
            const cumslut = new MessageEmbed()
            .setTitle("feetGif")
            .setImage(owo.url)
            .setColor(`#FF0000`)
            .setURL(owo.url);
            message.channel.send({ embeds: [cumslut] });
    
    }
    
          work();
  }
}