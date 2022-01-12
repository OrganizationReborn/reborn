const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CoinCommand extends BaseCommand {
  constructor() {
    super('coinflip', 'fun', []);
  }

async run(client, msg, args) {
    let random = (Math.floor(Math.random() * Math.floor(2)));

    if(random === 0) {
      msg.channel.send('I flipped heads!');
    }
    else {
      msg.channel.send('I flipped tails!');
    }
  }
}