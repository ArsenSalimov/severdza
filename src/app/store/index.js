import Vue from 'vue';
import Vuex from 'vuex';

import feedState from './modules/feed/state';
import contactsState from './modules/contacts/state';

import * as feedActions from './modules/feed/actions';
import * as feedMutations from './modules/feed/mutations';

Vue.use(Vuex);

export function createStore() {
    const store = new Vuex.Store({
        state: {
            ...feedState,
            ...contactsState
        },
        actions: feedActions,
        mutations: feedMutations

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