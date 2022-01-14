const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');
const eco = require('discord-mongoose-economy');
eco.connect("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");

module.exports = class LeaderboardcashCommand extends BaseCommand {
  constructor() {
    super('leaderboardcash', 'casino', []);
  }

async run(client, message, args) {
    const lb = await eco.lb(message.guild.id, 10);
    if(lb < 1) return message.reply('less than 1');
    var index = 0;
    const mapped = lb.map(i => `**${index+=1}. ${client.users.cache.get(i.userID).tag} - ${i.wallet + i.bank}**`);
    const lbembed = new MessageEmbed()
    .setTitle(`${message.guild.name}\'s Leaderboard`)
    .setAuthor({iconURL: `${message.author.avatarURL()}`,name: `${message.member.user.tag}`})
    .setDescription(`${mapped.join('\n')}`)
    .setColor("RANDOM");
    message.channel.send({embeds: [lbembed]});
  }
}