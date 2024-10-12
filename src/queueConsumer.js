const { Worker } = require('bullmq');
const config = require('./config');
const { sendEmail } = require('./emailSender');

const worker = new Worker(config.queueName, async (job) => {
  console.log(`Processing job ${job.id}`);
  await sendEmail(job.data);
}, { connection: config.redis });

worker.on('completed', (job) => {
  console.log(`Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
  console.error(`Job ${job.id} failed:`, err);
});

module.exports = { worker };