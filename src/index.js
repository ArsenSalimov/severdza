import Vue from 'vue';
import Router from 'vue-router';

import VueAlertify from 'vue-alertify';

import BootstrapVue from 'bootstrap-vue';
import {Form} from 'bootstrap-vue/es/components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import store from './app/store'

import App from './app/App.vue';
import Photographers from './app/photographers/Photographers.vue';

const router = new Router({
    routes: [
        {path: '/photographers', component: Photographers},
        {path: '/sign-in', component: () => import('./app/auth/signIn/SignIn.vue')},
        {path: '/sign-up', component: () => import('./app/auth/signUp/SignUp.vue')},
    ]
});

Vue.use(VueAlertify);
Vue.use(BootstrapVue);
Vue.use(Form);
Vue.use(Router);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});