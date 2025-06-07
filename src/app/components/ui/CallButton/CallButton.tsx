"use client";

import { useTranslations } from "next-intl";
import { FiPhoneCall } from "react-icons/fi";

export const CallButton = () => {
  const t = useTranslations("Index");

  return (
    <div className="fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-50 lg:hidden">
      <a
        className="relative quick-call-wrapper rounded-full w-[75px] h-[75px] lg:w-16 lg:h-16 bg-green-500 flex justify-center items-center"
        href={`tel:${t("telLink")}`}
      >
        <FiPhoneCall size={24} color="#fff" />
      </a>
    </div>
  );
};
