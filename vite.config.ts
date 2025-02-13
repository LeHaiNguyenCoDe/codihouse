import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  const lang = process.env.LANG || 'vi'

  return {
    plugins: [vue(), UnoCSS(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    base: "/",
    build: {
      manifest: true,
      outDir: `dist-${lang}`,
    },
  }
})
