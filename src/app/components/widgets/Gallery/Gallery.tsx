"use client";

import {
  CSSProperties,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { IoClose } from "react-icons/io5";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  list: string[];
  activeImage?: number;
};

export const Gallery: FC<Props> = ({ setOpen, list, activeImage }) => {
  const ref = useRef<SwiperRef>(null);

  useEffect(() => {
    if (!ref.current || !activeImage) return;

    ref.current.swiper.slideTo(activeImage, 0, false);
  }, [activeImage]);

  return (
    <Swiper
      ref={ref}
      style={
        {
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        } as CSSProperties
      }
      zoom={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Zoom, Navigation, Pagination]}
      className="mySwiper !fixed !top-0 !bottom-0 !left-0 !right-0 !z-[10000] bg-black"
    >
      <IoClose
        className="z-[10000] fixed right-[16px] top-[16px] lg:right-[30px] lg:top-[30px] cursor-pointer"
        color="#fff"
        size={50}
        onClick={() => setOpen(false)}
      />

      {list.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="swiper-zoom-container">
            <img src={item} alt="img" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
