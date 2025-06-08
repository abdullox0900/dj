"use client"

import { Anchor } from "@/app/components/Anchor/Anchor"
import { Button } from "@/app/components/ui"
import { Thumbs } from "@/app/components/widgets"
import { setOpenCallbackModal } from "@/app/lib/features/main/mainSlice"
import { useAppDispatch } from "@/app/lib/hooks"
import { useTranslations } from "use-intl"

export const PromotionScreen = () => {
    const t = useTranslations("Index")

    const dispatch = useAppDispatch()

    return (
        <main className="flex flex-col justify-between">
            <Anchor>
                <div className="container max-[425px]:px-0">
                    <Thumbs
                        way={[
                            { title: t("Main"), href: `/` },
                            { title: t("Stocks"), href: `/promotion` },
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
                                    КУХНИ НА ЗАКАЗ СО СКИДКОЙ
                                    <br />
                                    23% И ТЕХНИКОЙ В ПОДАРОК
                                </h1>

                                <div className="text-white space-y-2">
                                    <p className="text-xl md:text-2xl font-bold max-[425px]:text-[14px] max-[425px]:leading-[1.2]">
                                        ДЛЯ УЧАСТИЯ В АКЦИИ
                                        <br />
                                        ЗАКАЖИТЕ КУХНЮ ОТ 6000Р И ТЕХНИКУ:
                                    </p>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-hidden mb-8 border-y border-[#FFD700] shadow-lg">
                                {/* Table Header */}
                                <div className="grid grid-cols-2 bg-[#FFD700] text-black">
                                    <div className="py-3 px-4 font-bold text-[16px] border-r-2 border-[#E0B800] max-[425px]:text-[12px]">
                                        Покупка техники
                                    </div>
                                    <div className="py-3 px-4 font-bold text-[16px] text-center max-[425px]:text-[12px]">
                                        Подарок
                                    </div>
                                </div>

                                {/* Table Rows */}
                                <div className="bg-transparent text-white">
                                    <div className="grid grid-cols-2 ">
                                        <div className="py-3 px-4 text-[16px] border-r-[1px] border-[#FFD700] font-bold max-[425px]:text-[12px]">
                                            Духовой шкаф +
                                            <br />
                                            варочную поверхность
                                        </div>
                                        <div className="py-3 px-4 text-[16px] text-center font-bold max-[425px]:text-[12px]">
                                            Вытяжка Maunfeld Crosby Singl 60
                                            <br />
                                            или печь СВЧ Maunfeld MFSMO.20.7 SGB
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="py-3 px-4 text-[16px] border-r border-[#FFD700] font-bold max-[425px]:text-[12px]">
                                            Духовой шкаф +
                                            <br />
                                            варочная поверхность +
                                            <br />
                                            вытяжка
                                        </div>
                                        <div className="py-3 px-4 text-[16px] text-center font-bold max-[425px]:text-[12px]">
                                            Посудомоечная машина
                                            <br />
                                            Maunfeld MLP4249G02 Light Beam
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cost Information */}
                            <div className="space-y-5 text-center mb-8 max-[425px]:mb-4 max-[425px]:space-y-2">
                                <div>
                                    <p className="text-[#FFD700] font-bold text-lg md:text-2xl drop-shadow-md max-[425px]:text-[14px]">
                                        ВОЗМОЖНАЯ ВЫГОДА С УЧЁТОМ СКИДКИ ОТ 2100Р.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div>
                                <Button
                                    className="w-full py-[25px] h-[65px] text-black rounded-[8px] text-[20px] max-[425px]:h-[50px] max-[425px]:py-[15px]"
                                    classNameSpan="font-bold text-[20px] py-[30px] max-[425px]:text-[16px] max-[425px]:py-[20px]"
                                    title={"УЧАСТВОВАТЬ В АКЦИИ"}
                                    onClick={() => dispatch(setOpenCallbackModal(true, "Заявка на участие в акции"))}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <BoxWrapper className="lg:pt-0 mt-[20px]" title={t("Stocks")}>. */}
                {/* <div className="mb-8 space-y-3">
                        <div className="flex flex-col gap-2 text-[20px] font-medium">
                            <h2 className="text-2xl font-bold mb-4">Условия участия в Акции:</h2>
                            <p>Для участия в акции закажите кухню от 6000руб. и технику:</p>
                            <p className="ml-4">- Духовой шкаф + варочная поверхность, подарок - вытяжка Maunfeld Crosby Singl 60 или печь СВЧ Maunfeld MFSMO.20.7 SGB</p>
                            <p className="ml-4">- Духовой шкаф + варочная поверхность + вытяжка, подарок - посудомоечная машина Maunfeld MLP4249G02 Light Beam</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 gap-y-8">
                        <div className="flex flex-col gap-2">
                            <Image
                                className="w-full h-auto max-w-4xl mx-auto"
                                src="/assets/images/promotions/promotions-1.jpg"
                                alt="promotion-image"
                                width={0}
                                height={0}
                                sizes="100%"
                            />
                            <p className="text-xl lg:text-2xl font-semibold">
                                Акционное предложение
                            </p>
                        </div>
                    </div> */}

                {/* CTA Button at the bottom of the page */}
                {/* <div className="mt-10">
                        <Button
                            className="w-full md:max-w-md mx-auto py-[25px] h-[65px] text-black rounded-[8px] text-[20px] max-[425px]:h-[50px] max-[425px]:py-[15px]"
                            classNameSpan="font-bold text-[20px] py-[30px] max-[425px]:text-[16px] max-[425px]:py-[20px]"
                            title={"УЧАСТВОВАТЬ В АКЦИИ"}
                            onClick={() => dispatch(setOpenCallbackModal(true, "Заявка на участие в акции"))}
                        />
                    </div>
                </BoxWrapper> */}
            </Anchor>
        </main>
    )
} 