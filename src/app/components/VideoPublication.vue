<template>
    <div class="video">
        <b-embed :type="publication.type === 'youtube' ? 'iframe' : 'video'"
                 :src="publication.url"
                 controls
                 :poster="publication.preview"
                 allowfullscreen/>
    </div>
</template>

<script>
    import bEmbed from 'bootstrap-vue/es/components/embed/embed';

    export default {
        name: 'VideoPublication',
        props: ['publication'],
        components: {
            bEmbed
        }
    }
</script>

<style lang="less" scoped>
    .video {
        margin-bottom: 30px;
    }
</style>