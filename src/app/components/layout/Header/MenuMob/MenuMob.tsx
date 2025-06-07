"use client"

import { Socials } from "@/app/components/widgets"
import cn from "clsx"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { Dispatch, FC, SetStateAction } from "react"

type Props = {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const MenuMob: FC<Props> = ({ isOpen, setOpen }) => {
  const t = useTranslations("Index")
  const locale = useLocale()

  const changePage = (pageName: string) => {
    setOpen(false)
  }

  return (
    <div
      className={cn(
        "fixed -left-[150%] h-[calc(100vh-60px)] top-[60px] w-screen bg-white z-[1000] px-6 py-6 ease duration-200 overflow-y-auto",
        {
          "!left-0": isOpen,
        },
      )}
    >
      <div className="flex flex-col gap-5 items-start w-full">
        <Link
          className="text-lg xl:text-2xl font-medium"
          href={`/`}
          onClick={() => changePage(`/`)}
        >
          {t("Main")}
        </Link>

        <Link
          className="text-lg xl:text-2xl font-medium"
          href={`/#about`}
          onClick={() => changePage(`/#about`)}
        >
          {t("About us")}
        </Link>

        <Link
          className="text-lg xl:text-2xl font-medium"
          href={`/kitchens`}
          onClick={() => changePage(`/kitchens`)}
        >
          {t("Kitchens")}
        </Link>
        <Link
          className="text-lg xl:text-2xl font-medium"
          href={`/#questions`}
          onClick={() => changePage(`/#questions`)}
        >
          {t("Cost calculation")}
        </Link>

        {/* <Link className="text-lg xl:text-2xl font-medium" href="/blog">
          Блог
        </Link> */}

        {/* {locale !== "pl" && (
          <Link
            className="text-lg xl:text-2xl font-medium"
            href={`/technique`}
            onClick={() => changePage(`/technique`)}
          >
            {t("Technique")}
          </Link>
        )} */}

        <Link
          className="text-lg xl:text-2xl font-medium"
          href={`/blog`}
          onClick={() => changePage(`/blog`)}
        >
          {t("Blog")}
        </Link>

        {/* <Link className="text-lg xl:text-2xl font-medium" href={`/#steps`}>
          {t("How to order")}
        </Link> */}

        <Link
          className="text-lg xl:text-2xl font-medium"
          href={`/3d-project`}
          onClick={() => changePage(`/d-project`)}
        >
          {t("3d project")}
        </Link>

        {locale !== "pl" && (
          <Link
            className="text-lg xl:text-2xl font-medium"
            href={`/#credit`}
            onClick={() => changePage(`/#credit`)}
          >
            {t("Installment plan")}
          </Link>
        )}
        <Link
          className="text-lg xl:text-2xl font-medium"
          href={`/#promotions`}
          onClick={() => changePage(`/#promotions`)}
        >
          {t("Stocks")}
        </Link>
        <Link
          className="text-lg xl:text-2xl font-medium"
          href={`/contacts`}
          onClick={() => changePage(`/contacts`)}
        >
          {t("Contacts")}
        </Link>
      </div>

      <div className="min-[570px]:hidden mt-5">
        <Socials />
      </div>
    </div>
  )
}
