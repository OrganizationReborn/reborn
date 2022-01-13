const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class CalculatorCommand extends BaseCommand {
  constructor() {
    super('calculator', 'fun', []);
  }

async run(client, message, args) {
    try{
      let signos = ["*","/","+","-","x"];
      if(!args[2]){
          return client.embed.usage(message, data);
      };
  
      if(!signos.includes(args[1].toLowerCase())){
          return client.embed.usage(message, data);
      };
  
      let signo = args[1].toLowerCase() === "x" ? '*' : args[1];
      let calculation = await eval(args[0]+signo+args[2]);
      
      const embed = new MessageEmbed()
      .setTitle('Calculator!')
      .setColor('RANDOM')
      .addFields(
        {name:'Input',
        value:`\`\`\`${args[0]} ${signo} ${args[2]}\`\`\``},
        {name:'Output',
        value:`\`\`\`${calculation}\`\`\``,
        inline: true}
      )
  
      message.channel.send({embeds: [embed]});
  
  }catch(err){
      console.log(err)
  
      const embederror = new MessageEmbed()
      .setDescription(`Invalid input, follow this command ?calculator [input/number] [sign] [input/number]`)
      .setColor('RANDOM')
      
      message.channel.send({embeds: [embederror]});
      }
  }
}