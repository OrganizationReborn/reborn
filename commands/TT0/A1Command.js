const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class A1Command extends BaseCommand {
  constructor() {
    super('a1', 'TT0', []);
  }

async run(client, msg, args) {
    const embed = new MessageEmbed()
    .setTitle('**AREA 1**')
    .setDescription('Every journey has to start `somewhere`')
    .addFields(
      {name:"QUICK GUIDE",
      value:"•Reach level 5\n•Craft Wooden Sword\n•Craft Fish Armor"},
      {name:"RECOMMENDED GEAR FOR D1",
      value:"•Wooden Sword\n•Fish Armor"},
      {name:"RECOMMENDED STATS FOR D1",
      value:"•**AT**: 9\n•**DEF**: 14 (37 + to carry)\n•**LIFE**: 120\n•**LEVEL**: 5"},
      {name:"BEST WORK COMMAND",
      value:"•chop"},
    )
    .setColor('RANDOM')
    .setTimestamp()

    msg.channel.send({embeds: [embed]})
  }
}