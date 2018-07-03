<template>
    <div>
        <nav-bar/>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue';

    export default {
        name: 'app',
        components: {
            NavBar,
        },
    };
</script>