"use client";

import Image from "next/image";
import styles from "./DesignerVisit.module.css";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Button, TextField } from "../ui";
import { PropsWithClassName } from "@/app/types";
import cn from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { FaGift } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { hashData } from "@/app/utils";

export const DesignerVisit: FC<PropsWithClassName> = ({ className }) => {
  const [tel, setTel] = useState("");
  const [isLoading, setLoading] = useState(false);
  const t = useTranslations("Index");
  const router = useRouter();
  const locale = useLocale();

  const changeTelHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value);
  };

  const formHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!tel) {
      return toast.error(t("Fill in all the fields!"));
    }

    if (tel.includes("_"))
      return toast.error(t("Enter the phone number completely!"));

    setLoading(true);

    await axios
      .post("/api/designer", {
        tel,
        name,
        locale,
      })
      .then(async () => {
        // toast.success(t("It's been sent!"));

        router.push(`/form-finish`);
      })
      .catch(() => {
        toast.error(t("Mistake Try again later"));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className="container relative z-30">
        <h2 className="max-w-[800px] w-full mb-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
          {t("Designer visit title")}
        </h2>
        <div className="max-w-[931px] z-10 w-full flex flex-col lg:flex-row lg:items-center gap-12">
          <form
            className="flex flex-col max-w-full sm:max-w-[440px] w-full"
            onSubmit={formHandler}
          >
            <h6 className="font-medium text-base text-black mb-3">
              {t("Phone number")}
            </h6>
            <TextField
              type="tel"
              onChange={changeTelHandler}
              value={tel}
              className={styles.input}
            />

            <Button
              className={styles.button}
              title={
                isLoading
                  ? t("Loading")
                  : t("Call the designer") + " " + t("and get gift")
              }
              type="submit"
              disabled={isLoading}
              icon={
                <FaGift
                  className="inline -translate-y-[1px] ml-2"
                  color="#f97316"
                />
              }
            />
          </form>
          <div className="flex flex-col gap-[36px] sm:gap-[25px]">
            <p className="flex flex-col font-bold text-xl lg:text-2xl text-[#000]">
              {t("Don't want to wait?")}
              <span className="font-medium">{t("Call")}</span>
            </p>
            <div className="flex flex-col gap-[3px]">
              <div className="flex items-center gap-[11px]">
                <div className={styles.greenbadge}></div>
                <p className="font-normal text-xl text-black">
                  {t("pn")}-{locale === "ru" ? t("vs") : t("sb")}:{" "}
                  {locale === "ru" ? "09:00–21:00" : "09:00–20:00"}
                </p>
              </div>
              <p className="font-extrabold text-2xl sm:text-3xl text-[#292929]">
                {t("tel")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[388px] z-10 absolute bottom-0 hidden xl:block h-full right-[1%] 2xl:right-[14%]">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/assets/images/phone__call-designer.png"
          alt="phone"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
