const { addEmailsToQueue } = require('./src/queueProducer');
require('./src/queueConsumer');

async function main() {
  try {
    await addEmailsToQueue(50);
    console.log('All emails added to queue');
  } catch (error) {
    console.error('Error adding emails to queue:', error);
  }
}

main();