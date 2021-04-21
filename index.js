const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`${bot.user.username} is now online!`);
});

bot.login(/*[token goes here]*/);