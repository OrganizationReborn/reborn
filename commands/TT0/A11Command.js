const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class A11Command extends BaseCommand {
  constructor() {
    super('a11', 'TT0', []);
  }

  run(client, message, args) {
    message.channel.send('a11 command works');
  }
}