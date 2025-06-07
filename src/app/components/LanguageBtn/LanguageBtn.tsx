"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LanguageBtn = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    // <Link
    //   className="w-12 min-w-11 h-11 rounded flex justify-center items-center bg-gray-100 hover:bg-gray-200 ease-linear duration-200"
    //   href={`/${locale === "ru" ? "pl" : "ru"}/${pathname.slice(3)}`}
    // >
    //   {/* <Image
    //     className="cursor-pointer h-auto w-8 min-w-8 object-contain"
    //     src={
    //       locale === "ru"
    //         ? "/assets/images/languages/pl.png"
    //         : "/assets/images/languages/ru.png"
    //     }
    //     alt="Language"
    //     width={24}
    //     height={24}
    //   /> */}

    //   {locale === "ru" ? "PL" : "RU"}
    // </Link>

    <div className="flex items-center gap-1 text-inherit text-sm xl:text-base font-medium">
      <a href={`https://drkitchen.by`}>RU</a> /{" "}
      <a href={`https://drkitchen.pl`}>PL</a>
    </div>
  );
};
