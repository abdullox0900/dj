"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { Tab } from "../entities";

type Props = {
  list: any;

  activeTab: number;

  setActiveTab: Dispatch<SetStateAction<number>>;

  isAll?: boolean;

  type: "activeTab" | "secondaryTab";
};

export const TabsWrapper: FC<Props> = ({
  list,
  activeTab,
  setActiveTab,
  isAll = true,
  type,
}) => {
  return (
    <div className="w-full flex-wrap gap-2 lg:gap-5 mb-[30px] flex">
      {isAll && (
        <Tab
          isActive={activeTab === 0}
          activeTab={activeTab}
          setActiveTab={() => {
            window.history.pushState(null, "", `?${type}=${0}`);
            setActiveTab(0);
          }}
          name="Все"
        />
      )}

      {list.map((el: any, idx: number) => {
        return (
          <Tab
            key={idx}
            isActive={Number(el.$.id) === activeTab}
            activeTab={activeTab}
            setActiveTab={() => {
              if (!isAll && activeTab === Number(el.$.id) && list.length > 1) {
                window.history.pushState(null, "", `?${type}=${0}`);
                setActiveTab(0);
              } else {
                window.history.pushState(
                  null,
                  "",
                  `?${type}=${Number(el.$.id)}`,
                );
                setActiveTab(Number(el.$.id));
              }
            }}
            name={el._}
          />
        );
      })}
    </div>
  );
};
