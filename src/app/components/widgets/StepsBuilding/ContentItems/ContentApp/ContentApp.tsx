"use client"

import { Button, TextField } from "@/app/components/ui"
import axios from "axios"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { FaGift } from "react-icons/fa"
import { toast } from "react-toastify"
import { Socials } from "../../.."
import { DesignerForm } from "./DesignerForm/DesignerForm"

export const ContentApp = () => {
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setLoading] = useState(false)
  const t = useTranslations("Index")
  const locale = useLocale()
  const router = useRouter()

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const changeTelHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value)
  }

  const changeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const formHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!tel) {
      return toast.error(t("Fill in all the fields!"))
    }

    if (tel.includes("_"))
      return toast.error(t("Enter the phone number completely!"))

    setLoading(true)

    try {
      const reqData = {
        name,
        tel,
        file: file
          ? {
            name: file.name,
            content: await file
              .arrayBuffer()
              .then((buffer) => Buffer.from(buffer).toString("base64")),
            type: file.type,
          }
          : null,
        locale,
      }

      await axios
        .post("/api/calc", reqData)
        .then(() => router.push(`/form-finish`))

      // dispatch(setOpenFinishQuestions(true));
      router.push(`/form-finish`)
    } catch (err) {
      toast.error("Ошибка")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-5 lg:gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16">
        <div className="px-4 py-8 flex flex-col gap-5 shadow-1 rounded-1 bg-white text-base lg:text-lg font-semibold">
          <h6 className="text-center">
            {t("Make an appointment for a designer's departure")}
          </h6>

          <Image
            className="w-full -mb-5 max-w-[300px] mx-auto"
            src="/assets/images/person.png"
            alt="person"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
          />

          <DesignerForm />
        </div>

        <div className="px-4 py-8 flex flex-col gap-5 shadow-1 rounded-1 bg-white text-base lg:text-lg font-semibold">
          <h6 className="text-center">
            {t("Submit a project for calculation")}
          </h6>

          <Socials className="justify-center" />

          <p className="text-center">{t("or through the website")}</p>

          <form
            className="flex flex-col gap-2.5 mt-auto"
            onSubmit={formHandler}
            encType="multipart/form-data"
          >
            <TextField
              className="h-[50px]"
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
              value={name}
              onChange={changeNameHandler}
            />

            <TextField
              type="file"
              className="h-[50px]"
              placeholder={t("File")}
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.364 2.63602C13.6641 0.936176 11.404 0 9 0C6.59602 0 4.33593 0.936176 2.63602 2.63602C0.936176 4.33589 0 6.59598 0 9C0 11.404 0.936176 13.6641 2.63602 15.364C4.33593 17.0638 6.59602 18 9 18C11.404 18 13.6641 17.0638 15.364 15.364C17.0639 13.6641 18 11.404 18 9C18 6.59598 17.0638 4.33589 15.364 2.63602ZM14.2626 10.0064L10.2686 14.0003C9.50523 14.7637 8.50212 15.1456 7.49932 15.1456C6.49628 15.1456 5.49359 14.7639 4.73003 14.0003C3.99027 13.2606 3.58291 12.2771 3.58291 11.231C3.58291 10.1849 3.9903 9.20134 4.73003 8.46165L9.52291 3.66887C10.0492 3.14251 10.7491 2.85265 11.4934 2.85265C12.2378 2.85265 12.9375 3.14251 13.4639 3.66887C13.9903 4.1952 14.2802 4.89502 14.2802 5.63938C14.2802 6.38374 13.9903 7.08356 13.4639 7.60989L8.67097 12.4026C8.35801 12.7156 7.9419 12.888 7.49932 12.888C7.05674 12.888 6.64063 12.7156 6.32767 12.4026C6.01471 12.0897 5.84234 11.6736 5.84234 11.231C5.84234 10.7884 6.01471 10.3723 6.32767 10.0593L10.3216 6.06533C10.5275 5.85942 10.8614 5.85942 11.0674 6.06533C11.2733 6.27124 11.2733 6.60516 11.0674 6.8111L7.07344 10.8051C6.95967 10.9189 6.89699 11.0701 6.89699 11.231C6.89699 11.3919 6.95964 11.5431 7.0734 11.6568C7.1872 11.7706 7.33845 11.8333 7.49932 11.8333C7.6602 11.8333 7.81144 11.7707 7.9252 11.6569L12.7181 6.86408C13.0453 6.53692 13.2254 6.10196 13.2254 5.63934C13.2254 5.17672 13.0453 4.74177 12.7181 4.41461C12.0427 3.73929 10.944 3.73929 10.2686 4.41461L5.47576 9.20739C4.93523 9.74791 4.63757 10.4665 4.63757 11.231C4.63757 11.9954 4.93523 12.714 5.47576 13.2546C6.59155 14.3703 8.40709 14.3703 9.52288 13.2546L13.5168 9.26065C13.7227 9.05474 14.0566 9.05474 14.2626 9.26065C14.4685 9.46656 14.4685 9.80047 14.2626 10.0064Z"
                    fill="#D2D2D2"
                  />
                </svg>
              }
              onChange={changeFileHandler}
              fileUrl={file?.name}
            />
            <TextField
              className="h-[50px]"
              type="tel"
              placeholder={t("Phone number")}
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <g clipPath="url(#clip0_1116_4986)">
                    <path
                      d="M0.491245 7.63561C0.173247 6.77665 -0.0570274 5.89941 0.0124204 4.96735C0.0562822 4.39349 0.271936 3.9037 0.692278 3.50163C1.14917 3.07033 1.58048 2.61709 2.03006 2.17847C2.61489 1.60096 3.34957 1.60461 3.9344 2.17847C4.29626 2.53302 4.65446 2.89488 5.01266 3.25674C5.3599 3.60398 5.7108 3.95122 6.05804 4.30211C6.66845 4.91983 6.6721 5.6399 6.06169 6.25396C5.62308 6.69258 5.18811 7.13485 4.74218 7.56616C4.62522 7.67947 4.61425 7.7745 4.67639 7.91705C4.9688 8.61884 5.3928 9.24387 5.86797 9.8287C6.82562 11.0057 7.90754 12.051 9.19781 12.8588C9.4756 13.0306 9.77898 13.1585 10.0677 13.3157C10.2176 13.3961 10.3163 13.3705 10.4369 13.2463C10.8719 12.7967 11.3178 12.3544 11.7637 11.9121C12.3485 11.3346 13.0796 11.331 13.6644 11.9121C14.3808 12.6212 15.0936 13.334 15.8027 14.0504C16.3985 14.6498 16.3948 15.3845 15.7954 15.9876C15.3896 16.397 14.962 16.7844 14.5818 17.2121C14.0263 17.8335 13.3245 18.0382 12.5277 17.9943C11.3653 17.9322 10.2944 17.5447 9.25995 17.044C6.96451 15.9291 5.00535 14.383 3.36419 12.4312C2.15068 10.9837 1.14917 9.41201 0.491245 7.63561ZM17.9994 8.94415C17.9994 4.01335 13.9861 0 9.05526 0V1.7033C13.0467 1.7033 16.2961 4.95273 16.2961 8.94415H17.9994ZM13.1015 8.94415H14.8048C14.8048 5.77514 12.2243 3.1946 9.05526 3.1946V4.8979C10.1372 4.8979 11.1533 5.31824 11.9172 6.08217C12.6812 6.84609 13.1015 7.86223 13.1015 8.94415Z"
                      fill="#D2D2D2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1116_4986">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              value={tel}
              onChange={changeTelHandler}
            />

            <Button
              className="min-h-[50px]"
              type="submit"
              title={
                isLoading
                  ? t("Loading")
                  : t("Send a request") + " " + t("and get gift")
              }
              disabled={isLoading}
              icon={
                <FaGift
                  className="inline -translate-y-[1px] ml-2"
                  color="#f97316"
                />
              }
            />
          </form>
        </div>
      </div>
    </div>
  )
}
