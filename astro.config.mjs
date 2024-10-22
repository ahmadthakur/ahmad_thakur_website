// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://YOURNAME.site",
  markdown: {
    shikiConfig: {
      themes: {
        light: "snazzy-light",
      },
    },
  },

  output: "static",
  adapter: vercel(),
});
