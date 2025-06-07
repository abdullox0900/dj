"use client";

import { main, setOpenPromotionsQuiz } from "@/app/lib/features/main/mainSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import cn from "clsx";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Questions } from "../Questions/Questions";

export const PromotionsQuiz = () => {
  const { isOpenPromotionsQuiz: isOpen } = useAppSelector(main);
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  // Animation control
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Only apply outside click detection to the backdrop, not the modal itself
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | any) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.classList.contains("backdrop")
      ) {
        dispatch(setOpenPromotionsQuiz(false));
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const closeModal = () => {
    dispatch(setOpenPromotionsQuiz(false));
  };

  if (!isVisible && !isOpen) return null;

  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] transition-all duration-300 backdrop",
        {
          "opacity-100": isOpen,
          "opacity-0": !isOpen,
        },
      )}
    >
      <div
        className={cn(
          "relative mx-auto w-[calc(100%-30px)] md:w-[90%] lg:w-[85%] xl:w-[75%] max-w-[1200px] overflow-hidden transition-all duration-300 max-h-[90vh] overflow-y-auto p-0",
          {
            "translate-y-0 opacity-100": isOpen,
            "translate-y-8 opacity-0": !isOpen,
          },
        )}
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-0 z-50 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-2 text-gray-800"
          onClick={closeModal}
          aria-label="Close modal"
        >
          <IoClose size={24} />
        </button>

        <div className="questions-modal-wrapper">
          <style jsx global>{`
            /* Стили для мобильной версии Questions внутри модального окна */
            @media (max-width: 767px) {
              .questions-modal-wrapper h2 {
                font-size: 24px !important;
                line-height: 1.3 !important;
              }

              .questions-modal-wrapper h2 span {
                font-size: 18px !important;
              }

              .questions-modal-wrapper p {
                font-size: 16px !important;
              }

              .questions-modal-wrapper .text-xl {
                font-size: 16px !important;
              }

              .questions-modal-wrapper .text-2xl {
                font-size: 18px !important;
              }

              .questions-modal-wrapper .text-3xl {
                font-size: 20px !important;
              }

              .questions-modal-wrapper .py-6 {
                padding-top: 12px !important;
                padding-bottom: 12px !important;
              }

              .questions-modal-wrapper .lg\\:px-10 {
                padding-left: 12px !important;
                padding-right: 12px !important;
              }

              .questions-modal-wrapper .lg\\:gap-8 {
                gap: 12px !important;
              }

              .questions-modal-wrapper .lg\\:gap-10 {
                gap: 14px !important;
              }

              .questions-modal-wrapper .gap-4 {
                gap: 8px !important;
              }

              .questions-modal-wrapper button {
                padding: 8px !important;
                font-size: 14px !important;
              }
            }
          `}</style>
          <Questions />
        </div>
      </div>
    </div>
  );
};
