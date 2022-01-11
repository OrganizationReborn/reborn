const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class A5Command extends BaseCommand {
  constructor() {
    super('a5', 'TT0', []);
  }

  async run(client, msg, args) {
    const embed = new MessageEmbed()
    .setTitle('**AREA 5**')
    .setDescription('Stay awhile and farm some materials.')
    .addFields(
      {name:"QUICK GUIDE",
      value:"•Farm the materials mentioned below\n•Reach level 30\n•Unicorn Sword[Hyper+]\n•Enchant Epic Armor[Ultimate+]"},
      {name:"RECOMMENDED GEAR FOR D5",
      value:"•Unicorn Sword[Hyper]\n•Epic Armor[Ultimate]"},
      {name:"RECOMMENDED STATS FOR D5",
      value:"•**AT**: 190\n•**DEF**: 130 (179 + to carry)\n•**LIFE**: 270(buy boost if necessary)\n•**LEVEL**: 30"},
      {name:"MATERIALS TO FARM",
      value:"•30+ wolf skinsn\n•30+ zombie eyes\n•30+ unicorn horns(after crafting)\n•30,000 apples"},
      {name:"BEST WORK COMMAND",
      value:"•chop"},
    )
    .setColor('RANDOM')
    .setTimestamp()

    msg.channel.send({embeds: [embed]})
  }
}