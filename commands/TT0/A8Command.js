const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class A8Command extends BaseCommand {
  constructor() {
    super('a8', 'TT0', []);
  }

  run(client, message, args) {
    message.channel.send('a8 command works');
  }
}