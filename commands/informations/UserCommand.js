const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UserCommand extends BaseCommand {
  constructor() {
    super('user', 'informations', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');

    if (!args[0]) {
      const embed1 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**Avatar**')
        .setImage(
          `${message.author.displayAvatarURL({ size: 4096, dynamic: true })}`,
        )
        .setTimestamp()
  
      return message.reply({ embeds: [embed1] });
    } else {
      const member =
        message.mentions.users.first() ||
        (await message.guild.members.fetch(args[0]).catch(() => {
          return undefined;
        }));
      if (!member) {
        return message.reply('User not found.');
      } else {
        const embed2 = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle('Requested Avatar:')
          .setImage(
            `${member.displayAvatarURL({ size: 4096, dynamic: true })}`,
          )
          .setTimestamp()
  
        return message.reply({ embeds: [embed2] });
      }
    }
  }
}