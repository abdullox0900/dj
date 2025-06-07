import { PropsWithClassName } from "@/app/types";
import Link from "next/link";
import { FC, MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./Button.module.css";

type Props = {
  title?: string;
  onClick?: MouseEventHandler;
  type?: "submit" | "button";
  href?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  children?: ReactNode;
  classNameSpan?: string;
};

export const Button: FC<PropsWithClassName<Props>> = ({
  className,
  title,
  onClick,
  type = "button",
  href,
  disabled = false,
  icon,
  children,
  classNameSpan,
}) => {
  return (
    <>
      {href ? (
        <Link
          className={twMerge(styles.btn, className)}
          onClick={onClick}
          type={type}
          href={href}
        >
          <span>
            {title}
            {icon && icon}
          </span>
          {children}
        </Link>
      ) : (
        <button
          className={twMerge(styles.btn, className)}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          <span className={`${classNameSpan}`}>
            {title}
            {icon && icon}
          </span>
          {children}
        </button>
      )}
    </>
  );
};
