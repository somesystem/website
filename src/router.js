import Router from 'vue-router'

import home from './views/home'

const product = r => require.ensure([], () => r(require('./views/product')), 'product');
const newsList = r => require.ensure([], () => r(require('./views/news-list')), 'newsList');
const newsDetail = r => require.ensure([], () => r(require('./views/news-detail')), 'newsDetail');
const connect = r => require.ensure([], () => r(require('./views/connect')), 'connect');
const about = r => require.ensure([], () => r(require('./views/about')), 'about');

const routes = [{
    path: '/',
    redirect: '/home',
},{
    path: '/home',
    name: 'home',
    component: home,
    meta: {
        keepAlive: true // 是否缓存
    }
},{
    path: '/product',
    component: product,
    meta: {
        keepAlive: true
    }
},{
    path: '/newsList/:page?',
    name: 'newsList',
    component: newsList,
    meta: {
        keepAlive: false
    }
},{
    path: '/newDetail/:id?',
    name: 'newsDetail',
    component: newsDetail,
    meta: {
        keepAlive: false
    }
},{
    path: '/connect',
    component: connect,
    meta: {
        keepAlive: true
    }
},{
    path: '/about',
    component: about,
    meta: {
        keepAlive: true
    }
},{
    path: '*',
    name: "404",
    component: {
        template: "<div>404</div>"
    },
    meta: {
        keepAlive: true
    }
}];


export default new Router({
    mode: 'history',
    routes
});