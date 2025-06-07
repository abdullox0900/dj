"use client"

import { main, setOpenPromotionsQuiz } from "@/app/lib/features/main/mainSlice"
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks"
import { formatDate } from "@/app/utils"
import cn from "clsx"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useRef } from "react"
import { FaGift } from "react-icons/fa"
import { BoxWrapper } from "../../BoxWrapper/BoxWrapper"
import { PromotionsItem } from "./PromotionsItem/PromotionsItem"

export const Promotions = () => {
  const t = useTranslations("Index")
  const locale = useLocale()
  const promotionsRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const { isOpenPromotionsQuiz } = useAppSelector(main)

  // Track if the popup has been shown to avoid showing it multiple times
  const hasShownPopup = useRef(false)

  const today = new Date()
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  // Setup scroll event to detect when user has scrolled past the promotions section
  useEffect(() => {
    if (!promotionsRef.current) return

    const handleScroll = () => {
      // If the popup has already been shown or is currently open, don't show it again
      if (hasShownPopup.current || isOpenPromotionsQuiz) return

      if (promotionsRef.current) {
        const rect = promotionsRef.current.getBoundingClientRect()

        // Check if the user has scrolled past the promotions section
        // (when the bottom of the promotions section is above the viewport)
        if (rect.bottom < 0) {
          // Wait a brief moment before showing the popup
          setTimeout(() => {
            dispatch(setOpenPromotionsQuiz(true))
            hasShownPopup.current = true
          }, 1000)

          // Remove the event listener after showing the popup
          window.removeEventListener("scroll", handleScroll)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [dispatch, isOpenPromotionsQuiz])

  // Reset the flag when component unmounts
  useEffect(() => {
    return () => {
      hasShownPopup.current = false
    }
  }, [])

  return (
    <BoxWrapper title={""} id="promotions">
      <div
        ref={promotionsRef}
        className="flex flex-col lg:flex-row relative lg:min-h-[450px]"
      >
        <PromotionsItem
          className="lg:w-[50%] z-10"
          bgUrl="/assets/images/kitchen/2/2.jpg"
          text={
            <p className="text-[22px] min-[400px]:text-[22px] font-bold text-white w-auto lg:pr-[30%]">
              {t.rich("promotion-4", {
                spanBig: (chunks) => (
                  <span className="text-[24px] font-bold text-[#FFD700]">
                    {chunks}{" "}
                  </span>
                ),

                ul: (chunks) => <ul className="mt-2 md:mt-3">{chunks}</ul>,
                li: (chunks) => <li className="text-base">{chunks}</li>,
                br: () => <br></br>,
              })}
            </p>
          }
          idx={0}
          more={true}
          promotionType="3d"
        />

        <PromotionsItem
          className={cn("lg:right-[22%] z-30 lg:w-[45%]", {
            // "max-lg:-mt-[60px]": locale === "pl",
            "max-lg:-mt-[10px]": locale === "ru",
          })}
          bgUrl="/assets/images/promotions/promotions-1.jpg"
          text={
            <>
              <p className="text-[22px] leading-[1.2] font-bold text-white w-auto lg:pr-[5%] lg:max-w-[85%]">
                {t.rich("promotion-0", {
                  br: () => <br></br>,
                  percent: () => (
                    <span className="text-4xl lg:text-6xl font-black text-yellow-2">
                      23%
                    </span>
                  ),
                  giftImg: () => (
                    <FaGift
                      className="inline -translate-y-0.5"
                      color="#eab308"
                    />
                  ),
                  targetDate: () => formatDate(lastDayOfMonth),
                })}{" "}
              </p>
              <p className="text-xs">{ }</p>
            </>
          }
          idx={2}
          promotionType="technique"
        />

        {locale === "ru" && (
          <PromotionsItem
            className={cn("lg:right-[2%] z-40 lg:w-[50%] max-lg:-mt-[0px]")}
            bgUrl="/assets/images/promotions/promotions-3.jpg"
            text={
              <p className="text-[22px] leading-[1.2] font-bold text-white w-auto lg:pr-[30%]">
                {t("promotion-3")}
              </p>
            }
            idx={4}
            more={true}
            promotionType="installments"
          />
        )}

        {locale === "ru" && (
          <PromotionsItem
            className={cn("lg:right-[0%] z-50 lg:w-[38%] max-lg:-mt-[0px]")}
            bgUrl="/assets/images/promotions/promotions-2.jpg"
            text={
              <p className="text-[22px] leading-[1.2] font-bold text-white w-auto lg:pr-[30%]"  >
                {t("promotion-5")}
              </p>
            }
            idx={5}
            more={true}
            promotionType="schedule-meeting"
          />
        )}
      </div>
    </BoxWrapper>
  )
}
