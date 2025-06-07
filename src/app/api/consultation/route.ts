import { bot } from "@/app/core/telegram";
import { hashData } from "@/app/utils";
import axios from "axios";
import { createTransport } from "nodemailer";

const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body) return;

    if (!body.tel || !body.name) {
      return new Response(JSON.stringify({ message: "Заполните все поля!" }), {
        status: 400,
      });
    }

    const text = `
        Консультация.

        Телефон: ${body.tel}
        Имя: ${body.name}
      `;

    await bot.sendMessage(CHAT_ID as string, text);

    await axios.post(
      `https://graph.facebook.com/v12.0/${process.env.NEXT_PUBLIC_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_MARKER}`,
      {
        data: [
          {
            event_name: "Lead",
            event_time: Math.floor(new Date().getTime() / 1000),
            user_data: {
              ph: hashData(body.tel),
              fn: hashData(body.name),
              country: body.locale === "ru" ? hashData("BY") : hashData("PL"),
            },
            action_source: "website",
          },
        ],
      },
    );

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
