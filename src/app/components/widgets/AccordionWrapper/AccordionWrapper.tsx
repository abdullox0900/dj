"use client";

import { useState } from "react";
import { AccordionItem } from "../../entities/AccordionItem/AccordionItem";
import styles from "./AccordionWrapper.module.css";
import { useTranslations } from "next-intl";
export const AccordionWrapper = () => {
  const [active, setActive] = useState(-1);
  const t = useTranslations("Index");

  const items = [
    {
      title: t("faq-title-1"),
      desc: [
        `${t("faq-text-1-1")} <br /> <br />`,
        `${t("faq-text-1-2")} <br /><br />`,
        t("faq-text-1-3"),
      ],
    },
    {
      title: t("faq-title-2"),
      desc: [
        `${t("faq-text-2-1")} <br /><br />`,
        `${t("faq-text-2-2")} <br /><br />`,
        t("faq-text-2-3"),
      ],
    },
    {
      title: t("faq-title-3"),
      desc: [
        [`${t("faq-text-3-1")} <br /> <br />`],
        [`${t("faq-text-3-2")}`],
        [`${t("faq-text-3-3")}`],
        [`${t("faq-text-3-4")}`],
        [`${t("faq-text-3-5")}`],
        [`${t("faq-text-3-6")}`],
        [`${t("faq-text-3-7")}`],
        [`${t("faq-text-3-8")}`],
        [`${t("faq-text-3-9")}`],
        [`${t("faq-text-3-10")}`],
        [`${t("faq-text-3-11")}`],
        [`${t("faq-text-3-12")}`],
      ],
    },
    {
      title: t("faq-title-4"),
      desc: [[`${t("faq-text-4-1")}`]],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className="container max-w-[1401px]">
        <h2 className={styles.accordion__title}>{t("They often ask")}</h2>
        <div className="flex flex-col gap-5">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              currentIndex={index}
              activeIndex={active}
              setActiveIndex={setActive}
              title={item.title}
            >
              {item.desc.map((info, idx) => (
                <p
                  key={idx}
                  className={styles.children}
                  dangerouslySetInnerHTML={{ __html: info }}
                ></p>
              ))}
            </AccordionItem>
          ))}
        </div>
      </div>
    </div>
  );
};
