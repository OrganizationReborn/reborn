const BaseCommand = require('../../utils/structures/BaseCommand');
const request = require('superagent');

module.exports = class JokeCommand extends BaseCommand {
  constructor() {
    super('joke', 'fun', []);
  }

async run(client, msg, args) {
  let firstName = args[0];
  let lastName = args[1];

  if (!firstName) firstName = 'Logan';
  if (!lastName) lastName = 'Suarez';

  request.get('http://api.icndb.com/jokes/random')
      .query({escape: 'javascript'})
      .query({firstName: firstName})
      .query({lastName: lastName})
      .end((err, res) => {
          if (!err && res.status === 200) {
            msg.channel.send(res.body.value.joke)
          } else {
              console.error(`REST call failed: ${err}`)
          }
      });
  }
}