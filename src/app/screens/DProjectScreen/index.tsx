"use client"

import { BoxWrapper } from "@/app/components"
import { Anchor } from "@/app/components/Anchor/Anchor"
import { Button } from "@/app/components/ui"
import { Thumbs } from "@/app/components/widgets"
import { setOpenCallbackModal } from "@/app/lib/features/main/mainSlice"
import { useAppDispatch } from "@/app/lib/hooks"
import Image from "next/image"
import { useTranslations } from "use-intl"

export const DProjectScreen = () => {
  const t = useTranslations("Index")

  const dispatch = useAppDispatch()

  return (
    <main className="flex flex-col justify-between">
      <Anchor>
        <div className="container max-[425px]:px-0">
          <Thumbs
            way={[
              { title: t("Main"), href: `/` },
              { title: t("3d project"), href: `/d-project` },
            ]}
          />
        </div>

        {/* Promotion Section */}
        <div className="bg-[#121212] text-white py-10 md:py-20 bg-[url('/assets/images/accordion__bg.jpg')] bg-cover bg-center bg-blend-overlay bg-opacity-90 ">
          <div className=" px-4 md:px-6 flex justify-center max-[425px]:px-0">
            <div className="w-full max-w-md md:max-w-2xl bg-black bg-opacity-70 p-6 md:p-10 rounded-lg max-[425px]:p-2 max-[425px]:py-[20px]">
              {/* Main Headline */}
              <div className="text-center space-y-5 mb-6 md:mb-8">
                <h1 className="text-[#FFD700] font-extrabold text-4xl md:text-5xl leading-tight tracking-wide drop-shadow-md max-[425px]:text-[18px]">
                  ДЕЛАЕТЕ РЕМОНТ
                  <br />
                  НА КУХНЕ?
                </h1>

                <div className="text-white space-y-2">
                  <p className="text-xl md:text-2xl font-bold max-[425px]:text-[14px] max-[425px]:leading-[1.2]">
                    ПОЛУЧИТЕ 3D ДИЗАЙН-ПРОЕКТ <br /> С ПЛАНОМ КОММУНИКАЦИЙ:
                    РОЗЕТКИ, ПЛИТКА, ВОДА!
                  </p>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-hidden mb-8 border-y border-[#FFD700] shadow-lg">
                {/* Table Header */}
                <div className="grid grid-cols-2 bg-[#FFD700] text-black">
                  <div className="py-3 px-4 font-bold text-[16px] border-r-2 border-[#E0B800] max-[425px]:text-[12px]">
                    Типичные ошибки при <br /> ремонте без проекта
                  </div>
                  <div className="py-3 px-4 font-bold text-[16px] text-center max-[425px]:text-[12px]">
                    Стоимость
                    <br />
                    исправления
                  </div>
                </div>

                {/* Table Rows */}
                <div className="bg-transparent text-white">
                  <div className="grid grid-cols-2 ">
                    <div className="py-3 px-4 text-[16px] border-r-[1px] border-[#FFD700] font-bold max-[425px]:text-[12px]">
                      Неправильное
                      <br />
                      размещение розеток
                    </div>
                    <div className="py-3 px-4 text-[16px] text-center font-bold max-[425px]:text-[12px]">
                      300-500 р
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="py-3 px-4 text-[16px] border-r border-[#FFD700] font-bold max-[425px]:text-[12px]">
                      Ошибки в штроблении
                      <br />
                      под трубы и провода
                    </div>
                    <div className="py-3 px-4 text-[16px] text-center font-bold max-[425px]:text-[12px]">
                      400-600 р
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="py-3 px-4 text-[16px] border-r border-[#FFD700] font-bold max-[425px]:text-[12px]">
                      Перерасход плитки
                      <br />
                      из-за неправильного
                      <br />
                      плана
                    </div>
                    <div className="py-3 px-4 text-[16px] text-center font-bold max-[425px]:text-[12px]">
                      250-400 р
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="py-3 px-4 text-[16px] border-r border-[#FFD700] font-bold max-[425px]:text-[12px]">
                      Неточные расчеты
                      <br />
                      сантехники
                    </div>
                    <div className="py-3 px-4 text-[16px] text-center font-bold max-[425px]:text-[12px]">
                      300-500 р
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="py-3 px-4 text-[16px] border-r border-[#FFD700] font-bold max-[425px]:text-[12px]">
                      Потерянное время
                    </div>
                    <div className="py-3 px-4 text-[16px] text-center font-bold max-[425px]:text-[12px]">
                      ???
                    </div>
                  </div>
                </div>
              </div>

              {/* Cost Information */}
              <div className="space-y-5 text-center mb-8 max-[425px]:mb-4 max-[425px]:space-y-2">
                <div>
                  <p className="text-[#FFD700] font-bold text-lg md:text-2xl drop-shadow-md max-[425px]:text-[14px]">
                    ВОЗМОЖНАЯ ПЕРЕПЛАТА - от 1250 р + время
                  </p>
                </div>

                <div>
                  <p className="text-[#fff] font-light text-[14px] leading-[1.2] md:text-[22px] drop-shadow-md max-[425px]:text-[12px]">
                    СТОИМОСТЬ 3D ДИЗАЙН-ПРОЕКТА С
                    <br />
                    ПОДРОБНЫМ ПЛАНОМ КОММУНИКАЦИЙ - 200 р
                  </p>
                </div>

                <div>
                  <p className="text-[#FFD700] font-extrabold text-xl md:text-3xl drop-shadow-md max-[425px]:text-[18px]">
                    БЕСПЛАТНО ПРИ ЗАКАЗЕ КУХНИ
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <Button
                  className="w-full py-[25px] h-[65px] text-black rounded-[8px] text-[20px] max-[425px]:h-[50px] max-[425px]:py-[15px]"
                  classNameSpan="font-bold text-[20px] py-[30px] max-[425px]:text-[16px] max-[425px]:py-[20px]"
                  title={"ОСТАВИТЬ ЗАЯВКУ НА 3D-ПРОЕКТ"}
                  onClick={() => dispatch(setOpenCallbackModal(true, 'Заявка на 3D проект'))}
                />
              </div>
            </div>
          </div>
        </div>

        <BoxWrapper className="lg:pt-0 mt-[20px]" title={t("3d project")}>
          <div className="mb-8 space-y-3">
            <div className="flex flex-col gap-2 text-[20px] font-medium">
              <p>1. Замер</p>
              <p>2. Визуализация</p>
              <p>3. 3D проект кухни</p>
              <p>4. Схема размещения электрических розеток</p>
              <p>5. Схема вывода сантехники и канализации</p>
              <p>6. Схема укладки плитки в рабочей зоне</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 gap-y-8">
            {/* 1. Замер */}
            <div className="flex flex-col gap-2">
              <p className="text-xl lg:text-2xl font-semibold">
                1. Замер
              </p>
              <Image
                className="w-full h-auto max-w-4xl mx-auto"
                src="/assets/images/3d-project/5.jpg"
                alt="Замер кухни"
                width={0}
                height={0}
                sizes="100%"
              />
            </div>

            {/* 2. Визуализация */}
            <div className="flex flex-col gap-2">
              <p className="text-xl lg:text-2xl font-semibold">
                2. Визуализация
              </p>
              <Image
                className="w-full h-auto max-w-4xl mx-auto"
                src="/assets/images/3d-project/1.jpg"
                alt="Визуализация кухни"
                width={0}
                height={0}
                sizes="100%"
              />
            </div>

            {/* 3. 3D проект кухни */}
            <div className="flex flex-col gap-2">
              <p className="text-xl lg:text-2xl font-semibold">
                3. 3D проект кухни
              </p>
              <Image
                className="w-full h-auto max-w-4xl mx-auto"
                src="/assets/images/3d-bg.jpg"
                alt="3D проект кухни"
                width={0}
                height={0}
                sizes="100%"
              />
              <Image
                className="w-full h-auto max-w-4xl mx-auto"
                src="/assets/images/3d-project/6.jpg"
                alt="3D проект кухни"
                width={0}
                height={0}
                sizes="100%"
              />
              <Image
                className="w-full h-auto max-w-4xl mx-auto"
                src="/assets/images/3d-project/7.jpg"
                alt="3D проект кухни"
                width={0}
                height={0}
                sizes="100%"
              />
            </div>

            {/* 4. Схема размещения электрических розеток */}
            <div className="flex flex-col gap-2">
              <p className="text-xl lg:text-2xl font-semibold">
                4. Схема размещения электрических розеток
              </p>
              <Image
                className="w-full h-auto max-w-4xl mx-auto"
                src="/assets/images/3d-project/3.jpg"
                alt="Схема размещения электрических розеток"
                width={0}
                height={0}
                sizes="100%"
              />
            </div>

            {/* 5. Схема вывода сантехники и канализации */}
            <div className="flex flex-col gap-2">
              <p className="text-xl lg:text-2xl font-semibold">
                5. Схема вывода сантехники и канализации
              </p>
              <Image
                className="w-full h-auto max-w-4xl mx-auto"
                src="/assets/images/3d-project/4.jpg"
                alt="Схема вывода сантехники и канализации"
                width={0}
                height={0}
                sizes="100%"
              />
            </div>

            {/* 6. Схема укладки плитки в рабочей зоне */}
            <div className="flex flex-col gap-2">
              <p className="text-xl lg:text-2xl font-semibold">
                6. Схема укладки плитки в рабочей зоне
              </p>
              <Image
                className="w-full h-auto max-w-4xl mx-auto"
                src="/assets/images/3d-project/2.jpg"
                alt="Схема укладки плитки в рабочей зоне"
                width={0}
                height={0}
                sizes="100%"
              />
            </div>

            {/* Added CTA button at the end of the page */}
            <div className="mt-6 flex justify-center">
              <Button
                className="py-[15px] px-[30px] text-black rounded-[8px] text-[18px]"
                classNameSpan="font-bold"
                title={"ОСТАВИТЬ ЗАЯВКУ НА ПРОЕКТ"}
                onClick={() => dispatch(setOpenCallbackModal(true, "Заявка на проект"))}
              />
            </div>
          </div>
        </BoxWrapper>
      </Anchor>
    </main>
  )
}
