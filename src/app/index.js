import Vue from 'vue';
import App from './App.vue';

import './registerBoostrap';
import VueHead from 'vue-head';
import {createStore} from './store/index'
import createRouter from './pages/createRouter';

Vue.use(VueHead);

export default function createApp() {
    const store = createStore();
    const router = createRouter();

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    return {app, router, store}
}