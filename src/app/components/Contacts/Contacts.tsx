"use client";

import { YMaps, Map } from "@pbe/react-yandex-maps";
import styles from "./Contacts.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Contacts = () => {
  const t = useTranslations("Index");

  return (
    <div className="container !mb-[70px] sm:!mb-[90px]">
      <h2 className={styles.heading}>{t("Contacts")}</h2>
      <div className="flex max-w-[1400px] justify-between w-full gap-[30px] flex-col 2xl:flex-row">
        <ul className="max-w-full 2xl:max-w-[334px] w-full flex flex-col">
          <li className="flex gap-[25px] items-start pb-[30px] border-b border-[#909090]">
            <img src="/assets/images/contacts/telephone.svg" alt="telephone" />
            <div className="flex flex-col gap-[11px]">
              <p className={styles.li__title}>{t("Phone")}</p>
              <p className={styles.li__desc}>{t("tel")}</p>
            </div>
          </li>
          <li className="flex gap-[25px] items-start py-[30px] border-b border-[#909090]">
            <img src="/assets/images/contacts/clock.svg" alt="clock" />
            <div className="flex flex-col gap-[11px]">
              <p className={styles.li__title}>{t("Working hours")}</p>
              <p className={styles.li__desc}>ПН-ВС: 09:00–21:00</p>
            </div>
          </li>
          <li className="gap-[25px] items-start py-[30px] border-b border-[#909090] hidden sm:flex">
            <img src="/assets/images/contacts/pin.svg" alt="pin" />
            <div className="flex flex-col gap-[11px]">
              <p className={styles.li__title}>{t("Address")}</p>
              <p className={styles.li__desc}>{t("Minsk Kalinovskiy str. 3")}</p>
            </div>
          </li>
        </ul>
        <div className="flex flex-col max-w-full 2xl:max-w-[1036px] w-full gap-[30px] sm:gap-[49px]">
          <ul className="grid grid-cols-4 sm:grid-cols-9 gap-4 self-start sm:self-end">
            <Link href={"/"} className="hidden sm:block">
              <img src="/assets/images/contacts/viber.svg" alt="viber" />
            </Link>
            <Link href={"/"}>
              <img src="/assets/images/contacts/telegram.svg" alt="telegram" />
            </Link>
            <Link href={"/"}>
              <img src="/assets/images/contacts/whatsup.svg" alt="whatsup" />
            </Link>
            <Link href={"/"}>
              <img src="/assets/images/contacts/youtube.svg" alt="youtube" />
            </Link>
            <Link href={"/"}>
              <img src="/assets/images/contacts/inst.svg" alt="inst" />
            </Link>
            <Link href={"/"}>
              <img src="/assets/images/contacts/vk.svg" alt="vk" />
            </Link>
            <Link href={"/"}>
              <img src="/assets/images/contacts/ok.svg" alt="ok" />
            </Link>
            <Link href={"/"}>
              <img src="/assets/images/contacts/tiktok.svg" alt="tiktok" />
            </Link>
            <Link href={"/"}>
              <img src="/assets/images/contacts/dzen.svg" alt="dzen" />
            </Link>
          </ul>
          <YMaps>
            <Map
              className="h-[624px] w-full rounded-[20px] overflow-hidden"
              defaultState={{ center: [53.949503, 27.618928], zoom: 17 }}
            />
          </YMaps>
        </div>
        <div className="gap-[25px] items-start pb-[30px] sm:py-[30px] border-b border-[#909090] flex sm:hidden">
          <img src="/assets/images/contacts/telephone.svg" alt="telephone" />
          <div className="flex flex-col gap-[11px]">
            <p className={styles.li__title}>{t("Address")}</p>
            <p className={styles.li__desc}>{t("Minsk, Kalinovskiy str., 3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
