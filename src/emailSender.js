async function sendEmail({ to, subject, body }) {
    // Simulate email sending with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Simulated email sent to ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
  }
  
  module.exports = { sendEmail };