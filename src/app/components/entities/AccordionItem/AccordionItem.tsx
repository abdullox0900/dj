"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { FC } from "react";
import styles from "./AccordionItem.module.css";
type Props = {
  title: string;
  children: ReactNode;
  activeIndex: number;
  currentIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

export const AccordionItem: FC<Props> = ({
  title,
  children,
  activeIndex,
  currentIndex,
  setActiveIndex,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggle = () => {
    accordionOpen ? setAccordionOpen(false) : setAccordionOpen(true);
    setActiveIndex(currentIndex);
  };

  useEffect(() => {
    setAccordionOpen(currentIndex === activeIndex);
  }, [currentIndex, activeIndex]);

  return (
    <div className={styles.accordion__item}>
      <button onClick={toggle} className={styles.button}>
        <h3 className={styles.accordion__title}>{title}</h3>
        {!accordionOpen && (
          <div className="h-[34px] min-w-[34px] bg-[#FECF29] rounded-full flex items-center justify-center">
            <span className="text-[#292929] font-bold text-[27px] leading-none">
              +
            </span>
          </div>
        )}
        {accordionOpen && (
          <div className="h-[34px] min-w-[34px] bg-[#FFFFFF] rounded-full flex items-center justify-center">
            <span className="text-[#292929] font-bold text-[27px] leading-none -translate-y-[1px]">
              -
            </span>
          </div>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm " ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 py-[17px] px-[20px] md:py-[19px] md:px-[35px]"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};
