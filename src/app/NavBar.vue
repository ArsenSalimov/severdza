<template>
    <b-navbar sticky toggleable="md" type="dark" variant="info">
        <b-navbar-brand :to="{name: 'home'}" class="d-flex" href="#">
            <img :src="logo" width="64" height="64">
            <span class="title align-middle">"Сердце Севастополя"<br>Социальная журналистика</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav-collapse">
            <b-navbar-nav class="w-75 mx-auto" fill tabs>
                <b-nav-item :to="{ name: 'home'}" exact>Главная</b-nav-item>
                <b-nav-item :to="{ name: 'feed'}">Новости</b-nav-item>
                <!-- <b-nav-item :to="{ name: 'wards'}">Подопечные</b-nav-item> -->
                <b-nav-item :to="{ name: 'contacts'}">Контакты</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import logo from './images/logo.png';
    import bCollapse from 'bootstrap-vue/es/components/collapse/collapse';
    import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';

    export default {
        name: 'NavBar',
        components: {
            bNavbarToggle,
            bCollapse
        },
        data() {
            return {
                logo
            }
        }
    };
</script>

<style lang="less" scoped>
    .title {
        display: block;
        margin-top: auto;
        margin-bottom: auto;

        @media (min-width: 1em) {
            font-size: 0.60em;
            margin-left: 10px;
        }

        @media (min-width: 800px) {
            font-size: 1em;
            margin-left: 25px;
        }
    }
</style>