import { FC } from "react";

type Props = {
  icon: JSX.Element;
  title: JSX.Element;
  count: number;
};

export const StepItem: FC<Props> = ({ icon, title, count }) => {
  return (
    <div className="flex items-center gap-4 even:flex-row-reverse even:text-right lg:text-center lg:flex-col lg:even:text-center lg:even:flex-col max-lg:max-w-[195px]">
      <div className="flex justify-center items-center bg-yellow-2 rounded-full min-w-[75px] w-[75px] h-[75px]">
        {icon}
      </div>

      <div className="flex flex-col border-b border-black uppercase font-medium lg:pb-2 lg:border-b-0 lg:gap-3">
        <p className="text-xl lg:text-4xl lg:text-yellow-2 lg:font-bold">
          {count}
        </p>
        {title}
      </div>
    </div>
  );
};
