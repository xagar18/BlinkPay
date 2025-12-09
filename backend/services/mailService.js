import nodemailer from 'nodemailer';

async function sendEmail(to, subject, text) {
  // Create a transporter object using SMTP transport
  var transport = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.MAILTRAP_SENDEREMAIL,
    to,
    subject,
    text,
  };
  try {
    await transport.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email sending failed');
  }
}
export default sendEmail;
