const { Client, Intents, MessageEmbed, Collection } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
require('dotenv').config();
const client = new Client
({ intents: [Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS, 
  Intents.FLAGS.GUILD_MESSAGES, 
  Intents.FLAGS.GUILD_MEMBERS, 
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_VOICE_STATES], 
 partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const { DiscordTogether } = require('discord-together')
client.discordTogether = new DiscordTogether(client);

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test', {useUnifiedTopology: true, useNewUrlParser: true})

const Levels = require("discord.js-leveling");
Levels.setURL("mongodb+srv://reborn:09984646539@reborn.8szbn.mongodb.net/test");
var xpRequired = Levels.xpFor(30);


(async () => {
  client.commands = new Map();
  client.events = new Map();
  prefix = "?";
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
        client.user.setActivity(`${prefix}h to start`, {
            type:"PLAYING",
            status:"ONLINE"
        });
    }
        console.log(`The prefix is ${prefix}`)
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
  }else if(msg.content.toLowerCase().startsWith(`${prefix}level`)){
    const target = msg.mentions.members.first() || msg.author
    const user = await Levels.fetch(target.id, msg.guild.id);
    if(!user) return msg.channel.send(`It seems you don't have any exp gained yet!`);
  
    const levelgained = new MessageEmbed()
    .setDescription(`**${msg.author}** is currently level ${user.level + 1}.`)
    .setColor('RANDOM')

    msg.channel.send({embeds: [levelgained]});
  }else if(msg.content.toLowerCase().startsWith(`${prefix}ranking`)){
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

/* Giveaway Commands */

const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: 'RANDOM',
    reaction: "🎉"
  }
});

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
  console.log(`${member.user.tag} entered giveaway #${giveaway.messageId}`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
  console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageId}`);
});

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
  console.log(`Giveaway #${giveaway.messageId} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
});

/* Weblink blocked */

client.on("messageCreate", message => {
let user = message.author.id
if (message.content.includes("https://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete();
    message.channel.send(`No links here, <@${user}>`)
  }
if (message.content.includes("http://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete();
    message.channel.send(`No links here, <@${user}>`)
  }
if (message.content.includes("www.")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete();
    message.channel.send(`No links here, <@${user}>`)
  }
});

client.on('messageCreate', message => {
  if(message.content.toLowerCase().startsWith(`${prefix}kiss`)) {

    const user = message.mentions.users.first().username;
    if(user === undefined) {
      return message.reply('Are you going to kiss an air? How creepy. `?kiss @user`')
    }

    const kissed = new MessageEmbed()
    .setTitle(message.author.username + " kissed " + user)
    .setImage('https://i.imgur.com/WVSwvm6.gif')
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send({embeds: [kissed]})
  }
});

client.on('messageCreate', message => {
  if(message.content.toLowerCase().startsWith(`${prefix}cuddle`)) {
    const user = message.mentions.users.first().username;
    if(user === undefined) {
      return message.reply('Are you going to cuddle an air? How creepy. `?cuddle @user`')
    }

    const cuddle = new MessageEmbed()
    .setTitle(message.author.username + " cuddle " + user)
    .setImage('https://c.tenor.com/ch1kq7TOxlkAAAAS/anime-cuddle.gif')
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send({embeds: [cuddle]})
  }
});

client.on('messageCreate', message => {
  if(message.content.toLowerCase().startsWith(`${prefix}slap`)) {
    const user = message.mentions.users.first().username;
    if(user === undefined) {
      return message.reply('Are you going to slap an air? How creepy. `?slap @user`')
    }

    const slap = new MessageEmbed()
    .setTitle(message.author.username + " slapped " + user)
    .setImage('https://c.tenor.com/rVXByOZKidMAAAAd/anime-slap.gif')
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send({embeds: [slap]})
  }
});

client.on('messageCreate', message => {
  if(message.content.toLowerCase().startsWith(`${prefix}highfive`)) {
    const user = message.mentions.users.first().username;
    if(user === undefined) {
      return message.reply('Are you going to highfive an air? How creepy. `?highfive @user`')
    }

    const highfive = new MessageEmbed()
    .setTitle(message.author.username + " highfive " + user)
    .setImage('https://c.tenor.com/JBBZ9mQntx8AAAAM/anime-high-five.gif')
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send({embeds: [highfive]})
  }
});

client.on('messageCreate', message => {
  if(message.content.toLowerCase().startsWith(`${prefix}temp`)) {
    const temp = new MessageEmbed()
    .setTitle("Temporary Action Command List")
    .setDescription("`kiss, cuddle, slap, highfive`")
    .setTimestamp()
    .setColor('RANDOM')

    message.reply({embeds: [temp]});
  }
});
