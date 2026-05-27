import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "@/lib/site";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
