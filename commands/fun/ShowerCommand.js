const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');
const request = require("request");

module.exports = class ShowerCommand extends BaseCommand {
  constructor() {
    super('shower', 'fun', []);
  }

async run(client, message, args) {
    try {
      let random = Math.floor(Math.random() * 80);
      let url = ['https://www.reddit.com/r/showerthoughts.json?sort=rising&t=hour&limit=100'];
  
      request({
          method: 'GET',
          uri: url[Math.floor(Math.random() * url.length)]
      }, function (err, response, data) {
          if (err) {
              return console.log(err, null);
          }
  
          data = JSON.parse(data);
          var mainObj = data.data.children;
  
          const embed = new MessageEmbed()
          .setTitle('Shower Thoughts')
          .setDescription(`${mainObj[random].data.title}`)
          .setColor('RANDOM')
          .setFooter({text: "Requested by " + message.author.tag})
          .setTimestamp()
  
          message.channel.send({embeds: [embed]});
      })
  } catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
  }
  }
}