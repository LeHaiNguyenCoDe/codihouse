import {ViteSSG} from 'vite-ssg/single-page'
import App from './App.vue'
import i18n from './plugins/i18n'

try {
    if (typeof global != undefined) {
        global.__VUE_PROD_DEVTOOLS__ = false
    }
 } catch (e) {}

export const createApp = ViteSSG(
    App,
    ({app}) => {
        app.use(i18n)
    })
