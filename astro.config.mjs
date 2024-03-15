import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    sanity({
      projectId: "ghz527nf",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: "/studio",
    }),
    react(),
  ],
});