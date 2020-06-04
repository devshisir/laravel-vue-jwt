
require('./bootstrap');
window.Vue = require('vue');

import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);



// import router
import router from './route/index'
// import vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './store/index'

const store = new Vuex.Store(
    storeData
 )



    // define navigation gurd

    router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
          if (!store.getters.loggedIn) {
            next({
              name: 'login',
            })
          } else {
            next()
          }
        } else if (to.matched.some(record => record.meta.requiresVisitors)) {
          if (store.getters.loggedIn) {
            next({
              name: 'user',
            })
          } else {
            next()
          }
        } else {
          next()
        }
      })














const app = new Vue({
    el: '#app',
    router,
    store,
});
