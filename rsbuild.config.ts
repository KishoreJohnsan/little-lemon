import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/rspack";

export default defineConfig({
  output: {
    assetPrefix: '/little-lemon/',
  },
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [
        tanstackRouter({
          target: "react",
          autoCodeSplitting: true,
        }),
      ],
    },
  },
   html: {
    template: './public/index.html',
    title: 'Little Lemon | Authentic Mediterranean Dining',
    favicon: './src/assets/littlelemon.svg',
    meta: {
      description: 'Discover the rich flavors of the Mediterranean at our family-owned restaurant. Enjoy traditional recipes with a modern twist, fresh daily specials, and warm hospitality in a cozy, elegant setting.',
    },
  },
});
