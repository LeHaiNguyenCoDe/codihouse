import { createI18n, I18n } from 'vue-i18n';
import vi from '@/lang/vi';
import en from '@/lang/en';


const i18n: I18n = createI18n({
    allowComposition: true,
    locale: 'vi',
    fallbackLocale: 'en',
    legacy: false,
    missingWarn: false,
    fallbackWarn: false,
    globalInjection: true,
    warnHtmlMessage: false,
    messages: {
        vi,
        en,
    }
});

export function handleLang(): string {
    let lang = i18n.global.locale as string;
    switch (lang) {
        case 'vi':
            return 'vi-VN';
        case 'en':
            return 'en-US';
        case 'jp':
            return 'ja-JP';
        default:
            return 'vi-VN';
    }
}

export default i18n;
