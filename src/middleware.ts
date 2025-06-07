import createMiddleware from "next-intl/middleware";
import { locales } from "./config";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  defaultLocale: "ru",
  localePrefix: "never",

  domains: [
    {
      domain: "drkitchen.by",
      defaultLocale: "ru",
      locales: ["ru"],
    },
    {
      domain: "drkitchen.pl",
      defaultLocale: "pl",
      locales: ["pl"],
    },
    {
      domain: "localhost",
      defaultLocale: "ru",

      locales: ["ru"],
    },

    {
      domain: "kitchen-nu.vercel.app",
      defaultLocale: "ru",
      locales: ["ru"],
    },
  ],
});

export const config = {
  matcher: [
    "/",
    "/((?!api|_next|_vercel|.*\\..*).*)",
    "/([\\w-]+)?/users/(.+)",
    "/(ru|pl)/:path*",
  ],
};
