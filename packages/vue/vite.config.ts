import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import presetWind from "@unocss/preset-wind";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetWind()],
    }),
    FullReload(["**/*"]),
  ],
});
