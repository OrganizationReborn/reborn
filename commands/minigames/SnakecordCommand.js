const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SnakecordCommand extends BaseCommand {
  constructor() {
    super('snakecord', 'minigames', []);
  }

  run(client, message, args) {
    message.channel.send('snakecord command works');
  }
}