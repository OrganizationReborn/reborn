const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const Axios = require('axios');

module.exports = class CatCommand extends BaseCommand {
  constructor() {
    super('cat', 'informations', []);
  }

  run(client, msg, args) {
    Axios.get('https://api.thecatapi.com/v1/images/search')
        .then((res) => {
            console.log('RES:', res.data[0].url)
           const cat = new MessageEmbed()
           .setTitle('Meowy!')
           .setImage(res.data[0].url)
           .setColor('RANDOM')
           .setTimestamp()

           msg.channel.send({embeds: [cat]});
        })
        .catch((err) => {
            console.error('ERR:', err)
        })
  }
}