import { PropsWithReactHookForm } from "@/app/types";
import Image from "next/image";
import { useId } from "react";
import { FieldValues, Path } from "react-hook-form";
import cn from "clsx";

type Props = {
  img: string;
  title: string;
  name: string;
  active: boolean;
  text?: string;
  className?: string;
};

export const KitchenForm = <T extends FieldValues>({
  img,
  title,
  hookFormData,
  name,
  active,
  text,
  className,
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
          className,
          "flex flex-col gap-4 lg:gap-4 w-full items-center cursor-pointer",
        )}
      >
        <Image
          className={cn(
            "w-full h-auto bg-contain rounded-xl border-2 border-border-main object-cover",
            {
              "border-yellow-1 border-2": active,
            },
          )}
          src={img}
          alt="kitchen"
          width={200}
          height={200}
        />

        <p className="text-center text-base lg:text-lg xl:text-xl">{title}</p>

        {text && (
          <p className="text-sm lg:text-sm xl:text-lg text-center max-w-[260px] w-full">
            {text}
          </p>
        )}
      </label>
    </>
  );
};
