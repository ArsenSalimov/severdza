import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand'
import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';

import bContainer from 'bootstrap-vue/es/components/layout/container';
import bRow from 'bootstrap-vue/es/components/layout/row';
import bCol from 'bootstrap-vue/es/components/layout/col';

import bCard from 'bootstrap-vue/es/components/card/card'
import bCardBody from 'bootstrap-vue/es/components/card/card-body';

import bLink from 'bootstrap-vue/es/components/link/link';

import bImg from 'bootstrap-vue/es/components/image/img';

/* Navigation */
Vue.component('bNavbar', bNavbar);
Vue.component('bNavbarBrand', bNavbarBrand);
Vue.component('bNavbarNav', bNavbarNav);
Vue.component('bNavItem', bNavItem);

/* Layout */
Vue.component('bContainer', bContainer);
Vue.component('bRow', bRow);
Vue.component('bCol', bCol);

/* Cards */
Vue.component('bCard', bCard);
Vue.component('bCardBody', bCardBody);

/* Links */
Vue.component('bLink', bLink);

/* Images */
Vue.component('bImage', bImg);