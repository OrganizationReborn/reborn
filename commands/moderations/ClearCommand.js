const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'moderations', []);
  }

async run(client, msg) {
  const prefix = "?"
  const args = msg.content
  .slice(prefix.length)
  .trim()
  .split(/\s+/);
const [command, input] = args;
  if(!msg.member.permissions.has('MANAGE_MESSAGES')){
      return msg.channel
      .send("You can't use this command!");
  }
if(isNaN(input)){
  return msg.channel
  .send("Enter the amount that you would like to clear")
  .then((sent) =>{
      setTimeout(() =>{
          sent.delete();
      }, 2500);
  })
}

  if(Number(input) < 0) {
      return msg.channel
          .send('enter a positive number')
          .then((sent) => {
              setTimeout(() => {
              sent.delete();
          }, 2500);
  });
}

const amount = Number(input) > 100
? 101
: Number(input) + 1;

msg.channel.bulkDelete(amount, true)
.then((_msg) => {
msg.channel
.send(`Bot cleared \`${_msg.size}\` messages :broom:`)
.then((sent) => {
setTimeout(() => {
  sent.delete();
}, 2500);
});
});
  }
}