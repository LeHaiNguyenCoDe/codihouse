import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(router)
  app.use(i18n)
})
