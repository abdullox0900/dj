"use client";

import { useAnchor } from "@/app/hooks";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Anchor: FC<Props> = ({ children }) => {
  useAnchor();

  return children;
};
