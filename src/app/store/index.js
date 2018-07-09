import Vue from 'vue';
import Vuex from 'vuex';

import contacts from './modules/contacts';
import feed from './modules/feed';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        contacts,
        feed
    }
});

if (module.hot) {
    module.hot.accept(['./modules/contacts', './modules/feed'], () => {
        const newContacts = require('./modules/contacts');
        const newFeed = require('./modules/feed');

        store.hotUpdate({
            modules: {
                contacts: newContacts,
                feed: newFeed
            },
        })
    })
}