// vite.config.js
import react from "@vitejs/plugin-react";

import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import eslint from "vite-plugin-eslint";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { VitePluginRadar } from "vite-plugin-radar";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePluginRadar({
      analytics: {
        id: "", // Your Google Analytics tracking ID (V4) qeg. G-XXXXXXXXXX
      },
    }),
    eslint(),
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
