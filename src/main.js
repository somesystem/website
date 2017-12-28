import Vue from 'vue'
import store from './store'
import router from './router'
import App from './app'
import FastClick from 'fastclick'
import Swiper from './modules/swiper'
import { dataFormat } from './modules/method'

Vue.component('swiper',Swiper);
Vue.filter('MonthAndDay', time => dataFormat(time,'MM-DD'));
Vue.filter('Year', time => dataFormat(time,'YYYY'));

new Vue({
    el: "#app",
    router,
    store,
    render: h=>h(App)
})

FastClick.attach(document.body);

