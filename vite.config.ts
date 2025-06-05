import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://saganawski.github.io/website-upgrade-demo",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
