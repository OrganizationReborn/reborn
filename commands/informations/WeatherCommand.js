const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
module.exports = class WeatherCommand extends BaseCommand {
  constructor() {
    super('weather', 'informations', []);
  }

  run(client, msg, args) {
    const weather = require('weather-js');
    weather.find({search: args.join(" "), degreeType: 'C'}, function(error, result){
        if(error) return msg.channel.send(error);
        if(!args[0]) return msg.channel.send('Please specify a location')

      if(result === undefined || result.length === 0) return msg.channel.send('**Invalid** location');

      var current = result[0].current;
      var location = result[0].location;

      const weatherinfo = new MessageEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor({text: `Weather forecast for ${current.observationpoint}`})
      .setThumbnail(current.imageUrl)
      .setColor('#ff0000')
      .addField('Timezone', `UTC${location.timezone}`, true)
      .addField('Degree Type', 'Celsius', true)
      .addField('Temperatur', `${current.temperature}°`, true)
      .addField('Wind', current.winddisplay, true)
      .addField('Feels like', `${current.feelslike}°`, true)
      .addField('Humifity', `${current.humidity}%`, true)

      msg.channel.send({embeds: [weatherinfo]});
    })
  }
}
