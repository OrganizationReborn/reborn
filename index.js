const { Client, Intents, MessageEmbed } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
require('dotenv').config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_VOICE_STATES], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test', {useUnifiedTopology: true, useNewUrlParser: true})

const Levels = require("discord.js-leveling");
Levels.setURL("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");
var xpRequired = Levels.xpFor(30);


(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = "?";
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();

let ver = process.env.DISCORD_BOT_TOKEN;

client.once("ready", async ()=> {
    const guild = client.guilds.cache.get("780975023220850688");
    setInterval(function(){
        var memberCount = guild.members.cache.filter(x => !x.user.bot).size;
        var memberCountChannel = client.channels.cache.get("930335274448334919");
        memberCountChannel.setName(`Total of ${memberCount} members!`);
    }, 1000);
    if(ver === "production") {
        client.user.setActivity(`in code land`, {type: "PLAYING"});
    }else{
        client.user.setActivity(`${client.prefix}h to start`, {
            type:"PLAYING",
            status:"ONLINE"
        });
    }
        console.log(`The prefix is ${client.prefix}`)
});

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.cache.get('930334905961947186')
  const join = new MessageEmbed()
  .setTitle("Welcome!")
  .setColor('RANDOM')
  .setDescription("<@" + member.id + ">" + " To see other channels. move to <#930335880202293300> to get roles!")
  .setImage('https://gifimage.net/wp-content/uploads/2018/10/anime-gif-welcome.gif')
  .setTimestamp()

  channel.send({embeds: [join]});
});

client.on('guildMemberRemove', member => {
  let channel = member.guild.channels.cache.get('930334925981364275')
  const leave = new MessageEmbed()
  .setTitle("Goodbye!")
  .setColor('RANDOM')
  .setDescription("<@" + member.id + ">" + " Farewell!")
  .setImage('https://media.giphy.com/media/26u4b45b8KlgAB7iM/giphy.gif')
  .setTimestamp()

  channel.send({embeds: [leave]});
});

client.on("messageCreate", async (msg) => {
  if(!msg.guild) return;
  if(msg.author.bot) return;
  let user = msg.author;

  const requiredXp = Levels.xpFor(parseInt(user.level) + 1)
  const randomAmountOfXp = Math.floor(Math.random() * 29) + 1;
  const hasLeveledUp = await Levels.appendXp(msg.author.id, msg.guild.id, randomAmountOfXp);

  if(hasLeveledUp) {
    const user = await Levels.fetch(msg.author.id, msg.guild.id);
    const levelEmbed = new MessageEmbed()
    .setDescription(`**NICE JOB!** ${msg.author}, You just leveled up to level **${user.level + 1}**! Cheers!`)
    .setColor('RANDOM')
    msg.channel.send({embeds: [levelEmbed]});
  }else if(msg.content.toLowerCase().startsWith(`${client.prefix}level`)){
    const target = msg.mentions.members.first() || msg.author
    const user = await Levels.fetch(target.id, msg.guild.id);
    if(!user) return msg.channel.send(`It seems you don't have any exp gained yet!`);
  
    const levelgained = new MessageEmbed()
    .setDescription(`**${msg.author}** is currently level ${user.level + 1}.`)
    .setColor('RANDOM')

    msg.channel.send({embeds: [levelgained]});
  }else if(msg.content.toLowerCase().startsWith(`${client.prefix}leaderboard`)){
      const Leaderboard = await Levels.fetchLeaderboard(msg.guild.id, 10);
      if (Leaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

      const leaderboard= await Levels.computeLeaderboard(client, Leaderboard, true);
      const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level + 1}\nXP: ${e.xp.toLocaleString()}`);
      const leaderboardembed = new MessageEmbed()
      .setTitle("**LEADERBOARD**")
      .setDescription(`${lb.join("\n\n")}`)
      .setColor('RANDOM')
      .setTimestamp()

      msg.channel.send({embeds: [leaderboardembed]});
  }
});