const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class A10Command extends BaseCommand {
  constructor() {
    super('a10', 'TT0', []);
  }

  run(client, message, args) {
    message.channel.send('a10 command works');
  }
}