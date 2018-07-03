<template>
    <feed-list :feed="feed"/>
</template>

<script>
    import {mapState} from 'vuex';
    import FeedList from './FeedList.vue';

    export default {
        name: 'FeedPage',
        components: {
            FeedList,
        },
        computed: {
            ...mapState(['feed'])
        }
    };
</script>