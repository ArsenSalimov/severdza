<template>
    <b-container>
        <div class="title text-center">
            <h1>Контакты Сердца Севастополя</h1>
            <p>Как найти, позонить и к кому обратиться в волонтерском движении Сердце Севастополя</p>
        </div>

        <SocialNetworks :social-networks="socialNetworks"/>
        <volontiers-list :volontiers="volontiers"/>
    </b-container>
</template>

<script>
    import {mapState} from 'vuex';
    import VolontiersList from './VolontiersList.vue';
    import SocialNetworks from './SocialNetworks.vue';

    export default {
        name: 'ContactsPage',
        components: {
            SocialNetworks,
            VolontiersList,
        },
        computed: mapState(['volontiers', 'socialNetworks'])
    }
</script>

<style lang="less" scoped>
    .title {
        margin: 42px;

        h1 {
            font-size: 44px;
            position: relative;
            display: inline-block;

            &:after {
                content: "";
                position: absolute;
                left: 0;
                width: 100%;
                height: 10px;
                display: inline-block;
                bottom: -5px;
                background-color: #ffdf5c;
            }
        }

        p {
            font-size: 16px;
            color: gray;
        }
    }
</style>