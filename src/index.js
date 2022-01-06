
const { Client, Intents, MessageEmbed } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
require('dotenv').config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_VOICE_STATES], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = process.env.DISCORD_BOT_PREFIX;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();

let ver = process.env.DISCORD_BOT_TOKEN;

client.once("ready", async ()=> {
    const guild = client.guilds.cache.get("923403835085570068");
    setInterval(function(){
        var memberCount = guild.members.cache.filter(x => !x.user.bot).size;
        var memberCountChannel = client.channels.cache.get("925252244415316008");
        memberCountChannel.setName(`Total of ${memberCount} members!`);
    }, 1000);
    if(ver === "production") {
        client.user.setActivity(`in code land`, {type: "PLAYING"});
    }else{
        client.user.setActivity(`over ${client.guilds.cache.size} server(s)`, {
            type:"WATCHING",
            status:"IDLE"
        });
    }
        console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.cache.get('925279083594649680')
  const join = new MessageEmbed()
  .setTitle("Welcome!")
  .setColor('RANDOM')
  .setDescription("<@" + member.id + ">" + " To see other channels. move to <#925208268148703262> to see rules!")
  .setImage('https://gifimage.net/wp-content/uploads/2018/10/anime-gif-welcome.gif')
  .setTimestamp()

  channel.send({embeds: [join]});
});

client.on('guildMemberRemove', member => {
  let channel = member.guild.channels.cache.get('925290847082278963')
  const leave = new MessageEmbed()
  .setTitle("Goodbye!")
  .setColor('RANDOM')
  .setDescription("<@" + member.id + ">" + " Farewell!")
  .setImage('https://media.giphy.com/media/26u4b45b8KlgAB7iM/giphy.gif')
  .setTimestamp()

  channel.send({embeds: [leave]});
})

