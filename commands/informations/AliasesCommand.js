const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AliasesCommand extends BaseCommand {
  constructor() {
    super('aliases', 'informations', []);
  }

async run(client, message, args) {
    const { MessageEmbed } = require('discord.js');
    
    const embed = new MessageEmbed()
    .setTitle('Aliases')
    .addFields(
        {name:"Action Command", value:"`Handholding = hh, Highfive = hf`"},
        {name:"NSFW Commands", value:"`fg, ha, hm, ht, nf, np, nt, wp, gw, pg`"}
    )
    .setColor('RANDOM')
    .setTimestamp()

    message.reply({embeds: [embed]});
  }
}