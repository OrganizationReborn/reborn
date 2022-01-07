const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LockCommand extends BaseCommand {
  constructor() {
    super('lock', 'moderation', []);
  }

async run(client, msg, args) {
  if (!msg.member.permissions.has("MANAGE_CHANNELS")) 
  return;
    
  msg.channel.permissionOverwrites.create(msg.channel.guild.roles.everyone, {
              SEND_MESSAGES: false
      });
  msg.channel.send("Channel Locked")
  }
}