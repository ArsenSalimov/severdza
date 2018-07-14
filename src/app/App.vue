<template>
    <div id="app">
        <nav-bar/>
        <router-view></router-view>
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