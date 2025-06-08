"use client"

import NewGif from "@/app/assets/new-gif.png"
import {
  setOpenCallbackModal,
  setOpenFreeConsultationModal
} from "@/app/lib/features/main/mainSlice"
import { useAppDispatch } from "@/app/lib/hooks"
import { formatDate } from "@/app/utils"
import cn from "clsx"
import { useLocale, useTranslations } from "next-intl"
import Image from 'next/image'
import { useState } from "react"
import "swiper/css"
import "swiper/css/pagination"
import { Button } from "../../ui"
import styles from "./Banner.module.css"

export const Banner = () => {
  const today = new Date()
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  const dispatch = useAppDispatch()
  const t = useTranslations("Index")
  const locale = useLocale()
  const [activeSlide, setActiveSlide] = useState(0)

  const open = () => dispatch(setOpenCallbackModal(true, "Забронировать скидку и подарок"))

  const openFreeConsultationModal = () => {
    dispatch(setOpenFreeConsultationModal(true))
  }

  return (
    <div className="relative">
      <div className={cn(styles.wrapper, styles.one)}>
        <div className={styles.blur}></div>
        <div className="container flex-grow flex flex-col z-20">
          <div className="flex flex-col justify-between flex-grow h-full">
            <div className="flex flex-col mt-4 grow lg:justify-center">
              <h1 className={"welcome-message text-5xl lg:!text-6xl"}>
                {t.rich("welcome-message")}
              </h1>
              <h2
                className={"h2-welcome-message text-3xl lg:text-4xl"}
              >{`Печь СВЧ, вытяжка или посудомоечная машина. Акция до ${formatDate(lastDayOfMonth)}. Количество подарков ограничено.`}</h2>
            </div>

            <Button
              className="mx-auto w-full !mb-5 !text-xl max-w-[400px]"
              onClick={open}
            >
              Забронировать скидку и
              <Image src={NewGif} alt="newGif" width={40} height={40} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
