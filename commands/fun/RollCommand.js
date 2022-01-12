const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RollCommand extends BaseCommand {
  constructor() {
    super('roll', 'fun', []);
  }

async run(client, msg, args) {
    if(!args[0]) {
      args[0] = 6;
    }
  
    let result = (Math.floor(Math.random() * Math.floor(args[0])));
    msg.channel.send(`I rolled ${result + 1}!`);
  }
}