// vite.config.js
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

import { dependencies } from "./package.json";

function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach(key => {
    if (["react", "react-router-dom", "react-dom"].includes(key)) return;
    chunks[key] = [key];
  });

  return chunks;
}

export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-router-dom", "react-dom"],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  plugins: [react(), svgr()],
});
