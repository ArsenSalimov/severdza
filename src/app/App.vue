<template>
    <div>
        <nav-bar/>
        <b-container>
            <router-view></router-view>
        </b-container>

        <app-footer/>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue';
    import AppFooter from './Footer.vue';

    export default {
        name: 'app',
        components: {
            NavBar,
            AppFooter
        },
    };
</script>
