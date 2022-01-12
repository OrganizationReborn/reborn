const BaseCommand = require('../../utils/structures/BaseCommand');
const request = require('superagent');

module.exports = class MommaCommand extends BaseCommand {
  constructor() {
    super('momma', 'fun', []);
  }

async run(client, message, args) {
    request
    .get('http://api.yomomma.info/')
    .end((err, res) => {
      if (!err && res.status === 200) {
        try {
          JSON.parse(res.text);
        }
        catch (e) {
          return message.reply('the API returned an unconventional response.');
        }
        const joke = JSON.parse(res.text);
        message.channel.send(joke.joke);
      } else {
        console.error(`REST call failed: ${err}`);
      }
    });
  }
}