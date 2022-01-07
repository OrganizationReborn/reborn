const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UnlockCommand extends BaseCommand {
  constructor() {
    super('unlock', 'moderation', []);
  }

async run(client, msg, args) {
    if (!msg.member.permissions.has("MANAGE_CHANNELS")) 
        return;
          
      msg.channel.permissionOverwrites.create(msg.channel.guild.roles.everyone, {
                   SEND_MESSAGES: true
          });
      msg.channel.send("Channel Unlocked")
  }
}