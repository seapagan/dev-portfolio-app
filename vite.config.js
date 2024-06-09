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

  const external = [
    "mathematica.js",
    "isbl.js",
    "1c.js",
    "maxima.js",
    "sqf.js",
    "gml.js",
  ];

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
      ViteMinifyPlugin({}),
      visualizer(),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            for (const e of external) {
              if (id.includes(e)) {
                return "extra-lang";
              }
            }
            if (id.includes("react-github-readme-button")) {
              return "github-button";
            }
            if (id.includes("highlight.js")) {
              return "highlight.js";
            }
            if (id.includes("@apollo")) {
              return "@apollo";
            }
            if (id.includes("graphql")) {
              return "graphql";
            }
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
    },
  };
});
