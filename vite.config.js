import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/cecilia-immergreen-design-website/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          icons: [
            "react-icons/ci",
            "react-icons/bs",
            "react-icons/io",
            "react-icons/io5",
            "react-icons/lu",
            "react-icons/tb",
            "react-icons/go",
          ],
          templates: [
            "./src/templates/NestedMaskedComponent",
            "./src/templates/NestedMaskedComponentMini",
            "./src/templates/TopRightNestedMaskedComponent",
          ],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-icons"],
  },
});
