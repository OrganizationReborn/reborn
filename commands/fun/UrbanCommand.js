const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');
const urban = require('urban');

module.exports = class UrbanCommand extends BaseCommand {
  constructor() {
    super('urban', 'fun', []);
  }

async run(client, message, args) {
    urban.random().first(json => {
      const def = new MessageEmbed()
          .setTitle(json.word)
          .setDescription(json.definition)
          .addFields(
            {name:'Upvotes', value:`${json.thumbs_up}`},
            {name:'Downvotes', value:`${json.thumbs_down}`}
            )
          .setTimestamp()
          .setFooter({text: `Written by ${json.author}`});
  
      message.channel.send({embeds: [def]});
  });
  }
}