import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "http://localhost:4321",
  publicDir: "../public",
  integrations: [icon()],
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
