<template>
    <b-navbar sticky toggleable="md" type="dark" variant="info">
        <b-navbar-brand href="#">
            <img :src="logo">
            <span>"Сердце Севастополя"</span>

        </b-navbar-brand>

        <b-navbar-nav class="w-75 mx-auto" fill tabs>
            <b-nav-item href="#/">Главная</b-nav-item>
            <b-nav-item href="#/feed">Истории</b-nav-item>
            <b-nav-item href="#/">Наши подопечные</b-nav-item>
            <b-nav-item href="#/contacts">Контакты</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
    import logo from './images/logo_small.png';

    import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
    import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand'
    import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
    import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';

    export default {
        name: 'NavBar',
        components: {
            bNavbar,
            bNavbarBrand,
            bNavbarNav,
            bNavItem,
        },
        data() {
            return {
                logo
            }
        }
    };
</script>