import { hashData } from "@/app/utils/hashData";
import axios from "axios";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const {
    name,
    file,
    tel,
    locale,
  }: {
    name: string;
    file: {
      content: string;
      name: string;
      type: string;
    };
    tel: string;
    locale: string;
  } = await req.json();

  const fileBlob = Buffer.from(file.content, "base64");
  const file_ = new File([fileBlob], file.name, {
    type: file.type,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  {
    const tgChatId = process.env.NEXT_PUBLIC_CHAT_ID as string;
    {
      if (file) {
        const tgFormData = new FormData();
        tgFormData.append("chat_id", tgChatId);
        tgFormData.append("document", file_);
        await axios.post(
          `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendDocument`,
          tgFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
      }
    }

    {
      const tgFormDataMessage = new FormData();

      tgFormDataMessage.append("chat_id", tgChatId);
      tgFormDataMessage.append(
        "text",
        `
        Проект на просчет.

        Телефон: ${tel}, 
        Имя: ${name}
      `,
      );
      await axios.post(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`,
        tgFormDataMessage,
      );
    }
  }

  await axios.post(
    `https://graph.facebook.com/v12.0/${process.env.NEXT_PUBLIC_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_MARKER}`,
    {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(new Date().getTime() / 1000),
          user_data: {
            ph: hashData(tel),
            fn: hashData(name),
            country: locale === "ru" ? hashData("BY") : hashData("PL"),
          },
          action_source: "website",
        },
      ],
    },
  );

  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_SEND_EMAIL,
      subject: "Проект на просчёт",
      text: `Имя: ${name}\nТелефон: ${tel}`,
      attachments: file
        ? [
            {
              filename: file.name,
              content: file.content,
              encoding: "base64",
              contentType: file.type,
            },
          ]
        : [],
    });

    return new Response("Успешно отправлено!", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Ошибка сервера", {
      status: 500,
    });
  }
}
