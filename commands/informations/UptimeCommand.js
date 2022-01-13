const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UptimeCommand extends BaseCommand {
  constructor() {
    super('uptime', 'informations', []);
  }

async run(client, message, args) {
    const { MessageEmbed } = require('discord.js');

  const seconds = Math.round(process.uptime());
    const days = seconds >= 86400 ? Math.floor(seconds / 86400) : 0;
    const hours =
      seconds >= 3600 ? Math.floor((seconds - days * 86400) / 3600) : 0;
    const minutes =
      seconds >= 60
        ? Math.floor((seconds - days * 86400 - hours * 3600) / 60)
        : 0;
    const secondsRemain = seconds - days * 86400 - hours * 3600 - minutes * 60;

    const uptimeEmbed = new MessageEmbed()
      .setTitle('Reborn Uptime:')
      .setColor('RANDOM')
      .addFields(
        { name: 'Days', value: `${days}`, inline: true },
        { name: 'Hours', value: `${hours}`, inline: true },
        { name: 'Minutes', value: `${minutes}`, inline: true },
        { name: 'Seconds', value: `${secondsRemain}`, inline: true },
      )
      .setTimestamp()

    message.reply({ embeds: [uptimeEmbed] });
  }
}