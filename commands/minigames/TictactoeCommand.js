const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TictactoeCommand extends BaseCommand {
  constructor() {
    super('tictactoe', 'minigames', ['ttt']);
  }

async run(client, message, args) {
    const { tictactoe } = require('reconlx');
    const member = message.mentions.members.first();
    if(member == undefined) {
      message.reply("Are you going to play by yourself? Do the command again but this time should be like this ?tictactoe | ?ttt @user")
    }

    new tictactoe ({
      player_two: member,
      message: message
    });
  }
}