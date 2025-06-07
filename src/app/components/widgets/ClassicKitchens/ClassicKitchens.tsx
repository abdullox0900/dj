"use client";

import { useState } from "react";
import { BoxWrapper } from "../../BoxWrapper/BoxWrapper";
import { Kitchen } from "@/app/types";
import { kitchens, kitchensPl } from "@/app/data";
import { getFilteredKitchens } from "@/app/utils";
import { Product } from "../../entities";
import { Button } from "../../ui";
import { useLocale, useTranslations } from "next-intl";

export const ClassicKitchens = () => {
  const t = useTranslations("Index");
  const locale = useLocale();

  const [classicKitchens] = useState<Kitchen[]>(
    locale === "ru"
      ? getFilteredKitchens(kitchens, t("Modern classic")).concat(
          getFilteredKitchens(kitchens, t("Classic Scandinavian")),
        )
      : getFilteredKitchens(kitchensPl, t("Modern classic")).concat(
          getFilteredKitchens(kitchensPl, t("Classic Scandinavian")),
        ),
  );

  return (
    <BoxWrapper
      title={t("Classic style")}
      href={`/kitchens?name=${t("Classic")}`}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-7">
        {classicKitchens.slice(0, 3).map((el, idx) => {
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
        href={`/kitchens/?products=24&tab=2`}
      />
    </BoxWrapper>
  );
};
