const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class A2Command extends BaseCommand {
  constructor() {
    super('a2', 'TT0', []);
  }

async run(client, msg, args) {
  const embed = new MessageEmbed()
  .setTitle('**AREA 2**')
  .setDescription('Look who made it here. Go kill some wolves to celebrate.')
  .addFields(
    {name:"QUICK GUIDE",
    value:"•Reach level 10\n•Craft Fish Sword[Epic+]\n•Craft Wolf Armor[Epic+]"},
    {name:"RECOMMENDED GEAR FOR D2",
    value:"•Fish Sword[Epic]\n•Wolf Armor[Epic]"},
    {name:"RECOMMENDED STATS FOR D2",
    value:"•**AT**: 37\n•**DEF**: 48 (70 + to carry)\n•**LIFE**: 145\n•**LEVEL**: 10"},
    {name:"BEST WORK COMMAND",
    value:"•chop"},
  )
  .setColor('RANDOM')
  .setTimestamp()

  msg.channel.send({embeds: [embed]})
  }
}