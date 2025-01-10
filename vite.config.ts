import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
      fullInstall: false,
      compositionOnly: true,
    }),
    vueDevTools(),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
