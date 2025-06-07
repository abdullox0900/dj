"use client";

import { FC, useEffect, useState } from "react";
import { Product, Tab } from "../../entities";
import { kitchens, kitchensPl } from "@/app/data";
import { getFilteredKitchens } from "@/app/utils";
import { useSearchParams } from "next/navigation";
import { Button } from "../../ui";
import { useLocale, useTranslations } from "next-intl";

export const KitchensContent: FC = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const tab = searchParams.get("tab");
  const products = searchParams.get("products");
  const [activeTab, setActiveTab] = useState(0);
  const [displayedKitchens, setDisplayedKitchens] = useState(
    Number(products) || 24,
  );
  const t = useTranslations("Index");
  const locale = useLocale();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("products", String(displayedKitchens));

    window.history.pushState(null, "", `?${params.toString()}`);
  }, [displayedKitchens]);

  useEffect(() => {
    if (!tab) return;

    setActiveTab(Number(tab));
  }, [tab]);

  useEffect(() => {
    if (!name) return;
    if (name === t("Modern")) {
      setActiveTab(1);
    }
    if (name === t("Classic")) {
      setActiveTab(2);
    }
  }, [name, t]);

  const modernKitchens = getFilteredKitchens(
    locale === "ru" ? kitchens : kitchensPl,
    t("Modern"),
  );
  const classicKitchens = [
    ...getFilteredKitchens(
      locale === "ru" ? kitchens : kitchensPl,
      t("Classic"),
    ),
    ...getFilteredKitchens(
      locale === "ru" ? kitchens : kitchensPl,
      t("Modern classic"),
    ),
  ];

  const showMore = () => {
    setDisplayedKitchens((prevCount) => prevCount + 24);
  };

  return (
    <div>
      <div className="flex flex-wrap mb-[40px] w-full gap-[22px]">
        <Tab
          className="!min-w-[263px] !px-[58px]"
          isActive={activeTab === 0}
          activeTab={activeTab}
          setActiveTab={() => {
            setActiveTab(0);
            const params = new URLSearchParams(window.location.search);
            params.set("tab", String(0));
            params.set("products", String(24));
            setDisplayedKitchens(24);

            window.history.pushState(null, "", `?${params.toString()}`);
          }}
          name={t("All kitchens")}
        />
        <Tab
          className="!min-w-[263px] !px-[58px]"
          isActive={activeTab === 1}
          activeTab={activeTab}
          setActiveTab={() => {
            setActiveTab(1);
            const params = new URLSearchParams(window.location.search);
            params.set("tab", String(1));
            params.set("products", String(24));
            setDisplayedKitchens(24);

            if (params.get("name")) {
              params.set("name", t("Modern"));
            }

            window.history.pushState(null, "", `?${params.toString()}`);
          }}
          name={t("Modern style")}
        />
        <Tab
          className="!min-w-[263px] !px-[58px]"
          isActive={activeTab === 2}
          activeTab={activeTab}
          setActiveTab={() => {
            setActiveTab(2);

            const params = new URLSearchParams(window.location.search);
            params.set("tab", String(2));
            params.set("products", String(24));
            setDisplayedKitchens(24);

            if (params.get("name")) {
              params.set("name", t("Classic"));
            }

            window.history.pushState(null, "", `?${params.toString()}`);
          }}
          name={t("Classic style")}
        />
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-[60px] gap-5 md:gap-7">
          {(activeTab === 0
            ? locale === "ru"
              ? kitchens
              : kitchensPl
            : activeTab === 1
              ? modernKitchens
              : classicKitchens
          )
            .slice(0, displayedKitchens)
            .map((el, idx) => (
              <Product
                key={idx}
                type="kitchen"
                img={el.images[0]}
                title={`${el.facadeMaterial} | ${el.style}`}
                productHref={`/kitchens-details/${el.id}/?tab=${activeTab}`}
                price={el.price}
                discount={el.discount || 0}
              />
            ))}
        </div>
        {displayedKitchens <
          (activeTab === 0
            ? kitchens.length
            : activeTab === 1
              ? modernKitchens.length
              : classicKitchens.length) && (
          <Button
            title={t("Show more")}
            type="button"
            className="self-center max-w-[245px] !py-[20px] !px-[20px] md:max-w-[288px] w-full h-[50px]"
            onClick={showMore}
          />
        )}
      </div>
    </div>
  );
};
