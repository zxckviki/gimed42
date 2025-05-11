import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  base: '/', //  Важно! Базовый URL (измените, если деплой в подпапку)
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Опционально: настройки для сервера разработки
  server: {
    historyApiFallback: true //  Для vue-router (чтобы все пути вели на index.html)
  },
  // Опционально: настройки сборки
  build: {
    outDir: 'dist', // Папка для результатов сборки
    assetsDir: 'assets', // Папка для статики (css/js/img)
    emptyOutDir: true // Очищать папку перед сборкой
  }
})
