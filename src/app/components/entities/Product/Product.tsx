"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "../../ui";
import { useAppDispatch } from "@/app/lib/hooks";
import { setOpenFindCostModal } from "@/app/lib/features/main/mainSlice";
type Props = {
  img: string;
  title: string;
  price?: number;
  discount?: number;

  date?: string;
  desc?: string;
  linkText?: string;

  type: "kitchen" | "technique" | "blog";
  productHref: string;
};

export const Product: FC<Props> = ({
  img,
  title,
  price,
  type,
  date,
  desc,
  linkText,
  productHref,
  discount,
}) => {
  const t = useTranslations("Index");
  const dispatch = useAppDispatch();

  const findCostHandler = () => {
    dispatch(setOpenFindCostModal(true));
  };

  return (
    <div className="flex flex-col gap-0 sm:gap-5 w-full">
      {type === "kitchen" && (
        <Link className="relative" href={productHref}>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={img}
            alt={title}
            className="rounded-[10px] w-full mb-[20px] sm:mb-0 h-[240px] object-cover"
          />

          {/* {Boolean(discount) && (
            <div className="px-3 py-1 rounded absolute left-1 top-1 bg-yellow-1 text-lg text-black font-semibold">
              -{discount}%
            </div>
          )} */}
        </Link>
      )}
      {type === "blog" && (
        <Link href={productHref}>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={img}
            alt={title}
            className="rounded-[10px] w-full mb-[20px] h-[240px] sm:mb-0 object-cover"
          />
        </Link>
      )}

      {type === "technique" && (
        <Link
          href={productHref}
          className="flex items-center justify-center w-full h-[426px] bg-[#f4f4f4] rounded-1 overflow-hidden py-[20px] px-[20px]"
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={img}
            alt={title}
            className="rounded-[10px] max-w-[352px] w-full mb-[20px] sm:mb-0"
          />
        </Link>
      )}

      <div className="flex flex-col gap-2">
        {/* {price && (
          <div className="flex items-end gap-2">
            <p className="text-lg font-semibold text-yellow-1">
              {type === "kitchen" && (
                <span className="text-black">{t("From")}</span>
              )}{" "}
              {price} {t("price initials")}.{" "}
              {discount && discount > 0 ? (
                <span className="text-base relative text-gray-2 after:content-[''] font-normal after:absolute after:w-full after:h-[0.5px] after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:bg-gray-2 ml-1 mr-3">
                  {Math.ceil(price + (discount / 100) * price)} {t("price initials")}.
                </span>
              ) : null}
              {type === "kitchen" && (
                <span className="text-black">{t("for MP")}</span>
              )}
            </p>
          </div>
        )} */}

        {type !== "blog" && (
          <>
            <Button
              className="max-w-max !text-sm h-[35px]"
              title={t("Find out the cost")}
              onClick={findCostHandler}
            />

            {productHref ? (
              <Link
                className="font-medium text-base md:text-lg xl:text-xl text-black"
                href={productHref}
              >
                {title}
              </Link>
            ) : (
              <h5 className="font-medium text-base md:text-lg xl:text-xl text-black">
                {title}
              </h5>
            )}
          </>
        )}

        {type === "blog" && date && desc && linkText && (
          <Link href={productHref} className="flex flex-col">
            {productHref ? (
              <Link
                className="font-medium text-xl text-black"
                href={productHref}
              >
                {title}
              </Link>
            ) : (
              <h5 className="font-medium text-xl text-black">{title}</h5>
            )}
            <p className="font-normal text-base md:text-lg xl:text-xl text-black opacity-50 md:mb-4">
              {date}
            </p>
            <p className="font-normal text-base md:text-lg md:leading-[135%] text-black">
              {desc}
            </p>
            <Link
              href={productHref}
              className="underline font-semibold text-base md:text-lg xl:text-xl leading-[135%] text-yellow-3 mt-2"
            >
              {linkText}
            </Link>
          </Link>
        )}
      </div>
    </div>
  );
};
