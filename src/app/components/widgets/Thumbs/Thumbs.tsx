import { PropsWithClassName } from "@/app/types";
import { FC, Fragment } from "react";
import cn from "clsx";
import Link from "next/link";

type Props = {
  way?: { title: string; href: string }[];
};

export const Thumbs: FC<PropsWithClassName<Props>> = ({ className, way }) => {
  return (
    <div className={cn("gap-2.5 items-center py-8 hidden lg:flex", className)}>
      {way?.map((el, idx) => {
        return (
          <Fragment key={idx}>
            <Link
              className={cn("text-base", {
                "text-yellow-1 border-b border-yellow-1": idx === 0,
              })}
              key={idx}
              href={el.href}
            >
              {el.title}
            </Link>

            {idx !== way.length - 1 && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25002 5.99998C8.25002 6.09588 8.21337 6.19188 8.14015 6.2651L4.39015 10.0151C4.24362 10.1616 4.00634 10.1616 3.8599 10.0151C3.71346 9.86857 3.71337 9.63129 3.8599 9.48485L7.34477 5.99998L3.8599 2.5151C3.71337 2.36857 3.71337 2.13129 3.8599 1.98485C4.00643 1.83841 4.24371 1.83832 4.39015 1.98485L8.14015 5.73485C8.21337 5.80807 8.25002 5.90407 8.25002 5.99998Z"
                  fill="black"
                />
              </svg>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
