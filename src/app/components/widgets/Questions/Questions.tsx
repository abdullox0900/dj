"use client";

import axios from "axios";
import cn from "clsx";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, TextField } from "../../ui";
import { KitchenForm } from "./KitchenForm/KitchenForm";
import styles from "./Questions.module.css";
import { TimeSelect } from "./TimeSelect/TimeSelect";

const CHOOSE_ONE_OF_THE_ANSWER_OPTIONS = "Choose one of the answer options";
const CHOOSE_AT_LEAST_ONE_OPITON = "Choose at least one option";
const WHICH_SHAPE_WILL_YOUR_FUTURE_KITCHEN_BE =
  "Which shape will your future kitchen be?";
const DESCRIBE_THE_DIMENSIONS_OF_YOUR_KITCHEN =
  "Describe the dimensions of your kitchen";

type FormData = {
  shape: string;
  designReady: string;
  sizes: {
    a: string;
    b: string;
    c: string;
    len: string;
    s: string;
  };

  buyHardware: string;
  time: string;
  gift: string;

  commMethod: string;
  name: string;
  tel: string;
};

// gives you your current date
const today = new Date();
const yyyy = today.getFullYear();
let mm = (today.getMonth() + 1).toString(); // Months start at 0!
let dd = today.getDate().toString();

if (Number(dd) < 10) dd = "0" + dd;
if (Number(mm) < 10) mm = "0" + mm;

const formattedToday = dd + "." + mm + "." + yyyy;

const quizSteps = 5;

const getGiftImgUrl = (gift: string) => {
  if (gift === "Мойка" || gift === "Zlew") {
    return "/assets/images/questions/gifts/2.jpg";
  }

  if (gift === "Подсветка" || gift === "Podświetlenie") {
    return "/assets/images/questions/gifts/1.jpg";
  }

  if (gift === "Петли блюм" || gift === "Zawiasy Blum") {
    return "/assets/images/questions/gifts/gift-3-new.png";
  }

  return null;
};

export const Questions = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, control, setValue } =
    useForm<FormData>();
  const [isLoading, setLoading] = useState(false);
  const designReady = useWatch({ name: "designReady", control });
  const shapeName = useWatch({ name: "shape", control });
  const buyHardware = useWatch({ name: "buyHardware", control });
  const sizes = useWatch({ name: "sizes", control });
  const time = useWatch({ name: "time", control });
  const gift = useWatch({ name: "gift", control });
  const t = useTranslations("Index");
  const locale = useLocale();
  const router = useRouter();

  useEffect(() => {
    if (step == 2 && shapeName == undefined) {
      setStep((prev) => prev + 1);
    }
  }, [step, setStep, shapeName]);

  useEffect(() => {
    if (shapeName || time || gift || designReady)
      return setStep((prev) => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shapeName, gift, time, designReady, buyHardware]);

  useEffect(() => {
    setValue("sizes.a", "");
    setValue("sizes.b", "");
    setValue("sizes.c", "");
    setValue("sizes.len", "");
  }, [shapeName, setValue]);

  const formHandler = useCallback(
    async (data: FormData) => {
      if (!data.tel) {
        return toast.error(t("Fill in all the fields!"));
      }

      if (data.tel.includes("_"))
        return toast.error(t("Enter the phone number completely!"));

      setLoading(true);

      await axios
        .post("/api/questions", { ...data, locale })
        .then(() => router.push(`/quiz-finish`))
        .catch(() => {
          toast.error(t("Mistake Try again later"));
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [toast, router, setLoading],
  );

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (step < quizSteps) {
          return setStep((prev) => prev + 1);
        } else {
          return toast.error(t(CHOOSE_ONE_OF_THE_ANSWER_OPTIONS));
        }
      }
    },
    [shapeName, sizes, step, buyHardware, time, designReady],
  );

  const nextStepCb = useCallback(() => {
    setStep((prev) => {
      return prev <= quizSteps ? prev + 1 : prev;
    });
  }, [setStep]);

  const prevStepCb = useCallback(() => {
    setStep((prev) => {
      if (prev == 1) return prev;
      if (prev == 3 && shapeName == undefined) return 1;
      return prev - 1;
    });
  }, [setStep]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const quizStep2 = ({
    img_link,
    dimensions,
  }: {
    img_link: string;
    dimensions: { name: string; form_field_name: string }[];
  }) => {
    return (
      <>
        <div className="flex items-center gap-4 lg:gap-6 font-bold text-xl lg:text-2xl xl:text-3xl leading-normal">
          <p className="text-yellow-1 max-[450px]:text-[20px]">
            {t("question")} {step}/{quizSteps}
          </p>
          <p>{t("quiz-question-2")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-14">
          <Image
            className="w-full lg:h-[300px]"
            src={img_link}
            alt="size"
            width={0}
            height={0}
            sizes="100vw"
          />

          <div className="flex flex-col gap-6">
            {dimensions.map((dim, i) => (
              <div className="flex flex-col gap-3" key={i}>
                <p className="text-base lg:text-lg font-medium">
                  {t(dim.name)}:
                </p>
                <TextField
                  className="!bg-[#F9F9F9] !border-[#979797] [&>input]:placeholder:!text-black lg:[&>input]:!text-base lg:[&>input]:placeholder:!text-base h-[50px]"
                  placeholder={t("Write in the cm")}
                  hookFormData={{
                    register,
                    registerName: dim.form_field_name,
                  }}
                  type="number"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="py-[35px] lg:py-[45px]">
      <div className="container">
        <div
          className="flex flex-col gap-4 lg:gap-8 bg-white rounded-1 shadow-1 py-6 px-4 lg:px-10 lg:py-8"
          id="questions"
        >
          {step < quizSteps + 1 && (
            <h2 className="bg-yellow-2 rounded-2xl p-6 !text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
              {t.rich("questions-title", {
                spanBig: (chunks) => (
                  <span className="text-yellow-1 lg:text-3xl xl:text-4xl max-[420px]:text-1xl">
                    {chunks}
                  </span>
                ),
              })}
            </h2>
          )}

          <div>
            <form
              className="flex flex-col gap-5 lg:gap-10"
              onSubmit={handleSubmit(formHandler)}
            >
              {step === 1 && (
                <>
                  <div className="flex items-center gap-4 lg:gap-6 font-bold text-xl lg:text-2xl xl:text-3xl leading-normal">
                    <p className="text-yellow-1">
                      {t("question")} {step}/{quizSteps}
                    </p>
                    <p>{t("quiz-question-1")}</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-14">
                    <KitchenForm
                      className="[&>img]:h-[150px] [&>img]:lg:h-[220px] [&>img]:object-cover"
                      img="/assets/images/questions/forms/form-kitchen-1.png"
                      title={t("Direct")}
                      hookFormData={{
                        register,
                        registerName: "shape",
                      }}
                      name="shape"
                      active={watch("shape") === t("Direct")}
                    />
                    <KitchenForm
                      className="[&>img]:h-[150px] [&>img]:lg:h-[220px] [&>img]:object-cover"
                      img="/assets/images/questions/forms/form-kitchen-2.png"
                      title={t("Corner")}
                      hookFormData={{
                        register,
                        registerName: "shape",
                      }}
                      name="shape"
                      active={watch("shape") === t("Corner")}
                    />
                    <KitchenForm
                      className="[&>img]:h-[150px] [&>img]:lg:h-[220px] [&>img]:object-cover"
                      img="/assets/images/questions/forms/form-kitchen-3.png"
                      title={t("U-shaped")}
                      hookFormData={{
                        register,
                        registerName: "shape",
                      }}
                      name="shape"
                      active={watch("shape") === t("U-shaped")}
                    />
                    <KitchenForm
                      className="[&>img]:h-[150px] [&>img]:lg:h-[220px] [&>img]:object-cover"
                      img="/assets/images/questions/forms/4.jpg"
                      title={t("With the island")}
                      hookFormData={{
                        register,
                        registerName: "shape",
                      }}
                      name="shape"
                      active={watch("shape") === t("With the island")}
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  {watch("shape") === t("Direct") &&
                    quizStep2({
                      img_link: "/assets/images/questions/sizes/size-3.jpg",
                      dimensions: [
                        { name: "Length", form_field_name: "sizes.len" },
                      ],
                    })}

                  {watch("shape") === t("Corner") &&
                    quizStep2({
                      img_link: "/assets/images/questions/sizes/size-2.jpg",
                      dimensions: [
                        { name: "side-a", form_field_name: "sizes.a" },
                        { name: "side-b", form_field_name: "sizes.b" },
                      ],
                    })}

                  {watch("shape") === t("With the island") &&
                    quizStep2({
                      img_link: "/assets/images/questions/sizes/size-4.png",
                      dimensions: [
                        { name: "square", form_field_name: "sizes.s" },
                      ],
                    })}

                  {watch("shape") === t("U-shaped") &&
                    quizStep2({
                      img_link: "/assets/images/questions/sizes/size-4.png",
                      dimensions: [
                        { name: "side-a", form_field_name: "sizes.a" },
                        { name: "side-b", form_field_name: "sizes.b" },
                        { name: "side-c", form_field_name: "sizes.c" },
                      ],
                    })}
                </>
              )}

              {step === 3 && (
                <>
                  <div className="flex items-center gap-4 lg:gap-6 font-bold text-xl lg:text-2xl xl:text-3xl leading-normal">
                    <p className="text-yellow-1">
                      {t("question")} {step}/{quizSteps}
                    </p>
                    <p>{t("quiz-question-3")}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                    {[0, 1, 2].map((i) => (
                      <TimeSelect
                        key={i}
                        title={t(`quiz-variant-3-${i}`)}
                        hookFormData={{
                          register,
                          registerName: "designReady",
                        }}
                        name={`designReady`}
                        active={watch("designReady") === `variant-${i}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <div className="flex items-center gap-4 lg:gap-6 font-bold text-xl lg:text-2xl xl:text-3xl leading-normal">
                    <p className="text-yellow-1">
                      {t("question")} {step}/{quizSteps}
                    </p>
                    <p>{t("quiz-question-4")}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                    {[0, 1, 2].map((i) => (
                      <TimeSelect
                        key={i}
                        title={t(`quiz-variant-4-${i}`)}
                        hookFormData={{
                          register,
                          registerName: "buyHardware",
                        }}
                        name={`buyHardware`}
                        active={watch("buyHardware") === `variant-${i}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {step === 5 && (
                <>
                  <div className="flex items-center gap-4 lg:gap-6 font-bold text-xl lg:text-2xl xl:text-3xl leading-normal">
                    <p className="text-yellow-1">
                      {t("question")} {step}/{quizSteps}
                    </p>
                    <p>{t("quiz-question-5")}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                    {[0, 1, 2].map((i) => (
                      <TimeSelect
                        key={i}
                        title={t(`quiz-variant-5-${i}`)}
                        name="time"
                        hookFormData={{
                          register,
                          registerName: "time",
                        }}
                        active={watch("time") === t("The sooner the better")}
                      />
                    ))}
                  </div>
                </>
              )}

              {step === 6 && (
                <>
                  <div className="flex items-center gap-4 lg:gap-6 font-bold text-xl lg:text-2xl xl:text-3xl leading-normal">
                    <p className="text-center w-full lg:max-w-[520px] xl:max-w-[700px] mx-auto leading-normal">
                      {t(
                        "Done Your answers have been received and we have already started calculating",
                      )}
                    </p>
                  </div>

                  {watch("gift") && (
                    <div className="flex flex-col gap-3 md:flex-row md:gap-8 md:bg-[#FBFBFB] p-8 w-full items-center justify-center">
                      <Image
                        className="rounded-1 w-full sm:w-[150px] sm:h-[140px] md:object-cover"
                        src={getGiftImgUrl(watch("gift")) || "/"}
                        alt="gift"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />

                      <div className="flex flex-col gap-1 text-center md:text-left">
                        <p className="text-base lg:text-lg xl:text-xl">
                          {t("Your gift")}
                        </p>

                        <p className="text-lg lg:text-xl xl:text-2xl font-bold">
                          {watch("gift")}
                        </p>
                      </div>
                    </div>
                  )}

                  <p className="text-lg lg:text-xl xl:text-2xl font-bold text-center">
                    {t(
                      "Specify where it is more convenient for you to get the result?",
                    )}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-5">
                    <input
                      className="hidden"
                      type="radio"
                      id="mess1"
                      {...register("commMethod")}
                      value={"WhatsApp"}
                      name="commMethod"
                    />

                    <label
                      className={cn(
                        "w-full p-5 rounded-1 shadow-1 flex flex-col gap-2.5 items-center justify-center text-center cursor-pointer border-2 border-transparent",
                        styles.label,
                        {
                          "border-2 !border-yellow-2":
                            watch("commMethod") === "WhatsApp",
                        },
                      )}
                      htmlFor="mess1"
                    >
                      <div className="w-[63px] h-[63px] lg:w-[70px] lg:h-[70px] rounded-full bg-[#30CB4D] flex justify-center items-center">
                        <svg
                          className="w-[35px] h-[35px] lg:w-[30px] lg:h-[30px]"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1081_3861)">
                            <path
                              d="M17.4982 34.2712C14.2898 34.2712 11.2273 33.3962 8.60233 31.6462L2.769 33.542C2.47733 33.6878 2.18566 33.542 2.03983 33.3962C1.894 33.2503 1.74816 32.9587 1.894 32.667L3.78983 27.1253C1.894 24.3545 0.873163 21.0003 0.873163 17.6462C0.727329 8.31282 8.31066 0.729492 17.4982 0.729492C26.6857 0.729492 34.269 8.31282 34.269 17.5003C34.269 26.6878 26.6857 34.2712 17.4982 34.2712ZM8.74816 30.1878C8.894 30.1878 9.03983 30.1878 9.18566 30.3337C11.6648 31.9378 14.5815 32.8128 17.644 32.8128C26.1023 32.8128 32.9565 25.9587 32.9565 17.5003C32.9565 9.04199 25.9565 2.18783 17.4982 2.18783C9.03983 2.18783 2.18566 9.04199 2.18566 17.5003C2.18566 20.7087 3.2065 23.917 5.10233 26.542C5.24816 26.6878 5.24816 26.9795 5.24816 27.2712L3.644 31.9378L8.4565 30.4795C8.60233 30.1878 8.60233 30.1878 8.74816 30.1878ZM22.7482 27.2712C21.5815 27.2712 20.1232 26.8337 17.7898 25.9587C13.8523 24.3545 10.9357 20.7087 9.62316 18.8128L9.47733 18.667C8.74816 17.5003 7.43566 15.4587 7.43566 13.2712C7.43566 10.792 8.74816 9.47949 9.18566 8.89616C9.769 8.31282 10.4982 8.02116 11.3732 8.02116H11.8107C12.6857 8.02116 13.1232 8.31282 13.5607 9.33366L13.9982 10.2087C14.4357 11.2295 15.019 12.542 15.019 12.6878C15.3107 13.2712 15.3107 13.7087 15.019 14.1462C14.8732 14.4378 14.7273 14.7295 14.4357 15.0212C14.2898 15.167 14.144 15.3128 13.9982 15.4587C13.8523 15.6045 13.7065 15.7503 13.5607 15.8962C13.8523 16.042 13.7065 16.042 13.7065 16.042C14.4357 17.2087 15.3107 18.2295 16.1857 19.1045C17.7898 20.417 18.9565 21.0003 19.5398 21.292H19.6857C19.8315 21.292 19.8315 21.4378 19.9773 21.292C20.269 21.0003 20.7065 20.417 20.9982 19.8337L21.144 19.6878C21.5815 19.1045 22.1648 18.9587 22.4565 18.9587C22.6023 18.9587 22.894 18.9587 23.1857 19.1045C23.6232 19.2503 25.2273 19.9795 26.394 20.7087L26.6857 20.8545C27.1232 21.0003 27.4148 21.1462 27.5607 21.5837C27.8523 22.167 27.7065 23.4795 27.4148 24.3545C26.9773 25.667 25.2273 26.8337 23.769 27.1253C23.4773 27.1253 23.1857 27.2712 22.7482 27.2712ZM11.519 9.47949C11.0815 9.47949 10.644 9.62532 10.3523 9.77116C9.91483 10.2087 8.894 11.2295 8.894 13.1253C8.894 14.8753 10.0607 16.7712 10.644 17.5003L10.7898 17.6462C12.9773 20.8545 15.6023 23.1878 18.3732 24.3545C20.4148 25.2295 21.8732 25.667 22.7482 25.667C23.0398 25.667 23.3315 25.667 23.4773 25.5212C24.4982 25.2295 25.8107 24.5003 26.1023 23.7712C26.394 23.042 26.394 22.4587 26.394 22.167C26.2482 22.167 26.2482 22.0212 26.1023 22.0212L25.8107 21.8753C24.2065 21.0003 22.894 20.417 22.7482 20.417C22.6023 20.417 22.6023 20.2712 22.4565 20.5628L22.3107 20.7087C21.8732 21.292 21.4357 21.8753 21.144 22.3128C20.7065 22.7503 19.8315 22.8962 19.2482 22.6045H19.1023C18.519 22.3128 17.0607 21.7295 15.3107 20.2712C14.2898 19.3962 13.4148 18.2295 12.5398 16.917C11.9565 16.042 12.5398 15.3128 12.8315 15.0212C12.8315 14.8753 12.9773 14.5837 13.1232 14.4378C13.269 14.292 13.269 14.292 13.4148 14.1462C13.7065 13.8545 13.7065 13.8545 13.8523 13.5628C13.8523 13.5628 13.8523 13.417 13.8523 13.2712C13.7065 13.2712 13.1232 11.8128 12.6857 10.792L12.394 9.91699C12.2482 9.62532 12.1023 9.47949 12.1023 9.47949H11.9565C11.6648 9.47949 11.519 9.47949 11.519 9.47949Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1081_3861">
                              <rect width="35" height="35" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <p className="text-base lg:text-lg xl:text-xl">
                        WhatsApp
                      </p>
                    </label>

                    <input
                      className="hidden"
                      type="radio"
                      id="mess2"
                      {...register("commMethod")}
                      value={"Телефон"}
                      name="commMethod"
                    />

                    <label
                      className={cn(
                        "w-full p-5 rounded-1 shadow-1 flex flex-col gap-2.5 items-center justify-center text-center cursor-pointer border-2 border-transparent",
                        styles.label,
                        {
                          "border-2 !border-yellow-2":
                            watch("commMethod") === "Телефон",
                        },
                      )}
                      htmlFor="mess2"
                    >
                      <div className="w-[63px] h-[63px] lg:w-[70px] lg:h-[70px] rounded-full bg-yellow-2 flex justify-center items-center">
                        <svg
                          className="w-[35px] h-[35px] lg:w-[30px] lg:h-[30px]"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <path
                            d="M0.955199 14.847C0.336869 13.1768 -0.110887 11.4711 0.0241508 9.65873C0.109438 8.5429 0.528764 7.59053 1.3461 6.80873C2.2345 5.97008 3.07315 5.08878 3.94734 4.23591C5.0845 3.11297 6.51306 3.12008 7.65021 4.23591C8.35383 4.92531 9.05034 5.62893 9.74685 6.33255C10.422 7.00773 11.1043 7.68292 11.7795 8.36522C12.9664 9.56634 12.9735 10.9665 11.7866 12.1605C10.9338 13.0133 10.088 13.8733 9.22091 14.712C8.99348 14.9323 8.97216 15.1171 9.09298 15.3943C9.66156 16.7589 10.486 17.9742 11.4099 19.1114C13.272 21.3999 15.3758 23.4326 17.8846 25.0033C18.4248 25.3373 19.0147 25.586 19.5762 25.8917C19.8676 26.048 20.0594 25.9983 20.294 25.7566C21.1397 24.8824 22.0068 24.0225 22.8739 23.1625C24.0111 22.0395 25.4325 22.0324 26.5697 23.1625C27.9627 24.5413 29.3486 25.9272 30.7274 27.3202C31.8859 28.4858 31.8788 29.9144 30.7132 31.087C29.9243 31.8831 29.0927 32.6364 28.3536 33.468C27.2733 34.6762 25.9087 35.0742 24.3593 34.9889C22.0992 34.8681 20.0168 34.1147 18.0055 33.141C13.5421 30.9733 9.73263 27.967 6.54148 24.1717C4.18188 21.3572 2.2345 18.3011 0.955199 14.847ZM34.9989 17.3914C34.9989 7.80374 27.1951 0 17.6075 0V3.31197C25.3685 3.31197 31.6869 9.6303 31.6869 17.3914H34.9989ZM25.4752 17.3914H28.7871C28.7871 11.2294 23.7694 6.21172 17.6075 6.21172V9.52369C19.7112 9.52369 21.687 10.341 23.1724 11.8264C24.6578 13.3119 25.4752 15.2877 25.4752 17.3914Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <p className="text-base lg:text-lg xl:text-xl">
                        {t("Phone")}
                      </p>
                    </label>

                    <input
                      className="hidden"
                      type="radio"
                      id="mess3"
                      {...register("commMethod")}
                      value={"Telegram"}
                      name="commMethod"
                    />

                    <label
                      className={cn(
                        "w-full p-5 rounded-1 shadow-1 flex flex-col gap-2.5 items-center justify-center text-center cursor-pointer border-2 border-transparent",
                        styles.label,
                        {
                          "border-2 !border-yellow-2":
                            watch("commMethod") === "Telegram",
                        },
                      )}
                      htmlFor="mess3"
                    >
                      <div className="w-[63px] h-[63px] lg:w-[70px] lg:h-[70px] rounded-full bg-[#30A7E4] flex justify-center items-center">
                        <svg
                          className="w-[35px] h-[35px] lg:w-[30px] lg:h-[30px]"
                          width="31"
                          height="30"
                          viewBox="0 0 31 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1081_3893)">
                            <path
                              d="M29.771 2L0 13.6546V15.3392L8.52678 17.8866L11.2235 26.259L13.3761 26.2586L16.8468 22.8221L24.1734 28.03L25.5995 27.5049L31.0001 2.99822L29.771 2ZM24.1159 25.8078L14.4667 18.9491L13.3913 20.3659L15.3681 21.7711L12.5601 24.5008L10.3567 17.66L23.1192 10.2857L22.1879 8.7762L9.23763 16.259L2.97251 14.3873L28.8666 4.25053L24.1159 25.8078Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1081_3893">
                              <rect width="31" height="30" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <p className="text-base lg:text-lg xl:text-xl">
                        Telegram
                      </p>
                    </label>

                    <input
                      className="hidden"
                      type="radio"
                      id="mess4"
                      {...register("commMethod")}
                      value={"Viber"}
                      name="commMethod"
                    />

                    <label
                      className={cn(
                        "w-full p-5 rounded-1 shadow-1 flex flex-col gap-2.5 items-center justify-center text-center cursor-pointer border-2 border-transparent",
                        styles.label,
                        {
                          "border-2 !border-yellow-2":
                            watch("commMethod") === "Viber",
                        },
                      )}
                      htmlFor="mess4"
                    >
                      <div className="w-[63px] h-[63px] lg:w-[70px] lg:h-[70px] rounded-full bg-[#6F3FAA] flex justify-center items-center">
                        <svg
                          className="w-[35px] h-[35px] lg:w-[30px] lg:h-[30px]"
                          width="39"
                          height="41"
                          viewBox="0 0 39 41"
                          fill="none"
                        >
                          <path
                            d="M37.6945 10.2804V10.2339C37.2721 8.52284 36.1696 6.75454 34.7234 5.26545C33.0339 3.51863 30.8826 2.14767 28.8279 1.7038H28.785C22.6576 0.529722 16.3631 0.529722 10.2358 1.7038H10.1928C6.37701 2.53068 2.23547 6.51829 1.31195 10.2339V10.2804C0.177267 15.4317 0.177267 20.7682 1.31195 25.9194V25.9624C1.97059 28.6112 4.2615 31.3961 6.9032 33.0785C7.76593 33.6407 8.70503 34.0759 9.69167 34.3707V38.5159C9.69306 38.8471 9.79305 39.1705 9.9789 39.4447C10.1648 39.7189 10.428 39.9316 10.7352 40.0556C11.0424 40.1796 11.3795 40.2094 11.7037 40.1411C12.0278 40.0728 12.3243 39.9095 12.5553 39.672L16.7577 35.305C17.6669 35.3551 18.5833 35.3837 19.4925 35.3837C22.6048 35.3828 25.7101 35.088 28.7671 34.5032H28.81C32.6151 33.6727 36.7602 29.6851 37.6766 25.9695V25.9266C38.8182 20.7743 38.8243 15.4353 37.6945 10.2804ZM34.3691 25.1534C33.7534 27.5768 30.6105 30.5943 28.1084 31.1491C24.8586 31.7717 21.551 32.0417 18.2432 31.9545C18.211 31.9526 18.1788 31.958 18.149 31.9704C18.1192 31.9828 18.0927 32.0019 18.0714 32.0261L15.0037 35.1761L11.7392 38.523C11.6869 38.5782 11.6194 38.6165 11.5451 38.6328C11.4709 38.6491 11.3935 38.6428 11.323 38.6147C11.2524 38.5865 11.1919 38.5378 11.1493 38.4749C11.1067 38.412 11.084 38.3377 11.0841 38.2617V31.389C11.0842 31.3337 11.0649 31.2802 11.0296 31.2376C10.9943 31.1951 10.9452 31.1664 10.8908 31.1563C10.3689 31.0324 9.86579 30.8398 9.39456 30.5836C7.26831 29.4489 5.12417 27.1222 4.63019 25.1534C3.60701 20.4971 3.60701 15.6741 4.63019 11.0178C5.24229 8.60517 8.40303 5.59477 10.8872 5.03636C16.576 3.94787 22.4196 3.94787 28.1084 5.03636C29.4866 5.3442 31.0616 6.39301 32.2929 7.68164C33.3059 8.73045 34.0827 9.94034 34.3691 11.0285C35.3907 15.6814 35.3907 20.5005 34.3691 25.1534Z"
                            fill="white"
                          />
                          <path
                            d="M28.1982 25.5112C27.7331 26.5725 26.9336 27.4525 25.9216 28.0169C25.6041 28.1517 25.2745 28.2559 24.9372 28.3283C24.5542 28.2138 24.1891 28.135 23.8634 27.9954C21.1499 26.9395 18.6239 25.4541 16.3821 23.5962C15.7162 23.0283 15.0906 22.4147 14.51 21.7599C13.0762 20.1087 11.8721 18.2712 10.9305 16.2975C10.4723 15.3632 10.0857 14.3967 9.69195 13.4338C9.33399 12.5568 9.86377 11.6441 10.4079 10.989C10.9404 10.3815 11.5955 9.89354 12.3301 9.55719C12.5886 9.42728 12.8844 9.39196 13.1662 9.45734C13.448 9.52273 13.698 9.68469 13.8729 9.91514C14.7874 10.9427 15.5935 12.0618 16.2783 13.2549C16.494 13.6018 16.5679 14.0184 16.4846 14.4183C16.4013 14.8182 16.1672 15.1707 15.8309 15.4026C15.6519 15.5279 15.4729 15.6711 15.319 15.8107C15.1673 15.923 15.0364 16.0611 14.9324 16.2187C14.8427 16.3662 14.7882 16.5324 14.7733 16.7044C14.7584 16.8764 14.7835 17.0495 14.8465 17.2103C15.5373 19.111 16.5862 20.6967 18.154 21.81C18.6846 22.1851 19.2562 22.4986 19.8579 22.7442C20.2507 22.9579 20.6922 23.0664 21.1393 23.0592C21.9197 22.9662 22.1774 22.1035 22.7215 21.6596C22.9712 21.4551 23.2803 21.3367 23.6027 21.3219C23.9252 21.307 24.2438 21.3966 24.5113 21.5773C25.0912 21.9353 25.6496 22.3397 26.208 22.7335C26.7603 23.1104 27.292 23.5167 27.8009 23.9505C28.0388 24.1234 28.2089 24.3741 28.2814 24.6591C28.354 24.9442 28.3245 25.2456 28.1982 25.5112Z"
                            fill="white"
                          />
                          <path
                            d="M20.5265 8.35816H20.0684C20.2151 8.351 20.369 8.35816 20.5265 8.35816Z"
                            fill="white"
                          />
                          <path
                            d="M28.4481 19.0859C28.0902 19.0859 27.9148 18.7817 27.8897 18.4488C27.8432 17.7937 27.8074 17.1351 27.7179 16.4836C27.5632 15.3844 27.1803 14.3297 26.5939 13.3873C25.9912 12.4055 25.1891 11.5611 24.2395 10.9087C23.29 10.2564 22.2141 9.81056 21.0814 9.60013C20.566 9.50706 20.0398 9.48559 19.5207 9.43189C19.1914 9.3961 18.7583 9.37462 18.6867 8.96655C18.676 8.8873 18.6823 8.80667 18.7053 8.73006C18.7282 8.65346 18.7673 8.58263 18.8198 8.52232C18.8723 8.462 18.9371 8.4136 19.0098 8.38033C19.0826 8.34706 19.1615 8.32969 19.2415 8.32939C19.3274 8.32445 19.4134 8.32445 19.4992 8.32939C21.0639 8.34263 22.6011 8.74155 23.9747 9.49081C25.3484 10.2401 26.516 11.3165 27.3742 12.6248C28.0518 13.6794 28.5118 14.8587 28.7273 16.0934C28.8633 16.8666 28.9135 17.6613 28.9743 18.4488C28.9865 18.5259 28.9822 18.6048 28.9616 18.6802C28.941 18.7556 28.9046 18.8257 28.8549 18.886C28.8051 18.9462 28.7431 18.9952 28.673 19.0297C28.6029 19.0642 28.5262 19.0833 28.4481 19.0859Z"
                            fill="white"
                          />
                          <path
                            d="M26.5121 17.4142C26.5101 17.5205 26.4957 17.6262 26.4691 17.7292C26.4379 17.8327 26.3755 17.924 26.2905 17.9908C26.2055 18.0576 26.1019 18.0966 25.994 18.1024C25.886 18.1083 25.7789 18.0808 25.6871 18.0236C25.5954 17.9664 25.5235 17.8824 25.4812 17.7829C25.4418 17.6383 25.4237 17.4888 25.4275 17.339C25.4358 16.5384 25.2774 15.7448 24.9621 15.0087C24.8906 14.8512 24.8118 14.6902 24.7223 14.5362C24.2099 13.6531 23.4494 12.9399 22.5352 12.4852C21.9837 12.2248 21.3979 12.044 20.7956 11.9482C20.5307 11.9053 20.2658 11.8802 20.0009 11.8444C19.9319 11.841 19.8644 11.8234 19.8026 11.7928C19.7407 11.7622 19.6857 11.7193 19.6411 11.6666C19.5965 11.6139 19.5631 11.5526 19.5431 11.4866C19.5231 11.4205 19.5169 11.351 19.5248 11.2824C19.5249 11.2123 19.5397 11.1429 19.5685 11.0789C19.5972 11.0149 19.6391 10.9577 19.6915 10.9111C19.7439 10.8645 19.8056 10.8294 19.8725 10.8083C19.9394 10.7871 20.01 10.7804 20.0796 10.7885C21.1307 10.829 22.1604 11.0977 23.0972 11.576C24.2412 12.1516 25.1744 13.0736 25.764 14.2105C26.096 14.8743 26.3184 15.5875 26.4226 16.3224C26.4419 16.4183 26.4562 16.5151 26.4656 16.6124C26.4835 16.8272 26.4906 17.0419 26.5085 17.3068C26.5085 17.3319 26.5121 17.3641 26.5121 17.4142Z"
                            fill="white"
                          />
                          <path
                            d="M24.0599 16.9205C24.0397 17.0112 23.9927 17.0938 23.9251 17.1576C23.8574 17.2214 23.7722 17.2635 23.6805 17.2784H23.6017C23.4844 17.286 23.3679 17.2552 23.2697 17.1906C23.1715 17.126 23.0971 17.0312 23.0576 16.9205C23.0354 16.8618 23.0209 16.8004 23.0147 16.7379C22.9959 16.497 22.96 16.2578 22.9073 16.022C22.8009 15.5447 22.5297 15.1201 22.1413 14.8229C21.9535 14.688 21.7441 14.5863 21.522 14.5222C21.2392 14.4399 20.9421 14.4613 20.6629 14.3933C20.5249 14.3689 20.4022 14.2907 20.3217 14.176C20.2412 14.0613 20.2094 13.9193 20.2334 13.7812C20.26 13.6489 20.334 13.5309 20.4413 13.4492C20.5487 13.3675 20.6822 13.3277 20.8168 13.3374C22.4563 13.4555 23.6805 14.243 23.9955 16.0005C24.0279 16.1637 24.0506 16.3287 24.0635 16.4945C24.0835 16.6359 24.0823 16.7795 24.0599 16.9205Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <p className="text-base lg:text-lg xl:text-xl">Viber</p>
                    </label>
                  </div>

                  <div className="flex flex-col gap-2.5 lg:gap-6 w-full lg:max-w-[544px] lg:mx-auto">
                    <TextField
                      className="shadow-1 h-[50px]"
                      type="text"
                      placeholder={t("Name")}
                      icon={
                        <svg
                          className="w-[18px]"
                          width="18"
                          height="18"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_3371_403)">
                            <path
                              d="M15.0004 19.6445C10.8114 19.6445 7.40332 23.0526 7.40332 27.2416C7.40332 27.484 7.41522 27.7236 7.43765 27.96C9.70793 29.2901 12.2993 30.0001 15.0004 30.0001C17.7014 30.0001 20.2928 29.2901 22.5631 27.96C22.5855 27.7234 22.5974 27.484 22.5974 27.2416C22.5974 23.0526 19.1894 19.6445 15.0004 19.6445Z"
                              fill="#D2D2D2"
                            />
                            <path
                              d="M25.6066 4.39339C22.7735 1.56029 19.0068 0 15 0C10.9932 0 7.22649 1.56029 4.39339 4.39339C1.56029 7.22649 0 10.9932 0 15C0 19.0066 1.56029 22.7735 4.39339 25.6066C4.79668 26.0101 5.21965 26.3866 5.65887 26.7375C5.85548 23.0544 8.19237 19.9303 11.4452 18.5891C9.65721 17.4234 8.47275 15.4063 8.47275 13.1172C8.47275 9.51805 11.4008 6.58997 15 6.58997C18.5992 6.58997 21.5273 9.51805 21.5273 13.1172C21.5273 15.4063 20.3428 17.4234 18.5548 18.5891C21.8076 19.9303 24.1445 23.0544 24.3411 26.7375C24.7803 26.3866 25.2033 26.0099 25.6066 25.6066C28.4397 22.7735 30 19.0066 30 15C30 10.9932 28.4397 7.22649 25.6066 4.39339Z"
                              fill="#D2D2D2"
                            />
                            <path
                              d="M19.7693 13.1171C19.7693 10.487 17.6298 8.34766 14.9999 8.34766C12.3701 8.34766 10.2305 10.4872 10.2305 13.1171C10.2305 15.7469 12.3701 17.8865 14.9999 17.8865C17.6298 17.8865 19.7693 15.7469 19.7693 13.1171Z"
                              fill="#D2D2D2"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3371_403">
                              <rect width="30" height="30" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      }
                      hookFormData={{ register, registerName: "name" }}
                    />

                    <TextField
                      icon={
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1081_3910)">
                            <path
                              d="M0.436662 6.78721C0.153997 6.02368 -0.050691 5.24392 0.0110404 4.41542C0.0500286 3.90532 0.241721 3.46995 0.615358 3.11256C1.02149 2.72918 1.40487 2.3263 1.8045 1.93642C2.32434 1.42307 2.9774 1.42632 3.49724 1.93642C3.81889 2.25157 4.1373 2.57322 4.4557 2.89488C4.76436 3.20353 5.07627 3.51219 5.38492 3.8241C5.92751 4.37318 5.93076 5.01324 5.38817 5.55908C4.99829 5.94896 4.61166 6.34209 4.21527 6.72547C4.11131 6.82619 4.10156 6.91067 4.15679 7.03738C4.41671 7.66119 4.7936 8.21677 5.21597 8.73662C6.06722 9.7828 7.02893 10.712 8.17583 11.4301C8.42276 11.5828 8.69243 11.6965 8.9491 11.8362C9.08231 11.9077 9.17003 11.8849 9.27725 11.7745C9.66388 11.3748 10.0603 10.9817 10.4566 10.5886C10.9765 10.0752 11.6263 10.072 12.1461 10.5886C12.7829 11.2189 13.4165 11.8524 14.0468 12.4892C14.5764 13.0221 14.5732 13.6751 14.0403 14.2112C13.6797 14.5751 13.2995 14.9195 12.9616 15.2996C12.4678 15.852 11.844 16.0339 11.1357 15.9949C10.1025 15.9397 9.15054 15.5953 8.23107 15.1502C6.19068 14.1592 4.4492 12.7849 2.99039 11.0499C1.91172 9.76331 1.02149 8.36623 0.436662 6.78721ZM15.9995 7.95036C15.9995 3.56743 12.432 0 8.04912 0V1.51404C11.5971 1.51404 14.4854 4.40242 14.4854 7.95036H15.9995ZM11.6458 7.95036H13.1598C13.1598 5.13345 10.866 2.83964 8.04912 2.83964V4.35369C9.01083 4.35369 9.91406 4.72733 10.5931 5.40637C11.2722 6.08542 11.6458 6.98864 11.6458 7.95036Z"
                              fill="#9B9B9B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1081_3910">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      }
                      type="tel"
                      hookFormData={{ register, registerName: "tel" }}
                      className="shadow-1 h-[50px]"
                    />

                    <Button
                      type="submit"
                      title={
                        isLoading ? t("Loading") : t("Get the calculation")
                      }
                      disabled={isLoading}
                      className="h-[50px]"
                    />
                  </div>
                </>
              )}

              <div className="grid grid-cols-2 sm:flex justify-center items-center gap-6 lg:gap-8 lg:justify-between w-full">
                <button
                  className="text-sm lg:text-base border rounded-xl py-2.5 min-[370px]:px-5"
                  onClick={prevStepCb}
                  type="button"
                >
                  {t("Previous question")}
                </button>
                {step !== quizSteps + 1 && (
                  <Button
                    className={cn(
                      "w-full min-w-full max-w-max sm:max-w-max sm:min-w-max !text-sm lg:!text-base !text-wrap !whitespace-normal",
                    )}
                    type="button"
                    title={t("Next question")}
                    onClick={nextStepCb}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
