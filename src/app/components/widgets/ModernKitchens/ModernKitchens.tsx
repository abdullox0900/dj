"use client";

import { FC, useState } from "react";
import { BoxWrapper } from "../../BoxWrapper/BoxWrapper";
import { Product } from "../../entities";
import { Kitchen, PropsWithClassName } from "@/app/types";
import { kitchens, kitchensPl } from "@/app/data";
import { getFilteredKitchens } from "@/app/utils";
import { Button } from "../../ui";
import { useLocale, useTranslations } from "next-intl";

export const ModernKitchens: FC<PropsWithClassName> = ({ className }) => {
  const t = useTranslations("Index");
  const locale = useLocale();

  const [modernKithcens] = useState<Kitchen[]>(
    locale === "ru"
      ? getFilteredKitchens(kitchens, t("Modern"))
      : getFilteredKitchens(kitchensPl, t("Modern")),
  );

  return (
    <BoxWrapper
      className={className}
      title={t("Modern style")}
      href={`/kitchens?name=${t("Modern")}`}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-7">
        {modernKithcens.slice(0, 3).map((el, idx) => {
          return (
            <Product
              key={idx}
              type="kitchen"
              img={el.images[0]}
              title={`${el.facadeMaterial} | ${el.style}`}
              productHref={`/kitchens-details/${el.id}`}
              price={el.price}
              discount={el.discount || 0}
            />
          );
        })}
      </div>

      <Button
        title={t("Show more")}
        type="button"
        className="self-center max-w-[245px] !py-[20px] !px-[20px] md:max-w-[288px] w-full h-[50px] mx-auto mt-[40px]"
        href={`/kitchens/?products=24&tab=1`}
      />
    </BoxWrapper>
  );
};
