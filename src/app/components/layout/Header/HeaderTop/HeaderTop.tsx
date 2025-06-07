"use client";

import { LanguageBtn } from "@/app/components/LanguageBtn/LanguageBtn";
import { Button } from "@/app/components/ui";
import { Socials } from "@/app/components/widgets";
import { setOpenCallbackModal } from "@/app/lib/features/main/mainSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import { PropsWithLocale } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import cn from "clsx";

export const HeaderTop: FC<PropsWithLocale> = ({ locale }) => {
  const dispatch = useAppDispatch();
  const t = useTranslations("Index");
  // const [showFixed, setShowFixed] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth < 1024) return;

  //   const scrollHandler = () => {
  //     setShowFixed(window.scrollY > 400);
  //   };

  //   window.addEventListener("scroll", scrollHandler);

  //   return () => window.removeEventListener("scroll", scrollHandler);
  // }, []);

  return (
    <div>
      <div
        className={cn(
          "flex items-center justify-between py-3 border-b border-gray-1/20",
        )}
      >
        <Link href="/">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/assets/images/footer__logo.png"
            alt="footer__logo"
            className="max-w-[180px] lg:max-w-[220px] w-full"
          />
        </Link>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clipPath="url(#clip0_227_81)">
                <path
                  d="M7 0C3.14005 0 0 3.14005 0 7C0 10.86 3.14005 14 7 14C10.86 14 14 10.86 14 7C14 3.14005 10.86 0 7 0ZM10.3291 10.6207C10.2153 10.7345 10.066 10.7917 9.9167 10.7917C9.76738 10.7917 9.61795 10.7345 9.5043 10.6207L6.5876 7.7041C6.47791 7.59505 6.4167 7.44679 6.4167 7.2917V3.5C6.4167 3.17743 6.67796 2.9167 7 2.9167C7.32204 2.9167 7.5833 3.17743 7.5833 3.5V7.0502L10.3291 9.7959C10.5571 10.024 10.5571 10.3927 10.3291 10.6207Z"
                  fill="#FFDD2D"
                />
              </g>
              <defs>
                <clipPath id="clip0_227_81">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-sm">{t("Working hours")}:</p>
          </div>

          <p className="text-base font-medium">
            {t("pn")}-{locale === "ru" ? t("vs") : t("sb")}:{" "}
            {locale === "ru" ? "09:00–21:00" : "09:00–20:00"}
          </p>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-1.5 min-w-max">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <g clipPath="url(#clip0_227_75)">
                  <path
                    d="M0.382079 5.93881C0.134748 5.27072 -0.0443546 4.58843 0.00966034 3.86349C0.0437751 3.41716 0.211506 3.03621 0.538439 2.72349C0.8938 2.38803 1.22926 2.03551 1.57894 1.69436C2.0338 1.24519 2.60522 1.24803 3.06009 1.69436C3.34153 1.97013 3.62014 2.25157 3.89874 2.53302C4.16881 2.80309 4.44173 3.07317 4.71181 3.34609C5.18657 3.82653 5.18941 4.38659 4.71465 4.86419C4.3735 5.20534 4.0352 5.54933 3.68836 5.88479C3.59739 5.97292 3.58886 6.04684 3.63719 6.15771C3.86462 6.70354 4.1944 7.18968 4.56398 7.64454C5.30881 8.55995 6.15031 9.37302 7.15385 10.0013C7.36991 10.1349 7.60587 10.2344 7.83046 10.3567C7.94702 10.4192 8.02378 10.3993 8.11759 10.3026C8.4559 9.95297 8.80273 9.60898 9.14956 9.26499C9.60443 8.81581 10.173 8.81297 10.6279 9.26499C11.1851 9.81651 11.7394 10.3709 12.291 10.9281C12.7544 11.3943 12.7515 11.9657 12.2853 12.4348C11.9697 12.7532 11.6371 13.0546 11.3414 13.3872C10.9093 13.8705 10.3635 14.0297 9.74373 13.9956C8.83969 13.9472 8.00672 13.6459 7.20218 13.2564C5.41684 12.3893 3.89305 11.1868 2.61659 9.66868C1.67275 8.5429 0.8938 7.32045 0.382079 5.93881ZM13.9995 6.95656C13.9995 3.1215 10.878 0 7.04298 0V1.32479C10.1474 1.32479 12.6748 3.85212 12.6748 6.95656H13.9995ZM10.1901 6.95656H11.5149C11.5149 4.49177 9.50777 2.48469 7.04298 2.48469V3.80948C7.88448 3.80948 8.6748 4.13641 9.26897 4.73058C9.86313 5.32474 10.1901 6.11506 10.1901 6.95656Z"
                    fill="#FFDD2D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_227_75">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-sm">{t("Contact phone number")}:</p>
            </div>

            <a
              className="text-base font-semibold"
              href={`tel:${t("telLink")}`}
              id="header-tel"
            >
              {t("tel")}
            </a>
          </div>

          <Button
            className="max-w-[238px] w-full !text-sm"
            title={t("Order a call")}
            onClick={() => dispatch(setOpenCallbackModal(true))}
          />

          <div className="flex items-center gap-6">
            <Socials />

            {/* {locale === "pl" && (
              <div className="hidden xl:block">
                <LanguageBtn />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
