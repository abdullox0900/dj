import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, tel, choice, locale } = body;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Create email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Quiz - ${locale === "ru" ? "Новая заявка с опроса" : "New quiz submission"}`,
      html: `
        <h2>${locale === "ru" ? "Новая заявка с опроса" : "New quiz submission"}</h2>
        <p><strong>${locale === "ru" ? "Имя" : "Name"}:</strong> ${name}</p>
        <p><strong>${locale === "ru" ? "Телефон" : "Phone"}:</strong> ${tel}</p>
        <p><strong>${locale === "ru" ? "Выбранный подарок" : "Selected gift"}:</strong> ${choice}</p>
        <p><strong>${locale === "ru" ? "Язык" : "Language"}:</strong> ${locale}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in quiz-callback:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
