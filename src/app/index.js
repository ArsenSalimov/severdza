import Vue from 'vue';
import Router from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import store from './store/index'

import App from './App.vue';
import FeedPage from './pages/feed/FeedPage.vue';
import WardsPage from './pages/wards/WardsPage.vue';
import ContactsPage from './pages/contacts/ContactsPage.vue';

import './registerBoostrap';

const router = new Router({
    routes: [
        {path: '/', component: WardsPage},
        {path: '/feed', component: FeedPage},
        {path: '/contacts', component: ContactsPage},
    ]
});

Vue.use(Router);

export default function createApp() {
    return new Vue({
        router,
        store,
        render: h => h(App)
    });
}