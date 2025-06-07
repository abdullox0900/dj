"use client"

import { useOutside } from "@/app/hooks"
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks"
import axios from "axios"
import cn from "clsx"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { toast } from "react-toastify"
import {
  main,
  setOpenCallbackModal,
} from "../../../lib/features/main/mainSlice"
import { Button, TextField } from "../../ui"

export const CallbackModal = ({ title }: { title?: string }) => {
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const ref = useRef<HTMLDivElement>(null)
  const [isLoading, setLoading] = useState(false)
  const { isOpenCallbackModal: isOpen, callbackModalTitle } = useAppSelector(main)
  const dispatch = useAppDispatch()
  const t = useTranslations("Index")
  const router = useRouter()
  const locale = useLocale()

  useOutside(ref, () => dispatch(setOpenCallbackModal(false)))

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const changeTelHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value)
  }

  const formHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!tel) return toast.error(t("Fill in all the fields!"))

    if (tel.includes("_"))
      return toast.error(t("Enter the phone number completely!"))

    setLoading(true)

    await axios
      .post("/api/callback", {
        name,
        tel,
        locale,
      })
      .then(async () => {
        dispatch(setOpenCallbackModal(false))
        // dispatch(setOpenFinishQuestions(true));

        router.push(`/form-finish`)

        setName("")
        setTel("")
      })
      .catch(() => {
        toast.error(t("Mistake Try again later"))
      })
      .finally(() => {
        setLoading(false)
      })
  }

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
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto rounded-1 bg-white px-4 py-8 w-[calc(100%-30px)] max-w-[500px]"
        ref={ref}
      >
        {callbackModalTitle && <h4 className="text-center text-[18px] font-bold mb-4">{callbackModalTitle}</h4>}
        <form className="flex flex-col gap-2.5 lg:gap-6" onSubmit={formHandler}>
          <TextField
            className="h-[50px]"
            icon={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
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
            placeholder={t("Your name")}
            value={name}
            onChange={changeNameHandler}
          />

          <TextField
            className="h-[50px]"
            icon={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clipPath="url(#clip0_3371_400)">
                  <path
                    d="M0.818742 12.726C0.288745 11.2944 -0.0950457 9.83235 0.0207007 8.27891C0.0938037 7.32248 0.453227 6.50617 1.1538 5.83606C1.91529 5.11721 2.63413 4.36181 3.38344 3.63078C4.35814 2.66826 5.58262 2.67435 6.55733 3.63078C7.16043 4.2217 7.75743 4.8248 8.35444 5.4279C8.93317 6.00663 9.518 6.58536 10.0967 7.17018C11.1141 8.19972 11.1202 9.39983 10.1028 10.4233C9.37179 11.1543 8.64685 11.8914 7.90364 12.6103C7.7087 12.7991 7.69042 12.9575 7.79398 13.1951C8.28134 14.3647 8.988 15.4065 9.77995 16.3812C11.376 18.3428 13.1792 20.085 15.3297 21.4314C15.7927 21.7177 16.2983 21.9309 16.7796 22.1928C17.0293 22.3269 17.1938 22.2842 17.3948 22.0771C18.1198 21.3278 18.863 20.5907 19.6062 19.8536C20.5809 18.891 21.7993 18.8849 22.774 19.8536C23.968 21.0354 25.1559 22.2233 26.3378 23.4173C27.3308 24.4164 27.3247 25.6409 26.3256 26.646C25.6494 27.3283 24.9366 27.9741 24.3031 28.6868C23.3771 29.7225 22.2075 30.0636 20.8794 29.9905C18.9422 29.8869 17.1573 29.2412 15.4332 28.4066C11.6075 26.5486 8.34226 23.9717 5.60699 20.7186C3.58447 18.3062 1.91529 15.6867 0.818742 12.726ZM29.999 14.9069C29.999 6.68892 23.3101 0 15.0921 0V2.83883C21.7445 2.83883 27.1602 8.25455 27.1602 14.9069H29.999ZM21.8359 14.9069H24.6747C24.6747 9.62523 20.3738 5.32433 15.0921 5.32433V8.16317C16.8953 8.16317 18.5889 8.86374 19.8621 10.1369C21.1353 11.4102 21.8359 13.1037 21.8359 14.9069Z"
                    fill="#D2D2D2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3371_400">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            type="tel"
            placeholder={t("Phone number")}
            value={tel}
            onChange={changeTelHandler}
          />

          <Button
            type="submit"
            title={isLoading ? t("Loading") : t("Order a call")}
            disabled={isLoading}
            className="h-[50px]"
          />
        </form>
      </div>
    </div>
  )
}
