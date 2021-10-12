import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API_URL } = process.env;

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: SMTP_USER,
      to,
      subject: `Activation account at ${API_URL}`,
      text: '',
      html: `
        <div>
          <h3>To activate your account at SWAPI APP please click on link: <a href="${link}">${link}</a></h3>
        </div>
      `,
    });
  }
}

export default new EmailService();
