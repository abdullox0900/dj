"use client";
import { Dispatch, FC, SetStateAction, useState } from "react";

import cn from "clsx";
import { PropsWithClassName } from "@/app/types";

type Props = {
  name: string;
  activeTab: number;
  isActive: boolean;
  setActiveTab: Dispatch<SetStateAction<number>>;
};

export const Tab: FC<PropsWithClassName<Props>> = ({
  name,
  activeTab,
  isActive,
  setActiveTab,
  className,
}) => {
  return (
    <div
      onClick={() => setActiveTab(activeTab)}
      className={cn(
        "lg:min-w-[124px] py-2 !px-3 lg:py-2 lg:!px-[30px] flex items-center justify-center bg-[#f8f8f8] cursor-pointer rounded-[3px] overflow-hidden ease-linear duration-200 ease hover:bg-gray-1/20",
        className,
        { "!bg-yellow-2": isActive },
      )}
    >
      <p className="font-semibold text-base text-left md:text-center text-[#393939]">
        {name}
      </p>
    </div>
  );
};
