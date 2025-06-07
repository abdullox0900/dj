"use client"

import { useOutside } from "@/app/hooks"
import { main, setOpenFindCostModal } from "@/app/lib/features/main/mainSlice"
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks"
import cn from "clsx"
import { useTranslations } from "next-intl"
import { useRef } from "react"
import { FindCostForm } from "../FindCostForm/FindCostForm"

export const FindCostModal = () => {
  const { isOpenFindCostModal: isOpen } = useAppSelector(main)
  const ref = useRef<HTMLDivElement | null>(null)
  const dispatch = useAppDispatch()
  const t = useTranslations("Index")

  useOutside(ref, () => dispatch(setOpenFindCostModal(false)))

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
        <div className="flex flex-col  gap-5">
          <h6 className="text-base lg:text-lg font-semibold text-center">
            {t("Find out the cost")}
          </h6>

          <FindCostForm />
        </div>
      </div>
    </div>
  )
}
