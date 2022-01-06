const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const fetchP = import('node-fetch').then(mod => mod.default)
const fetch = (...args) => fetchP.then(fn => fn(...args))


module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('meme', 'informations', []);
  }

async run(client, msg, args) {
    try {
      const url = await fetch("https://www.reddit.com/r/memes/random/.json");
      const random = await url.json();

      const embed = new MessageEmbed()
        .setTitle(`Random Meme | ${random[0].data.children[0].data.title}`)
        .setImage(random[0].data.children[0].data.url)
        .setColor('RANDOM')
        .setTimestamp()

      await msg.channel.send({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  }
}