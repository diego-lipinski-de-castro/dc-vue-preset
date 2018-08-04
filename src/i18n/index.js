import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: process.env.VUE_APP_LANG,
	fallbackLocale: process.env.VUE_APP_LANG,
	messages: {}
})

export default i18n
