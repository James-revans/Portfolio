import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import SmoothScroll from 'smooth-scroll';

//import sal from 'sal.js'

Vue.use(BootstrapVue);
//Vue.use(sal);

var scrollproject = new SmoothScroll('a[href*="#projects"]', {speed: 1400,});
var scrollabout = new SmoothScroll('a[href*="#about"]', {speed: 500,});
var scrollcontact = new SmoothScroll('a[href*="#contact"]', {speed: 500,});

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/scss/all.scss';
//import 'sal.js/dist/sal.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
