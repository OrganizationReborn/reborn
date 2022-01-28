const BaseCommand = require('../../utils/structures/BaseCommand');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

async run (client, message, args) {
//if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You can't use this command.");
//if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send("My role does not have the manage channels permission");

const { hangman } = require('reconlx')
if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You need manage messages permission.')
const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
if(!channel) return message.channel.send('You need to specify a channel. `?hangman <channel> <word>`')
const word = args.slice(1).join(" ")
if(!word) return  message.channel.send('You need to specify a word. `?hangman <channel> <word>`')

const hang = new hangman({
    message: message,
    word: word,
    client: client,
    channelID: channel.id,
})

hang.start();
  }
}