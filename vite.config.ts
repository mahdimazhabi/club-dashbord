import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // برای به‌روزرسانی خودکار
      manifest: {
        name: "My React PWA", // نام اپلیکیشن
        short_name: "ReactPWA", // نام کوتاه اپلیکیشن
        description: "A Progressive Web App built with React and Vite", // توضیحات
        theme_color: "#ffffff", // رنگ تم
        icons: [
          {
            src: "/icons/icon-192x192.png", // مسیر آیکون 192x192
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png", // مسیر آیکون 512x512
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
