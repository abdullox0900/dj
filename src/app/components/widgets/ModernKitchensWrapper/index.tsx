"use client"

import { FC, PropsWithChildren } from "react"
import { useTranslations } from "use-intl"

export const ModernKitchensWrapper: FC<PropsWithChildren> = ({ children }) => {
  const t = useTranslations("Index")

  return (
    <div>
      <div className="container">
        {/* <p className="text-base lg:text-lg">{t("budget-text")}</p> */}
      </div>

      {children}
    </div>
  )
}
