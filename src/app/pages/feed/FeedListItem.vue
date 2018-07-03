<template>
    <b-card class="feed-list-item">
        <b-card-body>
            <p class="card-text" >{{decodedText}}</p>
            <b-img :src="feedItem.attachments.photo[0]"></b-img>
        </b-card-body>
    </b-card>
</template>

<script>
    import bLink from 'bootstrap-vue/es/components/link/link';
    import bCard from 'bootstrap-vue/es/components/card/card'
    import bCardBody from 'bootstrap-vue/es/components/card/card-body';
    import bImg from 'bootstrap-vue/es/components/image/img';

    import he from 'he';

    const DESCRIPTION_MAX_LENGTH = 150;

    export default {
        name: "FeedListItem",
        components: {
            bLink,
            bCard,
            bCardBody,
            bImg
        },
        props: ['feedItem'],
        computed: {
            decodedText() {
                return he.decode(this.feedItem.text)
            }
        }
    }
</script>

<style>
    .feed-list-item {
        white-space: pre-line;
    }
</style>