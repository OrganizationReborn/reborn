const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class HCommand extends BaseCommand {
  constructor() {
    super('h', 'help', []);
  }

async run(client, msg, args) {
    const help = new MessageEmbed()
    .setTitle('🛠️ Commands 🛠️')
    .setDescription('**To see the full list: ?help**\n Add `?` before any command')
    .addFields(
      {name:"**🛡️ Moderations Commands 🛡️**",
      value:"`ban, unban, lock, unlock, clear, kick, mute, unmute, warn, nuke`"},
      {name:"**🆓 Friendly Commands 🆓**",
      value:"`anime, meme, ping, self, weather, ask, facts`"},
      {name:"**📋 Level Commands 📋**",
      value:"`level, leaderboard`"},
      {name:"**🎲 Fun Commands 🎲**",
      value:"`roll, coinflip, joke, zodiac, urban, momma, insult, simp, topic, trump, advice, shower`"},
      {name:"**🐱 🐶 Animal Commands 🐱 🐶**",
      value:"`cat, dog`"},
      {name:"**⚔️ Erpg Commands ⚔️**",
      value:"`a1-a5`"},
      {name:"**🔞 NSFW Commands 🔞**",
      value:"`nsfw`"},
    )
    .setColor('RANDOM')
    .setTimestamp()

    msg.channel.send({embeds: [help]})
  }
}