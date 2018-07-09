<template>
    <b-navbar sticky toggleable="md" type="dark" variant="info">
        <b-navbar-brand href="#">
            <img :src="logo">
            <span>"Сердце Севастополя"</span>

        </b-navbar-brand>

        <b-navbar-nav class="w-75 mx-auto" fill tabs>
            <b-nav-item to="/">Главная</b-nav-item>
            <b-nav-item to="/feed">Истории</b-nav-item>
            <b-nav-item to="/">Наши подопечные</b-nav-item>
            <b-nav-item to="/contacts">Контакты</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
    import logo from './images/logo_small.png';

    export default {
        name: 'NavBar',
        data() {
            return {
                logo
            }
        }
    };
</script>