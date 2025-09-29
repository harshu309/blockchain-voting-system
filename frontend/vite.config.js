import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // dev server port
    open: true, // browser automatically open hoga
  },
  build: {
    outDir: "dist", // production build folder
  },
  resolve: {
    alias: {
      "@": "/src", // shortcut alias for src folder
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // dependency pre-bundling
  },
});
