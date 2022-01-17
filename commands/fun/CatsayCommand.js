const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CatsayCommand extends BaseCommand {
  constructor() {
    super('catsay', 'fun', []);
  }

async run(client, message, args) {
    const { MessageEmbed, Message } = require('discord.js');
  
    message.delete()
    const state = "enabled";
    if(state === "disabled") {
      return message.channel.send("Command has been disabled for now");
    }
    const msg = args.join(" ");
    if(!msg) {
      return message.channel.send("What you want the cat to say?\nUsage: `?catsay <anything what you say>`");
    }
    message.channel.send({
      files: [
        {
          attachment: `https://cataas.com/cat/cute/says/${msg}`,
          name: "catsay.png",
        },
      ],
    });
  }
}