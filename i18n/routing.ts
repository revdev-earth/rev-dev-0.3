import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "de"],
  defaultLocale: "en",
  // Every locale is prefixed: /en/services, /es/services, /de/services
  localePrefix: "always",
});
