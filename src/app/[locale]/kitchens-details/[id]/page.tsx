"use client"

import { kitchens, kitchensPl } from "@/app/data"
import { Kitchen } from "@/app/types"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BoxWrapper, DesignerVisit } from "../../../components"
import { Product } from "../../../components/entities"
import { Button } from "../../../components/ui"
import {
  AccordionWrapper,
  Gallery,
  OrderModal,
  Promotions,
  Thumbs,
} from "../../../components/widgets"
import { Reviews } from "../../../components/widgets/Reviews/Reviews"

import { Anchor } from "@/app/components/Anchor/Anchor"
import { ModernKitchensWrapper } from "@/app/components/widgets/ModernKitchensWrapper"
import { setOpenFindCostModal } from "@/app/lib/features/main/mainSlice"
import { useAppDispatch } from "@/app/lib/hooks"
import { useLocale, useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/zoom"

export default function Page({ params }: { params: { id: string } }) {
  const [kitchen, setKitchen] = useState<Kitchen>()
  const [isOpenOrderModal, setOpenOrderModal] = useState(false)
  const [similarKitchens, setSimilarKitchens] = useState<Kitchen[]>([])
  const [galleryIsOpen, setGalleryOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState<number>()
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab")
  const locale = useLocale()
  const t = useTranslations("Index")
  const dispatch = useAppDispatch()

  useEffect(() => {
    const currentKitchen =
      locale === "ru"
        ? kitchens.find((el) => el.id === Number(params.id))
        : kitchensPl.find((el) => el.id === Number(params.id))

    setKitchen(currentKitchen)
  }, [locale, params.id])

  useEffect(() => {
    const similarKitchensList = kitchens.filter(
      (el) => el.style === kitchen?.style && el.id !== kitchen.id,
    )

    setSimilarKitchens(similarKitchensList)
  }, [kitchen])

  const findCostHandler = () => {
    dispatch(setOpenFindCostModal(true))
  }

  return (
    <>
      <main className="flex min-h-screen flex-col justify-between">
        <Anchor>
          <div className="container">
            <Thumbs
              way={[
                { title: t("Main"), href: `/` },
                { title: t("Kitchens"), href: `/kitchens` },
                {
                  title:
                    tab === "0"
                      ? t("All kitchens")
                      : tab === "1"
                        ? t("Modern style")
                        : t("Classic style"),
                  href:
                    tab === "0"
                      ? `/kitchens/?tab=0`
                      : tab === "1"
                        ? `/kitchens/?tab=1`
                        : `/kitchens/?tab=2`,
                },
                {
                  title: `${kitchen?.facadeMaterial} | ${kitchen?.style}`,
                  href: `/kitchens-details` + `/${kitchen?.id}`,
                },
              ]}
            />
          </div>

          <BoxWrapper
            className="!pt-0"
            title={`${kitchen?.facadeMaterial} | ${kitchen?.style}`}
          >
            <div className="flex flex-col">
              <div className="pt-5" id="first-image">
                <div className="rounded-[10px] overflow-hidden mb-[30px] md:mb-[40px] max-h-[500px]">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={kitchen?.images[0] || "/"}
                    alt="kitchen"
                    className="w-full max-h-[450px] object-cover cursor-pointer"
                    onClick={() => {
                      setActiveSlide(0)
                      setGalleryOpen(true)
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse lg:flex-row mb-[20px] md:mb-[40px] gap-[40px]">
                <div className="rounded-[10px] overflow-hidden">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={kitchen?.images[1] || "/"}
                    alt="kitchen"
                    className="w-full cursor-pointer"
                    onClick={() => {
                      setActiveSlide(1)
                      setGalleryOpen(true)
                    }}
                  />
                </div>

                <div className="flex flex-col gap-[20px] md:gap-[30px] max-w-full w-full mb-[26px]">
                  <h4 className="font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[123%] text-[#000]">
                    {t("Specifications")}
                  </h4>
                  <ul className="flex flex-col gap-[25px] md:gap-[40px]">
                    <li className="flex justify-between">
                      <p className="font-normal text-base lg:text-lg xl:text-xl leading-[150%] md:leading-[154%] text-[#000]">
                        {t("Facade material")}
                      </p>
                      <p className="font-normal text-base lg:text-lg xl:text-xl leading-[150%] md:leading-[154%] text-[#000]">
                        {kitchen?.facadeMaterial || "-"}
                      </p>
                    </li>
                    <li className="flex justify-between">
                      <p className="font-normal text-base lg:text-lg xl:text-xl leading-[150%] md:leading-[154%] text-[#000]">
                        {t("Table top material")}
                      </p>
                      <p className="font-normal text-base lg:text-lg xl:text-xl leading-[150%] md:leading-[154%] text-[#000]">
                        {kitchen?.tableTopMaterial || "-"}
                      </p>
                    </li>
                    <li className="flex justify-between">
                      <p className="font-normal text-base lg:text-lg xl:text-xl leading-[150%] md:leading-[154%] text-[#000]">
                        {t("Color")}
                      </p>
                      <p className="font-normal text-base lg:text-lg xl:text-xl leading-[150%] md:leading-[154%] text-[#000]">
                        {kitchen?.color || "-"}
                      </p>
                    </li>
                    <li className="flex justify-between">
                      <p className="font-normal text-base lg:text-lg xl:text-xl leading-[150%] md:leading-[154%] text-[#000]">
                        {t("Style")}
                      </p>
                      <p className="font-normal text-base lg:text-lg xl:text-xl leading-[150%] md:leading-[154%] text-[#000]">
                        {kitchen?.style || "-"}
                      </p>
                    </li>
                    <li className="flex justify-between">
                      <p className="font-normal text-base lg:text-lg xl:text-xl leading-[150%] md:leading-[154%] text-[#000]">
                        {t("Type of layout")}
                      </p>
                      <p className="font-normal text-base lg:text-lg xl:text-xl leading-[150%] md:leading-[154%] text-[#000]">
                        {kitchen?.type || "-"}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 md:gap-[28px] mb-[30px] md:mb-[40px]">
                {kitchen?.images.slice(2).map((el, idx) => {
                  const findedImageIdx = kitchen.images.findIndex(
                    (item) => item === el,
                  )

                  return (
                    <Image
                      key={idx}
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={el || "/"}
                      alt="kitchen"
                      className="w-full rounded-[10px] cursor-pointer"
                      onClick={() => {
                        setActiveSlide(findedImageIdx)
                        setGalleryOpen(true)
                      }}
                    />
                  )
                })}
              </div>

              <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center justify-end md:pt-[30px] md:border-t border-[#909090] gap-[30px] md:gap-0">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start">
                    <Button
                      className="border border-solid border-[#ffd855] !py-[16.5px] max-w-[245px] md:max-w-[271px] w-full text-[#292929]"
                      title={t("Find out the cost")}
                      onClick={findCostHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
          </BoxWrapper>

          {similarKitchens.length > 0 && (
            <ModernKitchensWrapper>
              <BoxWrapper className="!pt-3" title={t("Similar kitchens")}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
                  {similarKitchens.map((kitchen) => (
                    <Product
                      key={kitchen.id}
                      type="kitchen"
                      img={kitchen.images[0]}
                      title={`${kitchen.facadeMaterial} | ${kitchen.style}`}
                      productHref={`/kitchens-details/${kitchen.id}`}
                      price={kitchen.price}
                    />
                  ))}
                </div>
              </BoxWrapper>
            </ModernKitchensWrapper>
          )}

          <DesignerVisit />

          <Promotions />

          <Reviews />

          <AccordionWrapper />

          <OrderModal
            productId={Number(kitchen?.id)}
            productName={kitchen?.name || "-"}
            isOpen={isOpenOrderModal}
            setOpen={setOpenOrderModal}
          />
        </Anchor>
      </main>

      {galleryIsOpen && kitchen && (
        <Gallery
          setOpen={setGalleryOpen}
          list={kitchen.images}
          activeImage={activeSlide}
        />
      )}
    </>
  )
}
