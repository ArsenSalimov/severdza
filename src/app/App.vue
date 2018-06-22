<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-navbar-brand href="#">Wedding</b-navbar-brand>

            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#/sign-in">SignIn</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
    import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand'
    import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
    import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';

    export default {
        name: 'app',
        components: {
            bNavbar,
            bNavbarBrand,
            bNavbarNav,
            bNavItem,
        },
        data() {
            return {}
        }
    };
</script>