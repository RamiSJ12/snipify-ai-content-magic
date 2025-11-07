import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ✅ Use relative paths for GitHub Pages
  base: "./",

  // Dev server settings
  server: {
    host: "::",
    port: 8080,
  },

  // Plugins
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  // Path aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Build output for GitHub Pages
  build: {
    outDir: "dist",       // Folder deployed by GitHub Actions
    emptyOutDir: true,    // Clean before building
    sourcemap: false,     // Optional, reduce size
  },
}));
