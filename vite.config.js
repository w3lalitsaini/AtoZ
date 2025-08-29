import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://atozmovies.in",
      changefreq: "weekly",
      priority: 0.8,
      // Static pages
      routes: ["/", "/genre"],
      // Dynamic routes (example slugs — replace with real ones)
      dynamicRoutes: [
        "/category/action",
        "/category/drama",
        "/genre/comedy",
        "/genre/thriller",
        "/tags/popular",
        "/tags/latest",
        "/Movie/inception",
        "/Movie/avatar-2",
      ],
    }),
  ],
});
