// vite.config.js
import react from "@vitejs/plugin-react";

import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import eslint from "vite-plugin-eslint";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { VitePluginRadar } from "vite-plugin-radar";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      svgr(),
      VitePluginRadar({
        analytics: {
          id: `${env.VITE_GA_ID ?? ""}`,
          config: {
            cookie_flags: "SameSite=None;Secure",
          },
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
  };
});
