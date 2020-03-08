import MyHeader from "./components/MyHeader";

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(VueRouter);
Vue.use(VueResource);


// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('MyHeader', require('./components/MyHeader.vue').default);


const router = new VueRouter({
    routes: Routes, // short for `routes: routes`
    mode: 'history'
})

const app = new Vue({
    el: '#app',
    render: h => h(MyHeader),
    router:router
});
