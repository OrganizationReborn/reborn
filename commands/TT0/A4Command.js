const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class A4Command extends BaseCommand {
  constructor() {
    super('a4', 'TT0', []);
  }

  async run(client, msg, args) {
    const embed = new MessageEmbed()
    .setTitle('**AREA 4**')
    .setDescription('Nothing much to see there, move along.')
    .addFields(
      {name:"QUICK GUIDE",
      value:"•Reach level 20\n•Enchant Epic Armor[Hyper+]"},
      {name:"RECOMMENDED GEAR FOR D4",
      value:"•Zombie Sword[Epic]\n•Epic Armor[Hyper]"},
      {name:"RECOMMENDED STATS FOR D4",
      value:"•**AT**: 101\n•**DEF**: 105 (142 + to carry)\n•**LIFE**: 195\n•**LEVEL**: 20"},
      {name:"BEST WORK COMMAND",
      value:"•chop"},
    )
    .setColor('RANDOM')
    .setTimestamp()

    msg.channel.send({embeds: [embed]})
  }
}