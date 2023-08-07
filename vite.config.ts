import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./client",
  build: {
    // commonjsOptions: {
    //   include: [/node_modules/],
    // },
    outDir: "../dist/api/public",
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
