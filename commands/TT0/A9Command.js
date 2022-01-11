const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class A9Command extends BaseCommand {
  constructor() {
    super('a9', 'TT0', []);
  }

  run(client, message, args) {
    message.channel.send('a9 command works');
  }
}