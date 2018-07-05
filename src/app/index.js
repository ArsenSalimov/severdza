import Vue from 'vue';

import store from './store/index'
import App from './App.vue';

import './registerBoostrap';
import createRouter from './pages/createRouter';

export default function createApp() {
    const router = createRouter();

    return new Vue({
        router,
        store,
        render: h => h(App)
    });
}