"use client"

import { Button } from "@/app/components/ui"
import { useAppDispatch } from "@/app/lib/hooks"
import { PropsWithClassName } from "@/app/types"
import cn from "clsx"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { FC, useState } from "react"
import styles from "./PromotionsItem.module.css"

import {
  setOpenCallbackModal,
  setOpenFindCostModal,
} from "@/app/lib/features/main/mainSlice"

type Props = {
  text: JSX.Element
  href?: string
  bgUrl: string
  idx: number
  more?: boolean
  promotionType?: "default" | "3d" | "technique" | "installments" | "schedule-meeting"
}

const getWidthByIdx = (idx: number) => {
  if (idx === 4) {
    return "calc(100%)"
  }

  if (idx === 2) {
    return "calc(100% - 20%)"
  }

  if (idx === 1) {
    return "calc(100% - 20%)"
  }

  if (idx === 5) {
    return "calc(100%)"
  }
}

export const PromotionsItem: FC<PropsWithClassName<Props>> = ({
  className,
  text,
  href,
  bgUrl,
  idx,
  more = false,
  promotionType = "default",
}) => {
  const [enter, setEnter] = useState(false)
  const t = useTranslations("Index")
  const [showMoreBtn, setShowMoreBtn] = useState(true)

  const dispatch = useAppDispatch()

  const onMouseEnter = () => {
    if (window?.innerWidth < 1024 || idx === 3) return
    setEnter(true)
    setShowMoreBtn(false)
  }

  const onMouseLeave = () => {
    setEnter(false)
    setShowMoreBtn(true)
  }

  const renderButton = () => {
    switch (promotionType) {
      case "3d":
        return (
          <Link href="/3d-project" className="w-full">
            <Button
              title="Узнать подробнее"
              className="!px-6 w-full py-3"
              classNameSpan="text-[18px] py-[3px] font-bold"
            />
          </Link>
        )
      case "technique":
        return (
          <Link href="/promotion" className="w-full">
            <Button
              title="Узнать условия"
              className="!px-6 w-full"
              classNameSpan="text-[18px] py-[3px] font-bold"
            />
          </Link>
        )
      case "installments":
        return (
          <Button
            title="Хочу рассрочку!"
            className="!px-6"
            classNameSpan="text-[18px] py-[3px] font-bold"
            onClick={() => dispatch(setOpenCallbackModal(true, "Хочу рассрочку!"))}
          />
        )
      case "schedule-meeting":
        return (
          <Button
            title="Запишись на встречу с
дизайнером"
            className="!px-6"
            classNameSpan="text-[18px] py-[3px] font-bold"
            onClick={() => dispatch(setOpenCallbackModal(true, "Записаться на встречу с дизайнером."))}
          />
        )
      default:
        return (
          <Button
            title="Узнать стоимость"
            className="!px-6"
            onClick={() => dispatch(setOpenFindCostModal(true))}
          />
        )
    }
  }

  return (
    <div
      className={cn(
        "border-[8px] border-yellow-2 bg-cover bg-no-repeat bg-right-bottom lg:bg-center rounded-[30px] lg:rounded-[50px] lg:h-full lg:absolute shadow-1 ease duration-200 overflow-hidden",
        className,
      )}
      style={{
        width: enter ? getWidthByIdx(idx) : undefined,
        height: window.innerWidth < 550 ? "350px" : "450px",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={cn(styles.inner)}
        style={{
          backgroundImage: `url(${bgUrl})`,
          width: enter ? getWidthByIdx(idx) : "100%",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-1"></div>

        <div className="z-10 relative flex flex-col h-full">
          {text}

          <div className="flex justify-start mt-auto">{renderButton()}</div>
        </div>
      </div>
    </div>
  )
}
