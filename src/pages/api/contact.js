import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, phone, subject, message } = req.body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // e.g., smtp.gmail.com
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER, // Your email
            pass: process.env.SMTP_PASS, // Your password or app password
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'shariar.ayon128@gmail.com', // Your receiving email
            subject: `New Message: ${subject}`,
            html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        return res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ error: 'Failed to send email.' });
    }
}
