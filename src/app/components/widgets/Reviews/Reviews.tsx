"use client"

import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { BoxWrapper } from "../.."
import { Review } from "../Review/Review"

import { useTranslations } from "next-intl"
import "swiper/css"
import "swiper/css/pagination"

export const Reviews = () => {
  const t = useTranslations("Index")

  return (
    <BoxWrapper title={t("Customer reviews")}>
      <Swiper
        className="reviews !pb-[50px] md:!pb-[150px] !px-4 !-mx-4"
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={80}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          900: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
      >
        <SwiperSlide style={{ display: "flex", height: "auto" }}>
          <Review
            text={t("Review-1")}
            name={t("Stepan")}
            img="/assets/images/reviews/review-1.png"
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", height: "auto" }}>
          <Review
            text={t("Review-2")}
            name={t("Olga")}
            img="/assets/images/kitchen/6/1.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Review
            text={t("Review-3")}
            name={t("Maksim")}
            img="/assets/images/kitchen/2/1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            text={t("Review-4")}
            name={t("Anna")}
            img="/assets/images/kitchen/1/1.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </BoxWrapper>
  )
}
