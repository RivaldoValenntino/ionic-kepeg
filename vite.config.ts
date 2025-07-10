import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "SIMPRO",
        short_name: "Sistem Informasi Produksi",
        description: "Aplikasi Sistem Informasi Produksi Kahuripan",
        theme_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "icon-192.webp",
            sizes: "192x192",
          },
          {
            src: "icon-256.webp",
            sizes: "256x256",
          },
          {
            src: "icon-512.webp",
            sizes: "512x512",
          },
        ],
      },
      devOptions: {
        enabled: true, // 👈 This enables PWA in development mode
        type: "module",
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
