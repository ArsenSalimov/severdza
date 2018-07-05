import Vue from 'vue';
import Router from 'vue-router';

import FeedPage from './feed/FeedPage.vue';
import WardsPage from './wards/WardsPage.vue';
import ContactsPage from './contacts/ContactsPage.vue';

Vue.use(Router);

export default function createRouter() {
    return new Router({
        routes: [
            {path: '/', component: WardsPage},
            {path: '/feed', component: FeedPage},
            {path: '/contacts', component: ContactsPage},
        ]
    });
}

