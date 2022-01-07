const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderation', []);
  }

async run(client, msg, args) {
    if(!msg.member.permissions.has("MANAGE_CHANNELS")) return msg.channel.send("You can't use this command.");
        if(!msg.guild.me.permissions.has("MANAGE_CHANNELS")) return msg.channel.send("My role does not have the manage channels permission");
        const nukeChannel = msg.channel;

        if(!nukeChannel.deletable) return msg.channel.send("This channel is not deletable.")
        
        await nukeChannel.clone().catch(err => console.log(err));
        await nukeChannel.delete().catch(err => console.log(err));
  }
}