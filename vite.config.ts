import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
    VitePWA({
      registerType: "prompt",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "باشگاه مشتریان",
        short_name: "باشگاه مشتریان مدیران خودرو",
        description: "داشبورد مدیریت باشگاه",
        theme_color: "#ffffff",
        start_url: ".",
        id: "/",
        display: "standalone",
        display_override: ["window-controls-overlay"],
        background_color: "#ffffff",
        orientation: "any",
        icons: [
          {
            src: "/src/assets/logo/Spidar.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/src/assets/logo/Spidar.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/src/assets/logo/Spidar.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/src/assets/logo/Spidar.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/src/assets/logo/Spidar.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/src/assets/logo/Spidar.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/src/assets/logo/Spidar.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/src/assets/logo/Spidar.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\./i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24, // 24 hours
              },
            },
          },
          {
            urlPattern: /\.(js|css|html)$/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources",
            },
          },
          {
            urlPattern: /\.(png|jpg|jpeg|svg|gif|webp)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,json,woff2}"],
        navigateFallback: null,
        navigateFallbackDenylist: [/^\/api/],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
