import { useLocale } from "next-intl";
import { Anchor } from "../components/Anchor/Anchor";
import {
  About,
  AccordionWrapper,
  Banner,
  ClassicKitchens,
  FinishQuestions,
  Installments,
  ModernKitchens,
  Promotions,
  Questions,
  StepsBuilding,
} from "../components/widgets";
import { CalcModal } from "../components/widgets/CalcModal/CalcModal";
import { DesignerModal } from "../components/widgets/DesignerModal/DesignerModal";
import { ModernKitchensWrapper } from "../components/widgets/ModernKitchensWrapper";
import { PromotionsQuiz } from "../components/widgets/PromotionsQuiz";
import { Reviews } from "../components/widgets/Reviews/Reviews";
import { ContentApp } from "../components/widgets/StepsBuilding/ContentItems/ContentApp/ContentApp";
import { WhyUs } from "../components/widgets/WhyUs";

export default function Home() {
  const locale = useLocale();

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Anchor>
        <Banner />

        <Questions />

        <Promotions />

        <ModernKitchensWrapper>
          <ModernKitchens className="!pt-3" />
        </ModernKitchensWrapper>

        <ClassicKitchens />

        <StepsBuilding />

        {locale === "ru" && <Installments />}

        {/* <Consultation /> */}

        <About />

        <WhyUs />

        {/* <DesignerVisit /> */}

        <Reviews />

        <section>
          <div className="container flex flex-col gap-2 lg:gap-2.5 pb-[35px] lg:pb-[45px]">
            <div className="pt-5 lg:pt-8" id="callback">
              <ContentApp />
            </div>
          </div>
        </section>

        <AccordionWrapper />

        <CalcModal />
        <DesignerModal />
        <FinishQuestions />
        <PromotionsQuiz />
      </Anchor>
    </main>
  );
}
