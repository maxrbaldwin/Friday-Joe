var env = require('dotenv');

var CronJob = require('cron').CronJob;

env.load();

// @TODO: Want to loop through the directory here and initiate a cron job for each file
var fridayStandUp = new CronJob(require('./jobs/fridayStandUp'));
// var testJob = new CronJob(require('./jobs/testJob'));

console.log('Slack bots running.....');
