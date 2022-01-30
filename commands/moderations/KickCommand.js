const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderations', []);
  }

async run(client, msg, args) {
    const user = msg.mentions.users.first();
    if(!msg.member.permissions.has("KICK_MEMBERS")) return msg.channel.send("You can't use this command.");
    if(!msg.guild.me.permissions.has("KICK_MEMBERS")) return msg.channel.send("My role does not have the manage channels permission");
        if(user === undefined){
            return msg.reply('You must state someone to kick. `\?kick @user\`');
        } else {
            const member = msg.guild.members.resolve(user);
            if(member){
                member
                    .kick({
                        reason: "Reached 3 consecutive warnings.",
                    })
                    .then(() =>{
                        const kickembed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**Successfully kicked.**`)
                        .addFields(
                            {name:"Username: ", value:`${user.tag}`},
                            {name:"Reason:", value:"`Reached 3 consecutive warnings`"}
                        )
                        .setTimestamp()

                        msg.channel.send({embeds: [kickembed]})
                    })
                    .catch(err => {
                        const cantembed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**I can\'t kick this member!**`)
                        .setTimestamp()
                        console.log(err)
                        msg.channel.send({embeds: [cantembed]})
                    })
            }
        }

  }
}