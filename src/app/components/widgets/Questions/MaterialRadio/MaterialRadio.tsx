import { PropsWithReactHookForm } from "@/app/types";
import Image from "next/image";
import { useId } from "react";
import { FieldValues, Path } from "react-hook-form";
import cn from "clsx";
import styles from "./MaterialRadio.module.css";

type Props = {
  img: string;
  title: string;
  name: string;
  text?: string;
  className?: string;
};

export const MaterialRadio = <T extends FieldValues>({
  img,
  title,
  hookFormData,
  name,
  text,
  className,
}: PropsWithReactHookForm<T> & Props) => {
  const id = useId();

  if (!hookFormData) return null;

  return (
    <>
      <input
        className={cn("hidden", styles.input)}
        id={id}
        type="checkbox" // Changed from radio to checkbox
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
          "w-full px-5 lg:py-4 rounded-xl border border-border-main flex items-center cursor-pointer gap-4 lg:gap-5 text-base lg:text-lg xl:text-xl text-center h-[58px] lg:h-auto",
        )}
      >
        <div className={styles.radio}></div>

        <p className="text-base lg:text-lg xl:text-xl">{title}</p>

        {text && (
          <p className="text-sm lg:text-sm xl:text-lg text-center max-w-[260px] w-full">
            {text}
          </p>
        )}
      </label>
    </>
  );
};
