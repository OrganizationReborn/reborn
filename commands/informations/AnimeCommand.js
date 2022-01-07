const BaseCommand = require('../../utils/structures/BaseCommand');
const randomanime = require("random-anime");
const { MessageEmbed } = require('discord.js');

module.exports = class AnimeCommand extends BaseCommand {
  constructor() {
    super('anime', 'informations', []);
  }

async run(client, msg, args) {
        const anime = randomanime.anime();
        const embed = new MessageEmbed()
        .setTitle('Random Anime')
        .setColor('RANDOM')
        .setImage(anime)
        .setTimestamp()
        msg.channel.send({embeds: [embed]});
  }
}