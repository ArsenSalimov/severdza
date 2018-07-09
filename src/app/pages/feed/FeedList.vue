<template>
    <b-container>
        <b-row v-for="feedItem in feedItems" :key="feedItem.id">
            <feed-list-item
                    :feed-item="feedItem"
                    col lg="12"
                    class="m-2 mx-auto"/>
        </b-row>
        <infinite-loading @infinite="infiniteHandler"/>
    </b-container>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import FeedListItem from './FeedListItem.vue';

    import InfiniteLoading from 'vue-infinite-loading';

    export default {
        name: 'FeedPage',
        components: {
            FeedListItem,
            InfiniteLoading
        },
        computed: {
            ...mapState({
                feedItems: state => state.feed.items
            })
        },
        methods: {
            async infiniteHandler($state) {
                await this.loadFeed();

                setTimeout(() => $state.loaded(), 5000)

            },
            ...mapActions(['loadFeed'])
        },
        async created() {
           // await this.loadFeed();
        }
    };
</script>