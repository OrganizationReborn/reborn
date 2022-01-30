const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TransfilCommand extends BaseCommand {
  constructor() {
    super('transfil', 'translator', ['tfil']);
  }

async run(client, message, args) {
    const { MessageEmbed, Util } = require('discord.js');
    const translate = require("@iamtraction/google-translate");
  
    const query = args.join(" ");
    if(!query) return message.reply("Please specify a text to translate");
  
    const translated = await translate(query, {to: 'tl'});
    message.reply(translated.text);
  }
}