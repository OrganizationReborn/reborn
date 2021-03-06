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
      value:"`ban, unban, lock, unlock, clear, kick, mute, unmute, warn, nuke, announce, restart, hack`"},
      {name:"**🆓 Friendly Commands 🆓**",
      value:"`manga, translator, aliases, anime, waifu, meme, ping, self, weather, ask, facts, uptime, user, afk, kpop`"},
      {name:"**🙂 Emotes 🙂**",
      value:"`blush, cry, dance, deredere, grin, happy, lewd, pout, scoff, shrug, sleepy, smile, smug, teehee, thinking, thonking, thumbsup, triggered, wag`"},
      {name:"**🤗 Action Commands 🤗**",
      value:"`bite, boop, bully, cuddle, greet, handholding, highfive, hold, hug, kill, kiss, lick, nom, pat, poke, punch, slap, snuggle, stare, tickle, wave`"},
      {name:"**📋 Level Commands 📋**",
      value:"`level, ranking`"},
      {name:"**🎉 Giveaways Commands `ONLY ADMIN CAN ACCESS`🎉**",
      value:"`gstart, greroll, gend`"},
      {name:"**🎮 Other Games Commands `ONLY FOR DESKTOP USERS` 🎮**",
      value:"`poker, ltiles, spellcast, betrayal, doodle`"},
      {name:"**⌨️ Useful Commands ⌨️**",
      value:"`calculator`"},
      {name:"**🎲 Fun Commands 🎲**",
      value:"`roll, coinflip, joke, zodiac, urban, momma, insult, simp, topic, trump, advice, shower, iq`"},
      {name:"**🐱 🐶 Animal Commands 🐱 🐶**",
      value:"`cat, dog, catsay`"},
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