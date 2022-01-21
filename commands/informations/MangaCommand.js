const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class MangaCommand extends BaseCommand {
  constructor() {
    super('manga', 'informations', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Util } = require('discord.js');
    const request = require('node-superfetch');
    const query= args.join(' ');
  
    try{
        const { text } = await request
            .get('https://kitsu.io/api/edge/manga')
            .query({ 'filter[text]': query });
        const body = JSON.parse(text);
        if (!body.data.length) return message.reply('Wrong argument, please do `?manga <title>`');
        const data = body.data[0].attributes;
        const embed = new MessageEmbed()
          .setColor(0xF75239)
          .setURL(`https://kitsu.io/manga/${data.slug}`)
          .setThumbnail(data.posterImage ? data.posterImage.original : null)
          .setTitle(data.canonicalTitle)
          .setDescription((data.synopsis))
          .addField('> Type', `${data.subtype} - ${data.status}`, true)
          .addField('> Volumes / Chapters', `${data.volumeCount || '???'} / ${data.chapterCount || '???'}`, true)
          .addField('> Start Date', data.startDate ? new Date(data.startDate).toDateString() : '???', true)
          .addField('> End Date', data.endDate ? new Date(data.endDate).toDateString() : '???', true);
        return message.channel.send({embeds: [embed]});
          } catch(err){
              return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
      }
  }
}