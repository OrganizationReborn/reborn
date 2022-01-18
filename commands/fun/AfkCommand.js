const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AfkCommand extends BaseCommand {
  constructor() {
    super('afk', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('afk command works');
  }
}