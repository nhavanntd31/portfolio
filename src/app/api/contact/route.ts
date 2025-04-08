import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, address, contactName, phone, email, message } = await request.json();
    
    const transporter = nodemailer.createTransport({
        host: process.env.NODE_MAILER_HOST,
        port: Number(process.env.NODE_MAILER_PORT),
        secure: process.env.NODE_MAILER_SECURE === 'true',
        auth: {
            user: process.env.NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASS,
        },
    });

    const mailOptions = {
        from: process.env.NODE_MAILER_FROM,
        to: process.env.MAIL_SEND_TO,
        subject: `Contact Form Submission from ${name}`,
        text: `
Name: ${name}
Address: ${address}
Contact Name: ${contactName}
Phone: ${phone}
Email: ${email}
Message: ${message}
        `,
        replyTo: email,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Error sending email' }, { status: 500 });
    }
}
