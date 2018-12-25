import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    // base: '',
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-exact-active',
    scrollBehavior: () => { y: 0 },
    // fallback: '',
    routes: routes
})

export default router