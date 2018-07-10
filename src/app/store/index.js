import Vue from 'vue';
import Vuex from 'vuex';

import contacts from './modules/contacts';
import feed from './modules/feed';

Vue.use(Vuex);

export function createStore() {
    const store = new Vuex.Store({
        modules: {
            feed,
            contacts,
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

    return store;
}