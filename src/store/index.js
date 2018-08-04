import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: (process.env.NODE_ENV === 'development') ? true : false,
    modules: {}
})

export default store
