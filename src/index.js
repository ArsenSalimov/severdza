import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app/App.vue';
import Photographers from './app/photographers/Photographers.vue';

const router = new VueRouter({
    routes: [
        {path: '/photographers', component: Photographers}
    ]
});

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});