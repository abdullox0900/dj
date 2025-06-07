"use client";

import { Button } from "@/app/components/ui";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FaGift, FaPhoneAlt } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

export const QuizFinishScreen = () => {
  const t = useTranslations("Index");
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-50 py-10">
      <div className="container">
        <div className="rounded-2xl shadow-lg flex flex-col items-center gap-6 p-6 lg:p-10 bg-white max-w-2xl mx-auto border border-yellow-200">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full">
            <svg
              className="w-10 h-10"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              stroke="#FFFFFF"
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
          </div>

          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold">
              {t("Your request has been sent successfully")}
            </h2>
            <p className="text-gray-600 text-lg">
              {t("Thank you for your interest in our special offer!")}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mt-2">
            <FaGift className="text-yellow-500 text-xl" />
            <p className="font-medium">
              {t("We'll contact you soon to discuss your gift")}
            </p>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg w-full mt-2">
            <div className="flex items-center gap-3 mb-3">
              <MdCelebration className="text-yellow-500 text-2xl" />
              <h3 className="font-bold text-lg">{t("What happens next?")}</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">
                  1
                </span>
                <span>{t("Our specialist will call you within 24 hours")}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">
                  2
                </span>
                <span>
                  {t("We'll discuss your kitchen requirements and preferences")}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">
                  3
                </span>
                <span>
                  {t("You'll receive your chosen gift when ordering a kitchen")}
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
            <Button
              className="flex-1 !py-4"
              title={t("Back to Homepage")}
              onClick={() => router.push("/")}
            />
            <Button
              className="flex-1 !py-4 !bg-white !text-yellow-600 !border-yellow-400 !border-2 hover:!bg-yellow-50"
              title={t("Call Us")}
              onClick={() => (window.location.href = "tel:+123456789")}
              icon={<FaPhoneAlt className="ml-2" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
