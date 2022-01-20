const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class KpopCommand extends BaseCommand {
  constructor() {
    super('kpop', 'informations', []);
  }

async run(client, message, args) {
const { MessageEmbed, Util } = require('discord.js');
  const kpopfandom = require('../assets/kpop/kpop.json')
  const total = Object.keys(kpopfandom).length

  let somethingThere = message.content.split(/\s+/g).slice(1).join(" ");
  if(!somethingThere || args.number == 'none') {
    var random = Math.floor(Math.random() * total + 1);
    var kpop = kpopfandom[random];

    const embed = new MessageEmbed()
    .setTitle(kpop.name)
    .setDescription(`From: **${kpop.group}**`)
    .setImage(kpop.image)
    .setFooter({text: `Kpop Number Request: ${random}`})
    .setColor('RANDOM')

    var ms = await message.channel.send({embeds: [embed]});
    await ms.react('♥️')
  }
  }
}