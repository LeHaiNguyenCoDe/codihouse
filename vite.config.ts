import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Sử dụng import.meta.env để đọc biến môi trường trong Vite
  const lang = process.env.LANG || 'vi' // Hoặc dùng import.meta.env.LANG nếu chạy trong môi trường dev

  return {
    plugins: [vue(), UnoCSS()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // Cấu hình alias để tránh lỗi import "@/lang/vi"
      },
    },
    base: "/",
    build: {
      manifest: true,
      outDir: `dist-${lang}`, // Xuất file vào thư mục tương ứng với ngôn ngữ
    },
  }
})
