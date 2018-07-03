<template>
    <b-container>
        <b-row v-for="feedItem in feed"
               :key="feedItem.id">
            <feed-list-item
                    :feed-item="feedItem"
                    cols="auto"
                    class="m-2"/>
        </b-row>
    </b-container>
</template>

<script>
    import {mapState} from 'vuex';

    import bContainer from 'bootstrap-vue/es/components/layout/container';
    import bRow from 'bootstrap-vue/es/components/layout/row'
    import FeedListItem from "./FeedListItem.vue";

    export default {
        name: 'FeedPage',
        components: {
            FeedListItem,
            bContainer,
            bRow
        },
        computed: {
            ...mapState(['feed'])
        }
    };
</script>