// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePluginRadar } from "vite-plugin-radar";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePluginRadar({
      analytics: {
        id: "", // Your Google Analytics tracking ID (V4) qeg. G-XXXXXXXXXX
      },
    }),
  ],
});
