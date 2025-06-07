"use client";

import { ChangeEventHandler, InputHTMLAttributes, useId } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import cn from "clsx";

import { PropsWithClassName } from "@/app/types";

import styles from "./TextField.module.css";
import InputMask from "react-input-mask";
import { useLocale, useTranslations } from "next-intl";
import { telPlMask, telRuMask } from "@/app/data";

type Props<T extends FieldValues> = {
  type?: "email" | "text" | "password" | "tel" | "number" | "file";
  readOnly?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  hookFormData?: {
    register: UseFormRegister<T>;
    registerName: string;
    options?: RegisterOptions;
  };

  icon?: JSX.Element;
  placeholder?: string;
  fileUrl?: string;
};

export const TextField = <T extends FieldValues>({
  type = "text",
  className,
  readOnly,
  onChange,
  value,
  hookFormData,
  icon,
  placeholder,
  fileUrl,
}: PropsWithClassName<Props<T>> & InputHTMLAttributes<HTMLInputElement>) => {
  const id = useId();
  const t = useTranslations("Index");
  const locale = useLocale();

  if (type === "file") {
    return (
      <div className={cn(styles.input, className)}>
        {icon}

        <p className="w-full text-left text-sm lg:text-base truncate">
          {fileUrl || t("The file is not selected")}
        </p>

        <input
          className="hidden"
          type={type}
          readOnly={readOnly}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          id={id}
        />

        <label
          className="text-sm text-[#8B7115] lg:text-base flex justify-center items-center px-3 bg-[#E6E6E6] h-[calc(100%+40px)] -mr-5 cursor-pointer hover:bg-[#E6E6E6]/80 ease duration-200"
          htmlFor={id}
        >
          {t("Select")}
        </label>
      </div>
    );
  }

  if (type === "tel") {
    return (
      <div className={cn(styles.input, className)}>
        {icon}

        {hookFormData ? (
          <InputMask
            mask={locale === "ru" ? telRuMask : telPlMask}
            readOnly={readOnly}
            {...hookFormData.register(
              hookFormData.registerName as Path<T>,
              hookFormData.options,
            )}
            placeholder={t("Phone number")}
          />
        ) : (
          <InputMask
            mask={locale === "ru" ? telRuMask : telPlMask}
            readOnly={readOnly}
            onChange={onChange}
            value={value}
            placeholder={t("Phone number")}
          />
        )}
      </div>
    );
  }

  return (
    <>
      {hookFormData ? (
        <div className={cn(styles.input, className)}>
          {icon}

          <input
            type={type}
            readOnly={readOnly}
            {...hookFormData.register(
              hookFormData.registerName as Path<T>,
              hookFormData.options,
            )}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <div className={cn(styles.input, className)}>
          {icon}

          <input
            type={type}
            readOnly={readOnly}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
};
