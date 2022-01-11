const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class A7Command extends BaseCommand {
  constructor() {
    super('a7', 'TT0', []);
  }

  run(client, message, args) {
    message.channel.send('a7 command works');
  }
}