const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'help', []);
  }

async run(client, msg, args) {
  const help = new MessageEmbed()
  .setTitle('🛠️ Commands 🛠️')
  .setDescription('**For shorten the list: ?h**\n Add `?` before any command')
  .addFields(
    {name:"**🛡️ Moderations Commands 🛡️**",
    value:"`ban, unban, lock, unlock, clear, kick, mute, unmute, warn, nuke`"},
    {name:"**🆓 Friendly Commands 🆓**",
    value:"`anime, meme, ping, self, weather, ask, facts, momma, insult`"},
    {name:"**📋 Level Commands 📋**",
    value:"`level, leaderboard`"},
    {name:"**🎲 Fun Commands 🎲**",
    value:"`roll, coinflip, role, zodiac, urban, insult ,simp, topic, trump, advice, shower, iq`"},
    {name:"**🐱 🐶 Animal Commands 🐱 🐶**",
    value:"`cat, dog`"},
    {name:"**⚔️ Erpg Commands ⚔️**",
    value:"`a1-a5`"},
    {name:"**🔞 NSFW Commands 🔞**",
    value:"`nsfw`"},
    {name:"**❓ How to use? ❓**",
    value:"Sending a command like: `?[command]`"},
    {name:"**Example**",
    value:"1️⃣`?anime, ?meme, ?ping, ?self @[user], ?weather [country], ?cat, ?dog, \n`2️⃣`?a1[-a5], ?nsfw, ?insult [@user]`"},
    {name:"**Example for Moderations**",
    value:"1️⃣`?ban @[user], ?unban[@user]**(NOT RECOMMENDED)**, ?lock, ?unlock, \n`2️⃣`?clear [amount], ?kick @[user], ?mute @[user], ?unmute @[user], \n`3️⃣`?warn @[user], ?nuke`"},
  )
  .setColor('RANDOM')
  .setTimestamp()

  msg.channel.send({embeds: [help]})
  }
}