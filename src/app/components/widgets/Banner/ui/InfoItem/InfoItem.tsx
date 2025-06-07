import { PropsWithClassName } from "@/app/types";
import Image from "next/image";
import { FC, MouseEventHandler } from "react";
import cn from "clsx";
import styles from "./InfoItem.module.css";
import { FiGift } from "react-icons/fi";

type Props = {
  img: string;
  title: JSX.Element;
  href?: string;
  onClick?: MouseEventHandler;
};

export const InfoItem: FC<PropsWithClassName<Props>> = ({
  className,
  img,
  title,
  href = "#",
  onClick,
}) => {
  if (onClick) {
    return (
      <div
        onClick={onClick}
        className={cn(
          "cursor-pointer border border-[rgba(55,55,55,0.9)] rounded-[10px] backdrop-blur-sm bg-[rgba(17,16,11,0.3)] flex flex-col gap-2.5 lg:gap-4 items-center justify-start text-center py-2.5 px-4 lg:py-3.5 xl:py-5 lg:backdrop-blur-[49px] lg:flex-row lg:px-14 lg:pr-8 lg:max-w-[450px] 2xl:max-w-none",
          className,
          styles.wrapper,
          {
            "!cursor-default": !href,
          },
        )}
      >
        <Image
          className="w-8 h-8 sm:w-10 sm:h-10 xl:w-[65px] xl:h-[65px]"
          src={img}
          alt="edit"
          width={0}
          height={0}
          sizes="100vw"
        />

        <p className="text-sm text-white font-semibold xl:text-base lg:leading-[136%] lg:font-medium lg:text-left">
          {title}
        </p>
      </div>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "border border-[rgba(55,55,55,0.9)] rounded-[10px] backdrop-blur-sm bg-[rgba(17,16,11,0.3)] flex flex-col gap-2.5 lg:gap-4 items-center justify-start text-center py-2.5 px-2 sm:px-4 lg:py-3.5 xl:py-5 lg:backdrop-blur-[49px] lg:flex-row lg:px-14 lg:pr-8 lg:max-w-[450px] 2xl:max-w-none",
        className,
        styles.wrapper,
        {
          "!cursor-default": !href,
        },
      )}
    >
      <Image
        className="w-8 h-8 sm:w-10 sm:h-10 xl:w-[65px] xl:h-[65px]"
        src={img}
        alt="edit"
        width={0}
        height={0}
        sizes="100vw"
      />

      <p className="text-sm text-white font-semibold xl:text-base lg:leading-[136%] lg:font-medium lg:text-left">
        {title}
      </p>
    </a>
  );
};
