import Vue from 'vue';
import Router from 'vue-router';

import VueAlertify from 'vue-alertify';

import BootstrapVue from 'bootstrap-vue';
import {Form} from 'bootstrap-vue/es/components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import store from './app/store'

import App from './app/App.vue';
import FeedPage from './app/pages/feed/FeedPage.vue';
import WardsPage from './app/pages/wards/WardsPage.vue';
import ContactsPage from './app/pages/contacts/ContactsPage.vue';

const router = new Router({
    routes: [
        {path: '/', component: WardsPage},
        {path: '/feed', component: FeedPage},
        {path: '/contacts', component: ContactsPage},
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