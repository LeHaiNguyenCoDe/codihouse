import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import path from 'path'

export default defineConfig(({mode}) => {
    const lang = process.env.LANG || 'vi'

    return {
        plugins: [vue(), UnoCSS()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        define: {
            __VUE_PROD_DEVTOOLS__: false,
        },
        base: "/",
        build: {
            manifest: true,
            outDir: `dist`,
        },
    }
})
