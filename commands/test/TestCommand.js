const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');


module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

async run(client, msg, args) {
  
  }
}