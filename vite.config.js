import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base: "./"` makes the build use relative asset paths, so it works
// whether GitHub Pages serves it from https://<user>.github.io/ (root)
// or https://<user>.github.io/<repo>/ (project page) — no need to hardcode
// the repo name here.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
