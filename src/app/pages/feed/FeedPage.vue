<template>
    <feed-list :feed-items="feedItems" :full-loaded="fullLoaded"/>
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
            ...mapState({
                feedItems: state => state.items,
                fullLoaded: state => state.fullLoaded,
            })
        },
        asyncData({ store }) {
            return store.dispatch('loadFeed')
        }
    };
</script>