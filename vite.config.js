import vue from "@vitejs/plugin-vue";

/**
 * @type {import('vite').UserConfig}
 */
export default {
  root: "app_client",
  plugins: [vue()],
  entry: "app_client/main.js",
  server: {
    cors: true,
  },
  build: {
    base: "../public/",
    target: "es2019",
    outDir: "../public/dist/",
    manifest: true,
    minify: "esbuild",
  },
};
