const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class A3Command extends BaseCommand {
  constructor() {
    super('a3', 'TT0', []);
  }

  async run(client, msg, args) {
    const embed = new MessageEmbed()
    .setTitle('**AREA 3**')
    .setDescription('I really hope you like fish.')
    .addFields(
      {name:"QUICK GUIDE",
      value:"•Reach level 15\n•Craft Zombie Sword[Epic+]\n•Craft Epic Armor[Epic+]"},
      {name:"RECOMMENDED GEAR FOR D3",
      value:"•Fish Zombie[Epic]\Epic Armor[Epic]"},
      {name:"RECOMMENDED STATS FOR D3",
      value:"•**AT**: 93\n•**DEF**: 91 (108 + to carry)\n•**LIFE**: 170\n•**LEVEL**: 15"},
      {name:"BEST WORK COMMAND",
      value:"•axe"},
    )
    .setColor('RANDOM')
    .setTimestamp()
  
    msg.channel.send({embeds: [embed]})
    }
  }