const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TranslatorCommand extends BaseCommand {
  constructor() {
    super('translator', 'translator', []);
  }

async run(client, message, args) {
  const { MessageEmbed, Util } = require('discord.js');
  const embed = new MessageEmbed()
  .setTitle("Translator Language List")
  .setDescription("Transeng = `English`\nTransfil = `Tagalog`\nTransjap = `Japanese`\nTranskor = `Korea`")
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter({text: "To see aliases, type `?aliases`"})

  message.reply({embeds: [embed]});
  }
}