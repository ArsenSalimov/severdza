<template>
    <div id="app">
        <nav-bar/>
        <b-container>
            <router-view></router-view>
        </b-container>

    </div>
</template>

<script>
    import NavBar from './NavBar.vue';
    import AppFooter from './Footer.vue';

    export default {
        name: 'app',
        components: {
            NavBar,
            AppFooter,
        },
    };
</script>

<style lang="less">
    * {
        font-family: 'Fira Sans', sans-serif;
    }
</style>