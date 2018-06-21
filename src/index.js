import Vue from 'vue';
import VueRouter from 'vue-router';

import BootstrapVue from 'bootstrap-vue';
import {Form} from 'bootstrap-vue/es/components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import store from './app/store'

import App from './app/App.vue';
import Photographers from './app/photographers/Photographers.vue';
import SignIn from './app/signin/SignIn.vue';

const router = new VueRouter({
    routes: [
        {path: '/photographers', component: Photographers},
        {path: '/sign-in', component: SignIn}
    ]
});

Vue.use(BootstrapVue);
Vue.use(Form);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});