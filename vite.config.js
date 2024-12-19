import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  extensions: ['.js', '.vue', '.ts'],
  resolve: {
    alias: [
      {
        find: "/@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "ScriptEcho/lib",
        replacement: resolve(__dirname, "src"),
      },
    ]
  }
})
