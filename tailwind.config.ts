import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-orange-600": "#FF5F2D",

        "blue-1": "#30A7E4",

        "yellow-1": "#fecf29",
        "yellow-2": "#FFDD2D",
        "yellow-3": "#e4b91f",

        "green-1": "#30CB4D",

        "purple-1": "#6F3FAA",

        "gray-1": "#A8A8A8",
        "gray-2": "#707070",
        "gray-3": "#818181",

        "border-main": "#e4e4e4",
      },

      borderRadius: {
        "1": "10px",
      },

      boxShadow: {
        "1": "0 11px 33px 0 rgba(0, 0, 0, 0.1)",
      },

      backgroundImage: {
        'new-year-modal': "url('/assets/images/spring-promo.jpg')"
      }
    },
  },
  plugins: [],
};
export default config;
