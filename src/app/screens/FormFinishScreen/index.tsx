"use client"

import { Button } from "@/app/components/ui"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

export const FormFinishScreen = () => {
  const t = useTranslations("Index")
  const router = useRouter()

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="rounded lg:rounded-lg shadow-lg flex flex-col items-center gap-4 p-5 lg:p-8">
        <svg
          className="w-16 h-16"
          fill="#28ea1a"
          viewBox="0 0 24 24"
          stroke="#28ea1a"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M15.2928932,8.29289322 L10,13.5857864 L8.70710678,12.2928932 C8.31658249,11.9023689 7.68341751,11.9023689 7.29289322,12.2928932 C6.90236893,12.6834175 6.90236893,13.3165825 7.29289322,13.7071068 L9.29289322,15.7071068 C9.68341751,16.0976311 10.3165825,16.0976311 10.7071068,15.7071068 L16.7071068,9.70710678 C17.0976311,9.31658249 17.0976311,8.68341751 16.7071068,8.29289322 C16.3165825,7.90236893 15.6834175,7.90236893 15.2928932,8.29289322 Z"
            ></path>{" "}
          </g>
        </svg>

        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold text-center">
            {t("Your request has been sent successfully")}
          </h5>

          <p className="text-base text-center">
            {t("specialist-will-call")}
          </p>
        </div>

        <Button
          className="max-w-max min-w-[100px]"
          title={t("Back")}
          onClick={() => router.back()}
        />
      </div>
    </div>
  )
}
