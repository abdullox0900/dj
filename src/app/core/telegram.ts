import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.NEXT_PUBLIC_TOKEN;

export const bot = new TelegramBot(TOKEN as string);
