"use client";

import { FC } from "react";
import styles from "./BlogDetailsContent.module.css";

type Props = {
  content: string;
};

export const BlogDetailsContent: FC<Props> = ({ content }) => {
  return (
    <div
      className={styles.wrapper}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};
