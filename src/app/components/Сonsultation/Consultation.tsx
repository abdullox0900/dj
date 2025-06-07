"use client"

import { PropsWithClassName } from "@/app/types"
import { formatDate } from "@/app/utils"
import axios from "axios"
import cn from "clsx"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChangeEvent, FC, FormEvent, useState } from "react"
import { FaGift } from "react-icons/fa"
import { toast } from "react-toastify"
import { Button, TextField } from "../ui"
import styles from "./Consultation.module.css"

const today = new Date()
const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

export const Consultation: FC<PropsWithClassName> = ({ className }) => {
  const [tel, setTel] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setLoading] = useState(false)
  const t = useTranslations("Index")
  const router = useRouter()
  const locale = useLocale()

  const changeTelHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value)
  }

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const formHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (tel.includes("_") || !name || !tel)
      return toast.error(t("Fill in all the fields!"))

    setLoading(true)

    await axios
      .post("/api/consultation", {
        tel,
        name,
        locale,
      })
      .then(async () => {
        // dispatch(setOpenFinishQuestions(true));

        router.push(`/form-finish`)
      })
      .catch(() => {
        toast.error(t("Mistake Try again later"))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className={cn(styles.wrapper, className)} id="consultation">
      <div className="container max-w-[1402px] flex flex-col relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10  mb-[30px] sm:mb-10">
          <div>
            <h2 className={styles.heading}>{t("Free consultation")}</h2>
            <p className={styles.desc}>
              {t("Consultation-text", {
                date: formatDate(lastDayOfMonth).slice(0, 5),
              })}
            </p>
          </div>

          <Image
            className="w-full sm:w-[130px] h-auto lg:w-[400px]"
            src="/assets/images/desk.webp"
            alt="desk"
            width={130}
            height={130}
            sizes="100vw"
          />
        </div>
        <form
          className="flex gap-5 lg:gap-[41px] justify-between items-end flex-col lg:flex-row"
          onSubmit={formHandler}
        >
          <div className="w-full">
            <h6 className={styles.label}>{t("Phone number")}</h6>
            <TextField
              type="tel"
              className={styles.input}
              value={tel}
              onChange={changeTelHandler}
            />
          </div>
          <div className="w-full">
            <h6 className={styles.label}>{t("Your name")}</h6>
            <TextField
              type="text"
              className={styles.input}
              placeholder={t("Enter the text")}
              value={name}
              onChange={changeNameHandler}
            />
          </div>
          <Button
            type="submit"
            title={
              isLoading
                ? t("Loading")
                : t("Free consultation") + " " + t("and get gift")
            }
            className={styles.button}
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
  )
}
