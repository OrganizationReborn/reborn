const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');
const request = require("request");
var randomnumber = require('random-number');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

async run(client, message, args) {
 
  }
}