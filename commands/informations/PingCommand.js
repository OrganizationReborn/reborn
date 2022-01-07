const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'informations', []);
  }

  run(client, msg, args) {
    const pingEmbed = new MessageEmbed()
    .setTitle('Your ping')
    .setColor('RANDOM')
    .setDescription("⚠️`This is not accurated ping`⚠️")
    .addFields(
        {name:"Currency Bot", value:`${msg.createdTimestamp - Date.now()}ms`},
        {name:"Currency API", value:`${Math.round(client.ws.ping)}ms`, inline:true}
    )
    .setTimestamp()

    msg.channel.send({embeds: [pingEmbed]});
  }
}