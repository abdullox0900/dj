import { PropsWithReactHookForm } from "@/app/types";
import { useId } from "react";
import { FieldValues, Path } from "react-hook-form";
import cn from "clsx";

type Props = {
  title: string;
  name: string;
  active: boolean;
};

export const TimeSelect = <T extends FieldValues>({
  title,
  hookFormData,
  name,
  active,
}: PropsWithReactHookForm<T> & Props) => {
  const id = useId();

  if (!hookFormData) return null;

  return (
    <>
      <input
        className="hidden"
        id={id}
        type="radio"
        {...hookFormData?.register(
          hookFormData.registerName as Path<T>,
          hookFormData.options,
        )}
        value={title}
        name={name}
      />

      <label
        htmlFor={id}
        className={cn(
          "w-full px-8  lg:px-10 py-4 rounded-xl border border-border-main flex justify-center items-center cursor-pointer text-base lg:text-lg xl:text-xl text-center",
          {
            "border-yellow-1": active,
          },
        )}
      >
        {title}
      </label>
    </>
  );
};
