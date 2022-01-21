const BaseCommand = require('../../utils/structures/BaseCommand');
const config = require('../../../config.json');
const ms = require('ms');

module.exports = class GstartCommand extends BaseCommand {
  constructor() {
    super('gstart', 'giveaways', []);
  }

async run(client, message, args) {
    const { MessageEmbed } = require('discord.js');

    if (config["Giveaway_Options"].giveawayManagerID) {
     if (!message.member.permissions.has('ADMINISTRATOR') && !message.member.roles.cache.some((r) => r.id === config["Giveaway_Options"].giveawayManagerID)) {
         return message.channel.send(':boom: You need to have the \`ADMINISTRATOR\` permissions to start giveaways.');
     }
    } else {
     if (!message.member.permissions.has('ADMINISTRATOR') && !message.member.roles.cache.some((r) => r.name === "Giveaways")) {
         return message.channel.send(':boom: You need to have the \`ADMINISTRATOR\` permissions to start giveaways.');
     }
    }
    
    let giveawayChannel = message.mentions.channels.first();
    if (!giveawayChannel) {
     return message.channel.send(':boom: Uh oh, I couldn\'t find that channel! Try again!');
    }
    
    let giveawayDuration = args[1];
    if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
     return message.channel.send(':boom: Hm. you haven\'t provided a duration. Can you try again?');
    }
    
    let giveawayNumberWinners = args[2];
    if (isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)) {
     return message.channel.send(':boom: Uh... you haven\'t provided the amount of winners.');
    }
    
    let giveawayPrize = args.slice(3).join(' ');
    if (!giveawayPrize) {
     return message.channel.send(':boom: Oh, it seems like you didn\'t give me a valid prize!');
    }
    if (!config["Giveaway_Options"].showMention && config["Giveaway_Options"].giveawayRoleID && config["Giveaway_Options"].giveawayMention) {
    let user = message.author.id
     giveawayChannel.send(`<@&${config["Giveaway_Options"].giveawayRoleID}>`).then((msg) => msg.delete({ timeout: 1000 }))
     client.giveawaysManager.start(giveawayChannel, {
         duration: ms(giveawayDuration),
         prize: giveawayPrize,
         winnerCount: parseInt(giveawayNumberWinners),
         hostedBy: config["Giveaway_Options"].hostedBy ? message.author : null,
         messages: {
             giveaway: ":tada: **GIVEAWAY** :tada:",
             giveawayEnded: ":tada: **GIVEAWAY ENDED** :tada:",
             timeRemaining: `Time remaining: **${giveawayDuration}**!`,
             inviteToParticipate: "@everyone React with 🎉 to participate!",
             winMessage: `Congratulations, ${giveawayNumberWinners}! You won the **${giveawayPrize}**!`,
             embedFooter: {text: "Giveaways"},
             noWinner: "Not enough entrants to determine a winner!",
             hostedBy: `Hosted by : <@${user}>`,
             winners: "winner(s)",
             endedAt: "Ended at",
             units: {
                 seconds: "seconds",
                 minutes: "minutes",
                 hours: "hours",
                 days: "days",
                 pluralS: false
             }
         }
     });
    
    } else if (config["Giveaway_Options"].showMention && config["Giveaway_Options"].giveawayRoleID && config["Giveaway_Options"].giveawayMention) {
    let user = message.author.id
     client.giveawaysManager.start(giveawayChannel, {
         duration: ms(giveawayDuration),
         prize: giveawayPrize,
         winnerCount: parseInt(giveawayNumberWinners),
         hostedBy: config["Giveaway_Options"].hostedBy ? message.author : null,
         messages: {
             giveaway: (config["Giveaway_Options"].showMention ? `<@&${config["Giveaway_Options"].giveawayRoleID}>\n\n` : "") + ":tada: **GIVEAWAY** :tada:",
             giveawayEnded: (config["Giveaway_Options"].showMention ? `<@&${config["Giveaway_Options"].giveawayRoleID}>\n\n` : "") + ":tada: **GIVEAWAY ENDED** :tada:",
             timeRemaining: `Time remaining: **${giveawayDuration}**!`,
             inviteToParticipate: "@everyone React with 🎉 to participate!",
             winMessage: `Congratulations, ${winnerCount}! You won the **${giveawayPrize}**!`,
             embedFooter: {text: "Giveaways"},
             noWinner: "Not enough entrants to determine a winner!",
             hostedBy: `Hosted by : <@${user}>`,
             winners: "winner(s)",
             endedAt: "Ended at",
             units: {
                 seconds: "seconds",
                 minutes: "minutes",
                 hours: "hours",
                 days: "days",
                 pluralS: false
             }
         }
     });
    
    } else if (!config["Giveaway_Options"].showMention && !config["Giveaway_Options"].giveawayRoleID && config["Giveaway_Options"].giveawayMention) {
     giveawayChannel.send(`@everyone`).then((msg) => msg.delete({ timeout: 1000 }))
     let user = message.author.id
     client.giveawaysManager.start(giveawayChannel, {
         duration: ms(giveawayDuration),
         prize: giveawayPrize,
         winnerCount: parseInt(giveawayNumberWinners),
         hostedBy: config["Giveaway_Options"].hostedBy ? message.author : null,
         messages: {
             giveaway: ":tada: **GIVEAWAY** :tada:",
             giveawayEnded: ":tada: **GIVEAWAY ENDED** :tada:",
             timeRemaining: `Time remaining: **${giveawayDuration}**!`,
             inviteToParticipate: "@everyone React with 🎉 to participate!",
             winMessage: `Congratulations, ${winnerCount}! You won the **${giveawayPrize}**!`,
             embedFooter: {text: "Giveaways"},
             noWinner: "Not enough entrants to determine a winner!",
             hostedBy: `Hosted by : <@${user}>`,
             winners: "winner(s)",
             endedAt: "Ended at",
             units: {
                 seconds: "seconds",
                 minutes: "minutes",
                 hours: "hours",
                 days: "days",
                 pluralS: false
             }
         }
     });
    
    } else if (config["Giveaway_Options"].showMention && !config["Giveaway_Options"].giveawayRoleID && config["Giveaway_Options"].giveawayMention) {
     let user = message.author.id
     client.giveawaysManager.start(giveawayChannel, {
         duration: ms(giveawayDuration),
         prize: giveawayPrize,
         winnerCount: parseInt(giveawayNumberWinners),
         hostedBy: config["Giveaway_Options"].hostedBy ? message.author : null,
         messages: {
             giveaway: (config["Giveaway_Options"].showMention ? `@everyone\n\n` : "") + ":tada: **GIVEAWAY** :tada:",
             giveawayEnded: (config["Giveaway_Options"].showMention ? `@everyone\n\n` : "") + ":tada: **GIVEAWAY ENDED** :tada:",
             timeRemaining: `Time remaining: **${giveawayDuration}**!`,
             inviteToParticipate: "@everyone React with 🎉 to participate!",
             winMessage: `Congratulations, ${winnerCount}! You won the **${giveawayPrize}**!`,
             embedFooter: {text: "Giveaways"},
             noWinner: "Not enough entrants to determine a winner!",
             hostedBy: `Hosted by : <@${user}>`,
             winners: "winner(s)",
             endedAt: "Ended at",
             units: {
                 seconds: "seconds",
                 minutes: "minutes",
                 hours: "hours",
                 days: "days",
                 pluralS: false
             }
         }
     });
    } else if (!config["Giveaway_Options"].giveawayMention) {
     let user = message.author.id
     client.giveawaysManager.start(giveawayChannel, {
         duration: ms(giveawayDuration),
         prize: giveawayPrize,
         winnerCount: parseInt(giveawayNumberWinners),
         hostedBy: config["Giveaway_Options"].hostedBy ? message.author : null,
         messages: {
             giveaway: ":tada: **GIVEAWAY** :tada:",
             giveawayEnded: ":tada: **GIVEAWAY ENDED** :tada:",
             timeRemaining: `Time remaining: **${giveawayDuration}**!`,
             inviteToParticipate: "@everyone React with 🎉 to participate!",
             winMessage: `Congratulations, {winners}! You won the **${giveawayPrize}**!`,
             embedFooter: {text: "Giveaways"},
             noWinner: "Not enough entrants to determine a winner!",
             hostedBy: `Hosted by : <@${user}>`,
             winners: "winner(s)",
             endedAt: "Ended at",
             units: {
                 seconds: "seconds",
                 minutes: "minutes",
                 hours: "hours",
                 days: "days",
                 pluralS: false
             }
         }
     });
    }
    
    
    message.channel.send(`:tada: Done! The giveaway for the \`${giveawayPrize}\` is starting in ${giveawayChannel}!`);
  }
}