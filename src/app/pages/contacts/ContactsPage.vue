<template>
    <b-container>
        <app-title title="Контакты Сердца Севастополя" sub-title="Как найти, позонить и к кому обратиться в волонтерском движении Сердце Севастополя"/>

        <SocialNetworks :social-networks="socialNetworks"/>
        <volontiers-list :volontiers="volontiers"/>
    </b-container>
</template>

<script>
    import {mapState} from 'vuex';
    import VolontiersList from './VolontiersList.vue';
    import SocialNetworks from './SocialNetworks.vue';
    import AppTitle from '../../components/Title';

    export default {
        name: 'ContactsPage',
        components: {
            SocialNetworks,
            VolontiersList,
            AppTitle
        },
        computed: mapState({
            volontiers: state => state.contacts.volontiers,
            socialNetworks: state => state.contacts.socialNetworks,
        })
    }
</script>

<style lang="less" scoped>

</style>