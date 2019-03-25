import Vue from 'vue';

import './plugins/vuex';
import './plugins/vuetify';
import './plugins/vuelidate';
import './plugins/vuex-router-sync';
import wait from './plugins/vue-wait';

import App from './App.vue';
import router from './router';
import store from './store';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  wait,
  render: h => h(App)
}).$mount('#app');
