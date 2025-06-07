"use client";

import { useEffect, useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";

export const ScrollBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const viewportHeight = window.innerHeight;
      const scrolledHeight = window.scrollY;

      if (scrolledHeight >= viewportHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    scrollHandler();

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <div
      className="flex justify-center items-center rounded-full bg-yellow-1 fixed bottom-5 left-5 w-[65px] h-[65px] lg:w-14 lg:h-14 z-50 cursor-pointer"
      onClick={scrollToTop}
    >
      <IoChevronUpSharp size={40} color="#fff" />
    </div>
  );
};
