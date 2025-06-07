"use client";

import Image from "next/image";
import cn from "clsx";
import { FC } from "react";
import { PropsWithClassName } from "@/app/types";
import { useTranslations } from "next-intl";

export const Credit: FC<PropsWithClassName> = ({ className }) => {
  const t = useTranslations("Index");

  return (
    <div
      className={cn(
        "flex items-center gap-0 xl:gap-[51px] w-full my-[35px] lg:my-[45px]",
        className,
      )}
      id="credit"
    >
      <div className="max-w-[830px] w-full ml-[-15px] hidden lg:block">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          className="w-full rounded-r-full"
          src="/assets/images/credit__image.jpg"
          alt=""
        />
      </div>
      <div className="container flex flex-col gap-5 sm:gap-[30px] lg:!pl-10 xl:!pl-0 max-w-[791px]">
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#292929] leading-[37px] sm:leading-[54px] max-w-[690px] w-full">
          {t("Credit-text")}
        </h2>
        <ul className="flex flex-col gap-[20px] sm:gap-[40px]">
          <li className="flex gap-5">
            <div className="bg-[#FFDD2D] w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full translate-y-2 lg:translate-y-2.5"></div>
            <p className="w-full font-medium text-base lg:text-lg xl:text-xl leading-[133%] text-[#292929] lg:leading-[133%] max-w-[620px]">
              {t("Credit-text-1")}
            </p>
          </li>
          <li className="flex gap-5">
            <div className="bg-[#FFDD2D] w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full translate-y-2 lg:translate-y-2.5"></div>
            <p className="w-full font-medium text-base lg:text-lg xl:text-xl leading-[133%] text-[#292929] lg:leading-[133%] max-w-[620px]">
              {t("Credit-text-2")}
            </p>
          </li>
          <li className="flex gap-5">
            <div className="bg-[#FFDD2D] w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full translate-y-2 lg:translate-y-2.5"></div>
            <p className="w-full font-medium text-base lg:text-lg xl:text-xl leading-[133%] text-[#292929] lg:leading-[133%] max-w-[620px]">
              {t("Credit-text-3")}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
