const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class SelfCommand extends BaseCommand {
  constructor() {
    super('self', 'informations', []);
  }

async run(client, msg, args) {
        let userping = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || msg.guild.members.cache.get(msg.author)
        const user = msg.mentions.users.first()
        const embed = new MessageEmbed()
            .setTitle(`**REBORN PROJECT**`)
            .setColor('RANDOM')
            .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
            .setDescription('Personal ID: \n' + "<@" + user.id + ">")
            .addFields(
                {name:"Account Type", value:`${msg.content.bot ? 'bot' : 'Human'}`},
                {name:"Roles", value:`${msg.member.roles.cache.size}`},
                {name:"Joined At", value:`${moment(userping.user.joinedAt).format('ddd, MMM Do, YYYY, h:mm a')}`},
                {name:"Created At", value:`${moment(userping.user.createdAt).format('ddd, MMM Do, YYYY, h:mm a')}`}
            )
            .setTimestamp()
            msg.channel.send({ embeds: [embed] })
  }
}