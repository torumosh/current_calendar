import Vue from 'nativescript-vue'

import Home from './components/Home'

import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools, { host: '192.168.0.101'})

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
