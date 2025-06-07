import { FC, ReactNode } from "react";
import cn from "clsx";
import { PropsWithClassName } from "@/app/types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  title?: string;
  children: ReactNode;
  id?: string;
  href?: string;
  headerRight?: JSX.Element;
};

export const BoxWrapper: FC<PropsWithClassName<Props>> = ({
  title,
  children,
  className,
  id,
  href,
  headerRight,
}) => {
  if (href) {
    return (
      <div className={twMerge("py-[35px] lg:py-[45px]", className)} id={id}>
        <div className="container flex flex-col gap-2 lg:gap-2.5">
          <div className="flex justify-between items-center gap-4 flex-wrap">
            {title && (
              <Link
                href={href}
                className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[37px] md:leading-[54px]"
              >
                {title}
              </Link>
            )}

            {headerRight}
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("py-[35px] lg:py-[45px]", className)} id={id}>
      <div className="container flex flex-col gap-2 lg:gap-2.5">
        {title && (
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[37px] md:leading-[54px]">
            {title}
          </h2>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};
