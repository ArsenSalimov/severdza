<template>
    <b-container>
        <b-row v-for="feedItem in feedItems" :key="feedItem.id">
            <feed-list-item
                    :feed-item="feedItem"
                    col lg="12"
                    class="m-2 mx-auto"/>
        </b-row>
        <infinite-loading v-if="showInfiniteLoader" @infinite="infiniteHandler">
            <div slot="no-more">
                На этом все :)
            </div>
        </infinite-loading>
    </b-container>
</template>

<script>
    import {mapActions} from 'vuex';
    import FeedListItem from './FeedListItem.vue';

    import InfiniteLoading from 'vue-infinite-loading';

    export default {
        name: 'FeedList',
        props: ['feedItems', 'fullLoaded'],
        components: {
            FeedListItem,
            InfiniteLoading
        },
        data() {
            return {
                showInfiniteLoader: false,
                requestInProcess: false,
                page: 0
            }
        },
        methods: {
            async infiniteHandler($state) {
                if (this.fullLoaded) {
                    $state.complete();
                    return;
                }

                if (this.requestInProcess) {
                    return;
                }
                this.requestInProcess = true;

                await this.loadFeedPage();

                $state.loaded();
                this.requestInProcess = false;
            },
            async loadFeedPage() {
                await this.loadFeed(this.page);
                this.page = this.page + 1;
            },
            ...mapActions(['loadFeed'])
        },
        mounted() {
            this.showInfiniteLoader = true;
        }
    };
</script>