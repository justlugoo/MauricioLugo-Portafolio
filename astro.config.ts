import { defineConfig } from "astro/config"
import config from "./data/config.json"

export default defineConfig({
  site: config.site.url,
  output: "static",
  trailingSlash: "never",
  build: { inlineStylesheets: "auto" },
})
