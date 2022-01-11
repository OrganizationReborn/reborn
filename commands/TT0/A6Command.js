const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class A6Command extends BaseCommand {
  constructor() {
    super('a6', 'TT0', []);
  }

  run(client, message, args) {
    message.channel.send('a6 command works');
  }
}