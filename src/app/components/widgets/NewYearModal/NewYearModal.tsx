"use client";

import { telRuMask } from "@/app/data";
import { main, setOpenNewYearModal } from "@/app/lib/features/main/mainSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { cn, formatDate, hashData } from "@/app/utils";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import styles from "./NewYearModal.module.css";

export const NewYearModal = () => {
  const { isOpenNewYearModal: isOpen } = useAppSelector(main);
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const t = useTranslations("Index");
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const [isCorrectTel, setIsCorrectTel] = useState(false);
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [season, setSeason] = useState<string>("");

  const onChangeTel = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value);

    if (!e.target.value.includes("_")) {
      setIsCorrectTel(true);
    } else {
      setIsCorrectTel(false);
    }
  };

  const close = () => {
    dispatch(setOpenNewYearModal(false));
  };

  const sendDataHandler = async () => {
    if (!tel) {
      return toast.error(t("Fill in all the fields!"));
    }

    if (tel.includes("_"))
      return toast.error(t("Enter the phone number completely!"));

    setLoading(true);

    await axios
      .post("/api/new-year", {
        tel,
        locale,
      })
      .then(async () => {
        close();

        router.push(`/form-finish`);

        setTel("");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let targetDate: Date;

    if (day <= 15) {
      targetDate = new Date(year, month, 15);
    } else {
      targetDate = new Date(year, month, daysInMonth);
    }

    if (month in [11, 0]) {
      setSeason("Новогодняя");
    } else if (month == 1) {
      setSeason("Зимняя");
    } else if (month >= 2 && month < 5) {
      setSeason("Весенняя");
    } else if (month >= 5 && month < 8) {
      setSeason("Летняя");
    } else if (month >= 8 && month < 11) {
      setSeason("Осенняя");
    }

    setTargetDate(targetDate);

    if (date > targetDate) return;

    dispatch(setOpenNewYearModal(true));
    window.localStorage.setItem("new-year-open", "true");
  }, [dispatch]);

  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 left-0 right-0 bg-black/20 ease-linear duration-200 z-[100]",
        {
          "opacity-0 pointer-events-none": !isOpen,
        },
      )}
    >
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto rounded-1 px-4 sm:px-0 py-6 sm:py-8 sm:pt-14 w-[calc(100%-30px)] max-w-[620px] bg-new-year-modal bg-no-repeat bg-cover text-black"
        ref={ref}
      >
        <div className="flex flex-col  gap-5">
          <div className="flex justify-between items-start gap-4 pt-0">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/assets/images/footer__logo.png"
              alt="DrKitchen"
              className="max-w-[180px] sm:max-w-[220px] w-full ml-[30px]"
            />

            <button
              className="absolute top-0 right-0 w-auto h-auto sm:w-10 sm:h-10 flex justify-center items-center rounded-full bg-[rgb(255,222,89)] hover:bg-yellow-2 active:opacity-80 ease-linear duration-200"
              onClick={close}
            >
              <IoClose color="#000" size={30} />
            </button>
          </div>

          <div>
            <h2 className="text-[rgb(0,74,173)] uppercase text-4xl font-semibold text-center">
              Вытяжка или свч печь?
            </h2>
            <div className="max-[340px]:ml-0 ml-[100px] sm:ml-6 sm:mt-[12px]">
              <p className="text-[rgb(0,74,173)] uppercase text-xl sm:text-5xl font-semibold text-center w-full max-[340px]:ml-0 -ml-[50px] sm:-ml-[15px] max-sm:mt-2">
                Какой подарок выберешь ты!?
              </p>

              <div className="px-3 py-1 rounded-[32px] bg-[rgb(255,222,89)] text-center max-[340px]:max-w-full max-w-[150px] sm:max-w-[168px] font-semibold mt-6 sm:ml-[130px] lg:ml-[100px] sm:text-[21px] leading-none">
                {season} акция до {targetDate && formatDate(targetDate)}
              </div>

              <div className="px-5 py-1 sm:px-[35px] sm:py-1.5 bg-[rgb(255,222,89)] w-full mt-4 flex flex-col text-xs sm:text-base font-semibold sm:max-w-[365px] rounded-[48px] sm:ml-[130px]">
                <span>Оставь номер телефона:</span>

                <InputMask
                  className="bg-transparent text-base sm:text-[26px]"
                  mask={telRuMask}
                  alwaysShowMask={true}
                  value={tel}
                  onChange={onChangeTel}
                />

                <span className="text-xs sm:text-sm ml-auto">
                  И нажми кнопку участвую
                </span>
              </div>

              <button
                className={cn(styles.button, {
                  [styles.active]: isCorrectTel,
                })}
                onClick={sendDataHandler}
                disabled={loading}
              >
                {loading ? "Загрузка..." : "Участвую!"}
              </button>

              <Link
                className="text-white text-xs ml-auto hover:text-white hover:underline flex justify-end mb-2 mr-[30px] max-sm:mt-2 max-sm:mb-0"
                href="/"
              >
                www.drkitchen.by
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
