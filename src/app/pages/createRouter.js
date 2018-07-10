import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {name: 'wards', path: '/', component: () => import('./wards/WardsPage.vue')},
            {name: 'feed', path: '/feed', component: () => import('./feed/FeedPage.vue')},
            {name: 'contacts', path: '/contacts', component: () => import('./contacts/ContactsPage.vue')},
        ]
    });
}

