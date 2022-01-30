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

//Kizy's Server
/*client.once("ready" , async () => {
  const guild1 = client.guilds.cache.get("935202675333677146");
  setInterval(function() {
    var memberCounts = guild.members.cache.filter(y => !y.user.bot).size;
    var memberCountsChannel = client.channel.cache.get("");
    memberCountsChannel.setName(`Members: ${memberCounts}`);
  }, 1000);
});

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.cache.get('')
  const join = new MessageEmbed()
  .setTitle("Welcome!")
  .setColor('RANDOM')
  .setDescription("<@" + member.id + ">" + " To see other channels. move to <#930335880202293300> to get roles!")
  .setImage('https://gifimage.net/wp-content/uploads/2018/10/anime-gif-welcome.gif')
  .setTimestamp()

  channel.send({embeds: [join]});
});

client.on('guildMemberRemove', member => {
  let channel = member.guild.channels.cache.get('')
  const leave = new MessageEmbed()
  .setTitle("Goodbye!")
  .setColor('RANDOM')
  .setDescription("<@" + member.id + ">" + " Farewell!")
  .setImage('https://media.giphy.com/media/26u4b45b8KlgAB7iM/giphy.gif')
  .setTimestamp()

  channel.send({embeds: [leave]});
}); */

//Level Functions

client.on("messageCreate", async (message) => {
  if(!message.guild) return;
  if(message.author.bot) return;

  const randomAmountOfXp = Math.floor(Math.random() * 29) + 1;
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);

  if(hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send(`**NICE JOB!** ${message.author}, You just leveled up to level **${user.level}**! Cheers!`);

    if(user.level == 2) {
      let role = message.guild.roles.cache.find(role => role.name == "2・Peasant.");
      if(!role) await message.guild.roles.create({
          name: "2・Peasant.",
          color: "#8d99aa",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "2・Peasant.");
      message.member.roles.add(role)
    }

    if(user.level == 5) {
      let role = message.guild.roles.cache.find(role => role.name == "5・Commoner.");
      if(!role) await message.guild.roles.create({
          name: "5・Commoner.",
          color: "#84a1ce",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "5・Commoner.");
      message.member.roles.add(role)
    }

    if(user.level == 10) {
      let role = message.guild.roles.cache.find(role => role.name == "10・Young Hunter.");
      if(!role) await message.guild.roles.create({
          name: "10・Young Hunter.",
          color: "#688dd8",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "10・Young Hunter.");
      message.member.roles.add(role)
    }

    if(user.level == 15) {
      let role = message.guild.roles.cache.find(role => role.name == "15・Veteran Hunter.");
      if(!role) await message.guild.roles.create({
          name: "15・Veteran Hunter.",
          color: "#5e91cf",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "15・Veteran Hunter.");
      message.member.roles.add(role)
    }

    if(user.level == 20) {
      let role = message.guild.roles.cache.find(role => role.name == "20・Warrior");
      if(!role) await message.guild.roles.create({
          name: "20・Warrior",
          color: "#4b7fcf",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "20・Warrior");
      message.member.roles.add(role)
    }

    if(user.level == 25) {
      let role = message.guild.roles.cache.find(role => role.name == "25・Grand Warrior");
      if(!role) await message.guild.roles.create({
          name: "25・Grand Warrior",
          color: "#2d7acc",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "25・Grand Warrior");
      message.member.roles.add(role)
    }

    if(user.level == 30) {
      let role = message.guild.roles.cache.find(role => role.name == "30・Champion");
      if(!role) await message.guild.roles.create({
          name: "30・Champion",
          color: "#4083e4",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "30・Champion");
      message.member.roles.add(role)
    }

    if(user.level == 40) {
      let role = message.guild.roles.cache.find(role => role.name == "40・Demi God.");
      if(!role) await message.guild.roles.create({
          name: "40・Demi God",
          color: "#2961d8",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "40・Demi God");
      message.member.roles.add(role)
    }

    if(user.level == 50) {
      let role = message.guild.roles.cache.find(role => role.name == "50・God");
      if(!role) await message.guild.roles.create({
          name: "50・God",
          color: "#2456be",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "50・God");
      message.member.roles.add(role)
    }

    if(user.level == 60) {
      let role = message.guild.roles.cache.find(role => role.name == "60・Almighty God");
      if(!role) await message.guild.roles.create({
          name: "60・Almighty God",
          color: "#2f48ce",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "60・Almighty God");
      message.member.roles.add(role)
    }

    if(user.level == 70) {
      let role = message.guild.roles.cache.find(role => role.name == "70・Demon God");
      if(!role) await message.guild.roles.create({
          name: "70・Demon God",
          color: "#2e41c2",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "70・Demon God");
      message.member.roles.add(role)
    }

    if(user.level == 80) {
      let role = message.guild.roles.cache.find(role => role.name == "80・Celestial Attendant");
      if(!role) await message.guild.roles.create({
          name: "80・Celestial Attendant",
          color: "#1e37bd",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "80・Celestial Attendant");
      message.member.roles.add(role)
    }

    if(user.level == 90) {
      let role = message.guild.roles.cache.find(role => role.name == "90・Celestial");
      if(!role) await message.guild.roles.create({
          name: "90・Celestial",
          color: "#2221d3",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "90・Celestial");
      message.member.roles.add(role)
    }

    if(user.level == 100) {
      let role = message.guild.roles.cache.find(role => role.name == "100・Grand Celestial");
      if(!role) await message.guild.roles.create({
          name: "100・Grand Celestial",
          color: "#121bc0",
      }).catch(err => message.channel.send(err));
      role = message.guild.roles.cache.find(role => role.name == "100・Grand Celestial");
      message.member.roles.add(role)
    }

  }else if(message.content.toLowerCase().startsWith(`${prefix}level`)){
    const target = message.mentions.members.first() || message.author
    const user = await Levels.fetch(target.id, message.guild.id);
    if(!user) return message.channel.send(`It seems you don't have any exp gained yet!`);
  
    const levelgained = new MessageEmbed()
    .setDescription(`**${message.author}** is currently level ${user.level}.`)
    .setColor('RANDOM')

    message.channel.send({embeds: [levelgained]});
  }else if(message.content.toLowerCase().startsWith(`${prefix}ranking`)){
      const Leaderboard = await Levels.fetchLeaderboard(message.guild.id, 10);
      if (Leaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

      const leaderboard= await Levels.computeLeaderboard(client, Leaderboard, true);
      const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);
      const leaderboardembed = new MessageEmbed()
      .setTitle("**LEADERBOARD**")
      .setDescription(`${lb.join("\n\n")}`)
      .setColor('RANDOM')
      .setTimestamp()

      message.channel.send({embeds: [leaderboardembed]});
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
if (message.content.includes("https://discord.gg")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete();
    message.channel.send(`No links here, <@${user}>`)
  }
if (message.content.includes("http://discord.gg")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete();
    message.channel.send(`No links here, <@${user}>`)
  }
if (message.content.includes("www.discord.gg")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete();
    message.channel.send(`No links here, <@${user}>`)
  }
if (message.content.includes("www.discord.gift")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete();
    message.channel.send(`No links here, <@${user}>`)
}
if (message.content.includes("https://discord.gift")) {
  console.log("deleted " + message.content + " from " + message.author)
  message.delete();
  message.channel.send(`No links here, <@${user}>`)
}
if (message.content.includes("http://discord.gift")) {
  console.log("deleted " + message.content + " from " + message.author)
  message.delete();
  message.channel.send(`No links here, <@${user}>`)
}

});

/*client.on('messageCreate', message => {
  if(message.content.toLowerCase().startsWith(`${prefix}role`)) {
    const embed = new MessageEmbed()
    .setTitle('ROLE LIST #1')
    .setDescription("**Get your Roles here to access some hidden channels**\n1️⃣: EPIC RPG\n2️⃣: POKEMEOW\n3️⃣: POKETWO\n4️⃣: DANK MEMER\n5️⃣: SLOT BOT\n6️⃣: ONE PIECE\n7️⃣: OWO\n\n**Extra roles for hidden channels**\n8️⃣: GIVEAWAYS\n9️⃣: REBORN TESTERS\n🔟: EPIC GUIDE")
    .setTimestamp()
    .setColor('RANDOM')

    message.channel.send({embeds: [embed]});
  }
})*/