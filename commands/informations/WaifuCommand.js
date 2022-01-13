const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WaifuCommand extends BaseCommand {
  constructor() {
    super('waifu', 'informations', []);
  }

async run(client, message, args) {
    const { MessageEmbed } = require('discord.js');
    const waifus = require('../../commands/assets/waifus.json');
    const total = Object.keys(waifus).length
    const weefi = [
      'https://gfycat.com/KindheartedContentIberianmidwifetoad',
      'http://i.imgur.com/U25HMyz.gifv',
      'http://i.imgur.com/0xhBPbR.gif',
      'Your waifu is me...right?',
      'https://media.giphy.com/media/2PW8oTlHnVaZa/giphy.gif',
      'https://thumbs.gfycat.com/BiodegradableWillingIchneumonfly-max-1mb.gif',
      'https://i.makeagif.com/media/10-19-2015/PyKTt9.gif',
      'https://i.imgur.com/hn0YsNQ.gif',
      'https://media.giphy.com/media/xUA7aVR8tUqIHdAjPa/giphy.gif',
      'http://i0.kym-cdn.com/photos/images/original/001/203/473/1cd.gif',
      'https://media1.tenor.com/images/0e6d6a8f61b84b1ea6cdb13522a39753/tenor.gif?itemid=5237833',
      'https://i.imgur.com/5XuI7W8.gif',
      'http://i.imgur.com/usJbYkw.gif'
  ]
  
  let somethingThere = message.content.split(/\s+/g).slice(1).join(" ");
  const percentage = Math.random()
  if (!somethingThere || args.number == 'none') {
      var random = Math.floor(Math.random() * total + 1);
      var waifu = waifus[random];
  
      const embed = new MessageEmbed()
          .setTitle(waifu.name)
          .setDescription(waifu.origin)
          .setImage(waifu.image)
          .setFooter({text: `Waifu Number ${random}`})
          .setColor('RANDOM');
      var ms = await message.channel.send({embeds: [embed]});
      await ms.react('👍');
      await ms.react('👎');
  
      return null;
  
  } else if (somethingThere) {
      const waifuNumber = args.number
      var waifu = waifus[waifuNumber]
      const embed = new MessageEmbed()
          .setDescription(waifu.origin)
          .setImage(waifu.image)
          .setFooter({text: `Waifu Number ${waifuNumber}`})
          .setColor('RANDOM');
      var ms = await message.channel.send(`💝 Here's waifu number **${waifuNumber}**!`, { embeds: [embed] });
      await ms.react('👍');
      await ms.react('👎');
  
      return null;
  
  } else if (percentage < 0.05) {
      return message.channel.send(weefi[Math.round(Math.random() * (weefi.length - 1))])
  }
  }
}