import cn from "clsx"
import { useLocale, useTranslations } from "next-intl"
import styles from "./About.module.css"

export const About = () => {
  const t = useTranslations("Index")
  const locale = useLocale()

  return (
    <div id="about">
      <div className={cn(styles.wrapper, "h-screen max-h-screen max-[550px]:h-auto max-[550px]:py-[40px] flex items-center")}>
        <div className={cn("container", styles.about__container)}>
          <div className={styles.left}>
            <div
              style={{
                position: "absolute",
                boxShadow: "white 0px 0px 100px 300px",
                backgroundColor: "white",
                opacity: "0.6",
                width: "100px",
                height: "100px",
                margin: "auto auto",
                left: "40%",
                top: "30%",
                borderRadius: "10px",
              }}
            ></div>
            <h2
              className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white lg:text-black"
              style={{ zIndex: 1 }}
            >
              {t("About us")}
            </h2>
            <p className={cn(styles.description, "line-clamp-6 md:line-clamp-none")} style={{ zIndex: 1 }}>
              {t("About-text")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:flex-1 w-full z-50 rounded-[20px] overflow-hidden">
            <div className="flex flex-col gap-2 bg-yellow-2 text-[#292929] px-[20px] py-[20px] md:px-[30px] md:py-[20px] max-w-full w-full lg:min-h-[160px]">
              <h3 className={cn(styles.card__title, "text-[#292929]")}>30</h3>
              <p className={styles.card__desc}>
                {t("Years of experience in the furniture industry")}
              </p>
            </div>
            <div className="flex flex-col gap-2 bg-[#fff] px-[20px] py-[20px] md:px-[30px] md:py-[20px] max-w-full w-full lg:min-h-[160px]">
              <h3 className={cn(styles.card__title, "text-yellow-2")}>
                <span className="text-xl max-[550px]:text-[22px]">{t("Up to")}</span> 5
              </h3>
              <p className={styles.card__desc}>{t("Years of warranty")}</p>
            </div>
            <div className="flex flex-col gap-2 bg-yellow-2 sm:bg-[#fff] px-[20px] py-[20px] md:px-[30px] md:py-[20px] max-w-full w-full lg:min-h-[160px]">
              <h3
                className={cn(
                  styles.card__title,
                  "text-[#292929] sm:text-yellow-2",
                )}
              >
                3D
              </h3>
              <p className={styles.card__desc}>
                {t("Comprehensive design project")}
              </p>
            </div>
            <div className="flex flex-col gap-2 bg-[#fff] sm:bg-yellow-2 px-[20px] py-[20px] md:px-[30px] md:py-[20px] max-w-full w-full lg:min-h-[160px]">
              <h3
                className={cn(
                  styles.card__title,
                  "text-yellow-2 sm:text-[#292929]",
                )}
              >
                <span className="text-xl max-[550px]:text-[22px]">
                  {locale === "ru" ? t("Under") : t("Installment")}
                </span>{" "}
                0%
              </h3>
              <p className={styles.card__desc}>
                {locale === "ru"
                  ? t("Installments without overpayments")
                  : "bez nadpłat"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
