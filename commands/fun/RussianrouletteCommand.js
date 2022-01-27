const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RussianrouletteCommand extends BaseCommand {
  constructor() {
    super('russianroulette', 'fun', ['rr']);
  }

  run(client, message, args) {
    const userToMute = message.member;
    const muteRole = message.guild.roles.cache.find(role => role.name === "Muted");
  
   let random = Math.random() * 100;
   if(random < 100 / 6) {
     message.reply('🔥🔫 You died.');
     userToMute.roles.add(muteRole);
     setTimeout(() => userToMute.roles.remove(muteRole), 3000);
   } else {
     message.reply("🚬🔫 You're safe... For now...")
   }
  
  }
}