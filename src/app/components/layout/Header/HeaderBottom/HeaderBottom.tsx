"use client"

import { LanguageBtn } from "@/app/components/LanguageBtn/LanguageBtn"
import { PropsWithLocale } from "@/app/types"
import cn from "clsx"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FC } from "react"

export const HeaderBottom: FC<PropsWithLocale> = ({ locale }) => {
  const t = useTranslations("Index")
  const _router = useRouter()

  return (
    <div
      className={cn("flex items-center justify-between gap-14 py-2.5", {
        "border-b border-1": true,
      })}
    >
      <div className="flex items-center justify-between gap-8 text-2xl font-medium w-full flex-wrap gap-y-4">
        <Link className="text-sm xl:text-base font-medium" href={`/`}>
          {t("Main")}
        </Link>

        <Link className="text-sm xl:text-base font-medium" href={`/#about`}>
          {t("About us")}
        </Link>

        <Link className="text-sm xl:text-base font-medium" href={`/kitchens`}>
          {t("Kitchens")}
        </Link>
        <Link className="text-sm xl:text-base font-medium" href={`/#questions`}>
          {t("Cost calculation")}
        </Link>

        <Link className="text-sm xl:text-base font-medium" href={`/blog`}>
          {t("Blog")}
        </Link>

        <Link className="text-sm xl:text-base font-medium" href={`/3d-project`}>
          {t("3d project")}
        </Link>

        {locale !== "pl" && (
          <Link className="text-sm xl:text-base font-medium" href={`/#credit`}>
            {t("Installment plan")}
          </Link>
        )}
        <Link
          className="text-sm xl:text-base font-medium"
          href={`/#promotions`}
        >
          {t("Stocks")}
        </Link>
        <Link className="text-sm xl:text-base font-medium" href={`/contacts`}>
          {t("Contacts")}
        </Link>

        {locale === "pl" && (
          <div className="xl:hidden">
            <LanguageBtn />
          </div>
        )}
      </div>
    </div>
  )
}
