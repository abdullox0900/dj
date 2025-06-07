"use client";

import { useAppDispatch } from "@/app/lib/hooks";
import { PropsWithClassName } from "@/app/types";
import cn from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { Socials } from "../../widgets";
import { MenuMob } from "../Header/MenuMob/MenuMob";

export const HeaderMob: FC<PropsWithClassName> = ({ className }) => {
  const [isOpen, setOpen] = useState(false);
  const t = useTranslations("Index");
  const dispatch = useAppDispatch();

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const mainElement = document.querySelector("main");

    if (isOpen) {
      document.body.style.overflowY = "hidden";
      if (mainElement) {
        mainElement.style.overflowY = "hidden";
      }
    } else {
      document.body.style.overflowY = "auto";

      if (mainElement) {
        mainElement.style.overflowY = "auto";
      }
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          "flex justify-between items-center bg-white py-1  w-full",
          className,
        )}
      >
        <div className="flex flex-col items-start gap-2.5">
          <Link href="/">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/assets/images/footer__logo.png"
              alt="logo"
              className="w-[129px]"
            />
          </Link>
          <a
            className="text-sm font-semibold"
            href={`tel:${t("telLink")}`}
            id="header-tel"
          >
            {t("tel")}
          </a>
        </div>
        <Socials
          className="[&>a]:!w-9 [&>a]:!h-9 min-[380px]:[&>a]:!w-10 min-[380px]:[&>a]:!h-10 [&>a>svg]:w-4 [&>a>svg]:h-4 min-[380px]:[&>a>svg]:w-5 min-[380px]:[&>a>svg]:h-5"
          withoutInstagram={true}
        />

        <div className="flex items-center gap-4">
          <svg
            className="cursor-pointer ml-1"
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            onClick={toggleOpen}
          >
            <rect width="21" height="3" rx="1.5" fill="#FFD855" />
            <rect y="8" width="21" height="3" rx="1.5" fill="#FFD855" />
            <rect y="16" width="21" height="3" rx="1.5" fill="#FFD855" />
          </svg>
        </div>
      </div>

      <MenuMob isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};
