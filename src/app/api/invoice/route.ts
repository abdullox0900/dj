import { bot } from "@/app/core/telegram";
import { createTransport } from "nodemailer";

const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body) return;

    if (!body.tel) {
      return new Response(
        JSON.stringify({ message: "Введите номер телефона!" }),
        {
          status: 400,
        },
      );
    }

    const text = `
        Просчёт.

        Телефон: ${body.tel}
      `;

    await bot.sendMessage(CHAT_ID as string, text);

    const transporter = createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_SEND_EMAIL,
      subject: "Новая заявка",
      text: text,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    return new Response("Успешно", {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response("Ошибка сервера", {
      status: 500,
    });
  }
}
