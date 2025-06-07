"use client";

import { PropsWithLocale } from "@/app/types";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { HeaderMob } from "..";
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";
import { HeaderTop } from "./HeaderTop/HeaderTop";

export const Header: FC<PropsWithLocale> = ({ locale }) => {
  const pathname = usePathname();

  if (pathname.includes("quiz-finish") || pathname.includes("form-finish")) {
    return;
  }

  return (
    <div
      className="h-[65px] lg:h-auto bg-white z-[100] sticky top-0 border-b border-1 lg:border-none flex items-center lg:block"
      id="header"
    >
      <div className="container">
        <div className="hidden lg:block">
          <HeaderTop locale={locale} />
          <HeaderBottom locale={locale} />
        </div>

        <HeaderMob className="block lg:hidden" />
      </div>
    </div>
  );
};
