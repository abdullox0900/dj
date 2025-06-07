"use client"

import { useLocale, useTranslations } from "next-intl"
import { Anchor } from "../Anchor/Anchor"
import { BoxWrapper } from "../BoxWrapper/BoxWrapper"
import { DesignerVisit } from "../DesignerVisit/DesignerVisit"
import { AccordionWrapper, Promotions, Thumbs } from "../widgets"
import { KitchensContent } from "../widgets/KitchensContent/KitchensContent"
import { Reviews } from "../widgets/Reviews/Reviews"

export const KitchensScreen = () => {
  const t = useTranslations("Index")
  const locale = useLocale()

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Anchor>
        <div className="container">
          <Thumbs
            way={[
              { title: t("Main"), href: `/` },
              { title: t("Kitchens"), href: `/kitchens` },
            ]}
          />
        </div>

        <BoxWrapper className="!pt-5 lg:!pt-0" title={t("Kitchens")}>
          <h1 className="text-3xl font-bold mb-8 text-center">КУХНИ</h1>
          <KitchensContent />
        </BoxWrapper>

        <DesignerVisit />

        <Promotions />

        <Reviews />

        <AccordionWrapper />
      </Anchor>
    </main>
  )
}
