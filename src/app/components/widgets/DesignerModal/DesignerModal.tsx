"use client"

import { useOutside } from "@/app/hooks"
import { main, setOpenDesignerModal } from "@/app/lib/features/main/mainSlice"
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks"
import cn from "clsx"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useRef } from "react"
import { DesignerForm } from "../StepsBuilding/ContentItems/ContentApp/DesignerForm/DesignerForm"

export const DesignerModal = () => {
  const ref = useRef<HTMLDivElement>(null)
  const t = useTranslations("Index")

  const { isOpenDesignerModal: isOpen } = useAppSelector(main)
  const dispatch = useAppDispatch()

  useOutside(ref, () => dispatch(setOpenDesignerModal(false)))

  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 left-0 right-0 bg-black/20 ease-linear duration-200 z-[100]",
        {
          "opacity-0 pointer-events-none": !isOpen,
        },
      )}
    >
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto rounded-1 bg-white px-4 py-8 w-[calc(100%-30px)] max-w-[500px]"
        ref={ref}
      >
        <div className="flex flex-col gap-5">
          <h6 className="text-base lg:text-lg font-semibold text-center">
            {t("Make an appointment for a designer's departure")}
          </h6>

          <Image
            className="w-full -mb-5 max-w-[300px] mx-auto"
            src="/assets/images/person.png"
            alt="person"
            width={0}
            height={0}
            sizes="100vw"
          />

          <DesignerForm />
        </div>
      </div>
    </div>
  )
}
