import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import Icons from "unplugin-icons/vite";
import preprocess from "svelte-preprocess";
import staticAdapter from "@sveltejs/adapter-static";
import { resolve } from "path";
 
/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: staticAdapter(),
    amp: false,
    // appDir: '_app',
    files: {
      assets: "src/assets",
      // hooks: 'src/hooks',
      lib: "src/lib",
      routes: "src/routes",
      // serviceWorker: 'src/service-worker',
      template: "src/app.html",
    },
    inlineStyleThreshold: 100_000,
    // host: null,
    // hostHeader: null,
    paths: {
      assets: "",
      base: "",
    },
    prerender: {
      crawl: true,
      default: true,
      enabled: true,
      entries: ["*"],
    },
    vite: {
      plugins: [
        Icons({
          compiler: "svelte",
        }),
      ],
      resolve: {
        alias: {
          $data: resolve("./src/data"),
        },
      },
    },
  },
  preprocess: preprocess({
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano({
          preset: "default",
        }),
      ],
    },
  }),
};
