import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // GitHub Pages serves this repo at /<repo-name>/, while the Hostinger
  // deployment lives at /saravanampatti/ — pick the right base per target.
  const base =
    command !== "build"
      ? "/"
      : process.env.GITHUB_ACTIONS
        ? "/Kayo-Schl-Coimbatore/"
        : "/saravanampatti/";

  return {
    base,
    plugins: [react()],
  };
});
