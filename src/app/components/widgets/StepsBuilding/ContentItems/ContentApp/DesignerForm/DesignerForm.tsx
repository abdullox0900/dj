"use client"

import { Button, TextField } from "@/app/components/ui"
import { setOpenDesignerModal } from "@/app/lib/features/main/mainSlice"
import { useAppDispatch } from "@/app/lib/hooks"
import axios from "axios"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify"

export const DesignerForm = () => {
  const [tel, setTel] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const t = useTranslations("Index")
  const locale = useLocale()
  const router = useRouter()

  const changeTelHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value)
  }

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const formHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!tel) {
      return toast.error(t("Fill in all the fields!"))
    }

    if (tel.includes("_"))
      return toast.error(t("Enter the phone number completely!"))

    setLoading(true)

    await axios
      .post("/api/designer", {
        tel,
        name,
        locale,
      })
      .then(async () => {
        dispatch(setOpenDesignerModal(false))
        // dispatch(setOpenFinishQuestions(true));

        router.push(`/form-finish`)

        setTel("")
        setName("")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <form className="flex flex-col gap-2.5" onSubmit={formHandler}>
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
        value={tel}
        onChange={changeTelHandler}
        type="tel"
        className="h-[50px]"
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
      />

      <Button
        className="min-h-[50px]"
        type="submit"
        title={
          isLoading
            ? t("Loading")
            : t("Order a free check-out") + " " + t("and get gift")
        }
        disabled={isLoading}

      />
    </form>
  )
}
