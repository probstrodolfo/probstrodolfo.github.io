import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = "https://probstrodolfo.github.io";

export default defineConfig({
  site,
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => page !== new URL("/404.html", site).href,
    }),
  ],
});
