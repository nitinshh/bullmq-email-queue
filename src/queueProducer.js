const { Queue } = require('bullmq');
const config = require('./config');
const { generateRandomEmail } = require('./emailGenerator');

const emailQueue = new Queue(config.queueName, {
  connection: config.redis
});

async function addEmailsToQueue(count) {
  for (let i = 0; i < count; i++) {
    const email = generateRandomEmail();
    await emailQueue.add('send-email', email);
    console.log(`Added email ${i + 1} to queue`);
  }
}

module.exports = { addEmailsToQueue };