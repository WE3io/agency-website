import { defineConfig } from "astro/config";

export default defineConfig({
  site: "http://localhost:4321",
  publicDir: "../public",
  vite: {
    server: {
      port: 4321,
      strictPort: true,
      allowedHosts: true,
      fs: {
        allow: [".."],
      },
    },
  },
});
