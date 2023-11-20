// vite.config.js
import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePluginRadar } from "vite-plugin-radar";
import { visualizer } from "rollup-plugin-visualizer";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePluginRadar({
      analytics: {
        id: "", // Your Google Analytics tracking ID (V4) qeg. G-XXXXXXXXXX
      },
    }),
    splitVendorChunkPlugin(),
    ViteMinifyPlugin({}),
    visualizer(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("react-github-readme-button")) {
            return "github-button";
          }
          if (id.includes("highlight.js")) {
            return "highlight.js";
          }
          if (id.includes("@apollo")) {
            return "@apollo";
          }
        },
      },
    },
  },
});
