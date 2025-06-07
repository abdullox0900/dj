"use client";

// components/Marquiz.tsx
import { useEffect } from "react";

const Marquiz = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const script = document.createElement("script");
      script.async = true;
      script.src = "//script.marquiz.ru/v2.js";
      script.onload = () => {
        if (document.readyState !== "loading") {
          // @ts-ignore
          Marquiz.init({
            host: "//quiz.marquiz.ru",
            region: "ru",
            id: "6687db8468e9810026aef918",
            autoOpen: 20,
            autoOpenFreq: "always",
            openOnExit: false,
            disableOnMobile: false,
          });
        } else {
          document.addEventListener("DOMContentLoaded", () => {
            // @ts-ignore
            Marquiz.init({
              host: "//quiz.marquiz.ru",
              region: "ru",
              id: "6687db8468e9810026aef918",
              autoOpen: 20,
              autoOpenFreq: "always",
              openOnExit: false,
              disableOnMobile: false,
            });
          });
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  return null;
};

export default Marquiz;
