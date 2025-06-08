"use client"
import { PropsWithClassName } from "@/app/types"
import cn from "clsx"

import { setOpenCallbackModal } from "@/app/lib/features/main/mainSlice"
import { useAppDispatch } from "@/app/lib/hooks"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { FC } from "react"
import { Button } from "../../ui"

export const Installments: FC<PropsWithClassName> = ({ className }) => {
  const t = useTranslations("Index")
  const dispatch = useAppDispatch()

  return (
    <div
      className={cn(
        "py-[20px] pb-[10px] lg:py-[30px] min-h-fit h-screen max-h-screen flex flex-col justify-center items-center",
        className,
      )}
      id="credit"
    >
      <div className="container flex flex-col h-full flex-grow items-center justify-center">
        <div className="relative flex flex-col items-center max-w-[1200px] w-full">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl w-full max-w-[850px] text-center relative z-10 mb-6 max-[550px]:text-[22px] max-[550px]:leading-[95%]
          ">
            {t.rich("installments-title", {
              br: () => <br></br>,
            })}
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <ul className="flex flex-col gap-3 lg:gap-4 text-base lg:text-xl font-semibold max-w-[600px] relative z-10 mb-4 lg:mb-0">
              <li className="flex gap-3">
                <Image
                  className="h-max w-[30px] lg:w-[40px]"
                  src="/assets/images/check.svg"
                  alt="check"
                  width={40}
                  height={40}
                />
                <p className="max-[550px]:text-[14px]">{t("installments-1")}</p>
              </li>
              <li className="flex gap-3">
                <Image
                  className="h-max w-[30px] lg:w-[40px]"
                  src="/assets/images/check.svg"
                  alt="check"
                  width={40}
                  height={40}
                />
                <p className="max-[550px]:text-[14px]">{t("installments-2")}</p>
              </li>
              <li className="flex gap-3">
                <Image
                  className="h-max w-[30px] lg:w-[40px]"
                  src="/assets/images/check.svg"
                  alt="check"
                  width={40}
                  height={40}
                />
                <p className="max-[550px]:text-[14px]">{t("installments-3")}</p>
              </li>
            </ul>

            <Image
              className="w-full max-w-[400px] h-auto lg:max-w-[450px] max-[550px]:w-[200px]"
              src="/assets/images/installments-img.png"
              alt="installments"
              sizes="100vw"
              width={100}
              height={300}
            />
          </div>

          <Button
            className="sm:max-w-[200px] mt-6"
            title={t("Learn more")}
            onClick={() => {
              dispatch(setOpenCallbackModal(true, "Хочу рассрочку!"))
            }}
          />
        </div>
      </div>
    </div>
  )
}
