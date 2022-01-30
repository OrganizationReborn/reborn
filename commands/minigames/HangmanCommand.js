const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HangmanCommand extends BaseCommand {
  constructor() {
    super('hangman', 'minigames', []);
  }

async run(client, message, args) {
    const { hangman } = require('reconlx')
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You need manage messages permission.')
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!channel) return message.channel.send('You need to specify a channel. `?hangman <channel>`')
    
    const words = require('../assets/questions.json');
    const total = Object.keys(words).length
    var random = Math.floor(Math.random() * total + 1);
    var wordsrandom = words[random];
    const word = wordsrandom.hangman
    
    const hang = new hangman({
        message: message,
        word: word,
        client: client,
        channelID: channel.id,
    })
    
    hang.start();
  }
}