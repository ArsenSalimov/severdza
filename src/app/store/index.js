import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
    user: null
};

export default new Vuex.Store({
    state,
    actions,
    getters
});