import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "..", // Look for index.html one level up from /client
  plugins: [react()],
  base: "/Portfolio/", // For GitHub Pages
  build: {
    outDir: "dist", // Output to /workspaces/Portfolio/dist
    emptyOutDir: true,
  },
});