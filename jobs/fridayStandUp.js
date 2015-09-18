var SlackBot = require('slackbots');

// Bot that performs the task. Registered with slack @ https://nytimes.slack.com/services/new/bot
var bot = new SlackBot({
  token: process.env.slack_token,
  name: 'Friday Joe'
});

// The task this bot does
var fridayStandUpTask = function(){
  var message = "@here What is everyone up to on this Friday morning?";
  bot.postMessageToChannel(process.env.channel, message);
};

// This bot runs every friday(5) at 11:45am
module.exports = {
  cronTime: '00 45 11 * * 5',
  onTick: fridayStandUpTask,
  start: true,
  timeZone: 'America/New_York'
};
