const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RpsCommand extends BaseCommand {
  constructor() {
    super('rps', 'minigames', []);
  }

async run(client, message, args) {
    const blank = args[0];

    if(blank == undefined) {
      return message.reply('What will you choose? `rock, paper or scissors?`')
    } else {
      if(!args.length)
      return message.reply('To keep it fair, also send your pick!');
  
      const list = ['rock', 'paper', 'scissors'];
      const rps = ['Rock! - ⛰', 'Paper! - 📄', 'Scissors! - ✂'];
      const random = rps[Math.floor(Math.random() * rps.length)];
  
      if(!list.includes(args[0].toLowerCase())) {
        return message.reply(`\`${args[0]}\` is not a valid option.`);
      }
      message.reply(random);
    }
  }
}