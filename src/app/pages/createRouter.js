import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './home/HomePage';

Vue.use(Router);

export default function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {name: 'home', path: '/', component: HomePage},
            //{name: 'wards', path: '/wards', component: () => import('./wards/WardsPage')},
            //{name: 'feed', path: '/feed', component: () => import('./feed/FeedPage')},
            {name: 'contacts', path: '/contacts', component: () => import('./contacts/ContactsPage')},
        ]
    });
}

