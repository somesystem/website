import Vue from 'vue';
import store from './store';
import router from './router';
import App from './app';
import FastClick from 'fastclick';

new Vue({
    el: "#app",
    router,
    store,
    render: h=>h(App)
})

FastClick.attach(document.body);