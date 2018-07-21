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
        head: {
            title: 'Сердце Севастополя - Волонтерское движение',
            meta: [
                {
                    name: 'description',
                    content: 'Команда неравнодушных людей объединенных общей целью - ' +
                    'помогать тем кто нуждается в помощи и сделать мир вокруг лучше. Крым. Севастополь'
                },
                {
                    name: 'application-name',
                    content: 'Сердце Севастополя - Волонтерское движение'
                },
                {
                    name: 'keywords',
                    content: 'волонтеры, севастополь, крым, добровольны, помощь, поддержка, гуманитарная, фонд, ' +
                    'благотворительность, буффер, приют, добро'
                }
            ]
        }
    };
</script>

<style lang="less">
    * {
        font-family: 'Fira Sans', sans-serif;
    }
</style>