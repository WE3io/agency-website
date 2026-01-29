import { defineConfig } from "astro/config";

export default defineConfig({
  site: "http://localhost:4321",
  vite: {
    server: {
      allowedHosts: "all",
      fs: {
        allow: [".."],
      },
    },
  },
});
