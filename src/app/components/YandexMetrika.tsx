"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ym, { YMInitializer } from "react-yandex-metrika";

export function YandexMetrika() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ym("hit", window.location.href);
  }, [pathName, searchParams]);

  return (
    <YMInitializer
      accounts={[97540051]}
      options={{ webvisor: true }}
      version="2"
    />
  );
}
