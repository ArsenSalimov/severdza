<template>
    <div class="video-publications-section">
        <b-container class="video-publications">
            <div class="title">Видео публикации</div>

            <b-row>
                <b-col col md="4" class="publication" v-for="(videoPublication, index) in videoPublications" :key="index">
                    <video-publication :publication="videoPublication"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import VideoPublication from '../../components/VideoPublication';

    export default {
        name: 'VideoPublications',
        components: {VideoPublication},
        data() {
            return {
                videoPublications: [
                    {
                        url: 'https://www.youtube.com/embed/lC1Xkgw-IvU',
                        type: 'youtube'
                    },
                    {
                        url: 'https://www.youtube.com/embed/7EFCxKdfX_4',
                        type: 'youtube'
                    },
                    {
                        url: 'https://www.youtube.com/embed/o2SwXyFiJtU',
                        type: 'youtube'
                    },
                    {
                        url: 'https://www.youtube.com/embed/5l_7lKXjh-o',
                        type: 'youtube'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .video-publications-section {
        background: #f5f5f5;
        padding-top: 32px;
        padding-bottom: 32px;

        .video-publications {
            margin-top: 44px;

            .title {
                font-size: 28px;
                padding-left: 13px;
                padding-bottom: 35px;
            }

            .publication {
                margin: 25px
            }
        }
    }
</style>