"use client";

import cn from "clsx";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import {
  main,
  setOpenFinishQuestions,
} from "@/app/lib/features/main/mainSlice";
import { useOutside } from "@/app/hooks";
import { IoClose } from "react-icons/io5";
import { useTranslations } from "next-intl";

export const FinishQuestions = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { isOpenFinishQuestions: isOpen } = useAppSelector(main);
  const dispatch = useAppDispatch();
  const t = useTranslations("Index");

  useOutside(ref, () => dispatch(setOpenFinishQuestions(false)));

  const closeHandler = () => {
    dispatch(setOpenFinishQuestions(false));
  };

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
        <div
          className="absolute right-[20px] top-[20px] cursor-pointer"
          onClick={closeHandler}
        >
          <IoClose size={25} />
        </div>

        <div className="flex flex-col gap-4 items-center text-center">
          <svg
            className="w-16 h-16"
            fill="#28ea1a"
            viewBox="0 0 24 24"
            stroke="#28ea1a"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M15.2928932,8.29289322 L10,13.5857864 L8.70710678,12.2928932 C8.31658249,11.9023689 7.68341751,11.9023689 7.29289322,12.2928932 C6.90236893,12.6834175 6.90236893,13.3165825 7.29289322,13.7071068 L9.29289322,15.7071068 C9.68341751,16.0976311 10.3165825,16.0976311 10.7071068,15.7071068 L16.7071068,9.70710678 C17.0976311,9.31658249 17.0976311,8.68341751 16.7071068,8.29289322 C16.3165825,7.90236893 15.6834175,7.90236893 15.2928932,8.29289322 Z"
              ></path>{" "}
            </g>
          </svg>

          <div className="flex flex-col gap-2">
            <h5 className="text-xl font-semibold">
              {t("Your request has been sent successfully")}
            </h5>

            <p className="text-base">{t("Thank you for your trust")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
