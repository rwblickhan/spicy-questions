import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@shoelace-style/shoelace/dist/assets/**/*",
          dest: "./shoelace_assets"
        }
      ]
    })
  ],
  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    }
  }
});
