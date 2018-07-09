<template>
    <b-card class="feed-list-item w-100">
        <b-card-body>
            <p class="card-text" >{{decodedText}}</p>
            <b-image v-if="feedItem.attachments" :src="feedItem.attachments.photo[0]"></b-image>
        </b-card-body>
    </b-card>
</template>

<script>
    import he from 'he';

    export default {
        name: 'FeedListItem',
        props: ['feedItem'],
        computed: {
            decodedText() {
                return this.feedItem.text //he.decode(this.feedItem.text)
            }
        }
    }
</script>

<style>
    .feed-list-item {
        white-space: pre-line;
    }
</style>