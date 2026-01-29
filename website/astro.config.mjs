import { defineConfig } from "astro/config";

export default defineConfig({
  site: "http://localhost:4321",
  publicDir: "../public",
  vite: {
    server: {
      fs: {
        allow: [".."],
      },
    },
  },
});
