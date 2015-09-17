var SlackBot = require('slackbots');

// Bot that performs the task. Registered with slack @ https://nytimes.slack.com/services/new/bot
var bot = new SlackBot({
  token: process.env.slack_token,
  name: 'Friday Joe'
});

// The task this bot does
var testTask = function(){
  var message = "What is everyone up to on this Friday morning?";
  bot.postMessageToUser('max.baldwin', message);
};

// This bot runs every minute
module.exports = {
  cronTime: '00 */1 * * * *',
  onTick: testTask,
  start: true,
  timeZone: 'America/New_York'
};
