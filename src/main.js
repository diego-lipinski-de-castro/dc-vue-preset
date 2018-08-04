import Vue from 'vue'

Vue.config.silent = false
Vue.config.devtools = true
Vue.config.productionTip = true

Vue.config.keyCodes = {
  // v: 86,
  // f1: 112,
  // "media-play-pause": 179,
  // up: [38, 87]
}

// Vue.config.errorHandler = (err, vm, info) => {
//     console.log('------------------')
//     console.log('*** Vue error log ***')
//     console.error('err: ' + err)
//     console.warn('vm: ' + vm)
//     console.warn('info: ' + info)
//     console.log('------------------')
// }

// Vue.config.warnHandler = (msg, vm, trace) => {
//     console.log('------------------')
//     console.log('*** Vue warn log ***')
//     console.warn('msg: ' + msg)
//     console.warn('vm: ' + vm)
//     console.error('trace: ' + trace)
//     console.log('------------------')
// }

import store from './store'
import router from './router'

import { sync } from 'vuex-router-sync'
sync(store, router, { moduleName: 'router' })

import http from './http'
Vue.prototype.$http = http

import i18n from './i18n'

import * as filters from './utils/global/filters'
Object.keys(filters).forEach(filter => {
    Vue.filter(filter, filters[filter])
})

import * as directives from './utils/global/directives'
Object.keys(directives).forEach(directive => {
    Vue.directive(directive, directives[directive])
})

import * as mixins from './utils/global/mixins'
Object.keys(mixins).forEach(mixin => {
    Vue.mixin(mixin, mixins[mixin])
})

import * as utils from './utils/global/utils'
Vue.prototype.$utils = utils

import app from './app.vue'

new Vue({
    name: 'root',
    store,
    router,
    i18n,
    render: h => h(app)
}).$mount('#app')
