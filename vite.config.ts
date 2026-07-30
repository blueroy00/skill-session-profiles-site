import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/skill-session-profiles-site/",
  plugins: [react()],
});
