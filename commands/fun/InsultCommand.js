const BaseCommand = require('../../utils/structures/BaseCommand');
const request = require('superagent');

module.exports = class InsultCommand extends BaseCommand {
  constructor() {
    super('insult', 'fun', []);
  }

async run(client, message, args) {
    const user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.get(message.author.id);

    request.get('http://quandyfactory.com/insult/json/')
        .end((err, res) => {
            if (!err && res.status === 200) {
                const fancyinsult = res.body;
                message.channel.send(`${user}, ${fancyinsult.insult}`);
            } 
            else {
                console.log(`REST call failed: ${err}`)
            }
        });
  }
}