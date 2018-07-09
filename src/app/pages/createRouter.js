import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {path: '/', component: () => import('./wards/WardsPage.vue')},
            {path: '/feed', component: () => import('./feed/FeedPage.vue')},
            {path: '/contacts', component: () => import('./contacts/ContactsPage.vue')},
        ]
    });
}

