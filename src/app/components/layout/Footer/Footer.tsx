"use client"

import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Footer.module.css"

export const Footer = () => {
  const t = useTranslations("Index")
  const locale = useLocale()
  const pathname = usePathname()

  if (pathname.includes("quiz-finish") || pathname.includes("form-finish")) {
    return
  }

  return (
    <footer className="pt-0 sm:pt-[40px]">
      <div className="container">
        <div className={styles.footer__container}>
          <Link className="self-center sm:self-start" href="/">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/assets/images/footer__logo.png"
              alt="footer__logo"
              className="w-[250px] lg:max-w-[220px] lg:w-full"
            />
          </Link>
          <div className="flex flex-col gap-8 justify-between max-w-full lg:max-w-[730px] xl:max-w-[833px] w-full sm:flex-row sm:gap-0">
            <div className="flex flex-col gap-[18px] sm:gap-[30px] max-w-full sm:max-w-[363px]  w-full">
              <h4 className={styles.ul__title}>{t("Navigation")}</h4>
              <nav className={styles.navigation__nav}>
                <ul className="w-full flex flex-col gap-7">
                  <li className={styles.ul__li}>
                    <Link href={`/`}>{t("Main")}</Link>
                  </li>
                  <li className={styles.ul__li}>
                    <Link href={`/#about`}>{t("About us")}</Link>
                  </li>
                  <li className={styles.ul__li}>
                    <Link href={`/kitchens`}>{t("Kitchens")}</Link>
                  </li>
                  <li className={styles.ul__li}>
                    <Link href={`/#questions`}>{t("Cost calculation")}</Link>
                  </li>
                  <li className={styles.ul__li}>
                    <Link href={`/#promotions`}>{t("Stocks")}</Link>
                  </li>
                </ul>
                <ul className="w-full flex flex-col gap-7 ml-auto max-w-[139px]">
                  {/* {locale !== "pl" && (
                    <li className={styles.ul__li}>
                      <Link href={`/technique`}>{t("Technique")}</Link>
                    </li>
                  )} */}
                  <li className={styles.ul__li}>
                    <Link href={`/blog`}>{t("Blog")}</Link>
                  </li>

                  {/* <li className={styles.ul__li}>
                    <Link href={`/#steps`}>{t("How to order")}</Link>
                  </li> */}

                  <li className={styles.ul__li}>
                    <Link href={`/3d-project`}>{t("3d project")}</Link>
                  </li>

                  {locale !== "pl" && (
                    <li className={styles.ul__li}>
                      <Link href={`/#credit`}>{t("Installment plan")}</Link>
                    </li>
                  )}
                  <li className={styles.ul__li}>
                    <Link href={`/contacts`}>{t("Contacts")}</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-[18px] sm:gap-[30px] max-w-[244px] w-full">
              <h4 className={styles.ul__title}>{t("Contacts")}</h4>
              <ul className="flex flex-col gap-5">
                <li>
                  <div className="flex items-center gap-[10px]">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/assets/images/telephone-call.svg"
                      alt="telephone-call"
                      className="h-3 w-3"
                    />
                    <h6 className="font-normal text-sm">
                      {t("Contact phone number")}:
                    </h6>
                  </div>
                  <a
                    className="font-medium text-base"
                    href={`tel:${t("telLink")}`}
                    id="footer-tel"
                  >
                    {t("tel")}
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-[10px]">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/assets/images/clock.svg"
                      alt="clock"
                      className="h-3 w-3"
                    />
                    <h6 className="font-normal text-sm">
                      {t("Working hours")}:
                    </h6>
                  </div>
                  <p className="font-medium text-base">
                    {t("pn")}-{locale === "ru" ? t("vs") : t("sb")}:{" "}
                    {locale === "ru" ? "09:00–21:00" : "09:00–20:00"}
                  </p>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center gap-[10px]">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/assets/images/email.svg"
                      alt="email"
                      className="h-3 w-3"
                    />
                    <h6 className="font-normal text-sm">Email:</h6>
                  </div>
                  <a
                    className="font-medium text-base"
                    href="mailto:drkitchen.by@gmail.com"
                    id="footer-email"
                  >
                    drkitchen.by@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center pt-[20px] pb-[20px] sm:pb-[23px] sm:pt-[18px] font-normal text-sm sm:text-base">
          {t("All rights reserved")}. 2024
        </p>
      </div>
    </footer>
  )
}
