<template>
    <div ref="container" :style="{height: `${imageLayouts.height}px`}">
        <div class="attachments">
            <div v-for="(attachment, index) in attachments"
                 :key="attachment.id"
                 class="attachment"
                 :style="{
                    left: `${imageLayouts.positions[index].x}px`,
                    top:  `${imageLayouts.positions[index].y}px`,
                    width: `${imageLayouts.positions[index].width}px`,
                    height: `${imageLayouts.positions[index].height}px`,
                 }">

                <b-image
                        fluid
                        v-if="attachment.type === 'photo'"
                        blank-color="#bbb"
                        :src="attachment.photo.url"/>

                <plyr v-else-if="attachment.type === 'video'">
                    <iframe :width="imageLayouts.positions[index].width"
                            :height="imageLayouts.positions[index].height"
                            :src="attachment.video.url"
                            allowfullscreen></iframe>
                </plyr>
            </div>

        </div>
    </div>
</template>

<script>
    let maxWidth = 1028;

    import {PlyrYoutube, PlyrVideo, Plyr} from 'vue-plyr'
    import 'vue-plyr/dist/vue-plyr.css'

    import * as layoutFixed from 'image-layout/layouts/fixed-partition';
    import * as layoutSingle from 'image-layout/layouts/single';
    import bEmbed from 'bootstrap-vue/es/components/embed/embed';

    import debounce from 'lodash/debounce';

    export default {
        name: 'Attachments',
        props: ['attachments'],
        components: {
            bEmbed,

            PlyrVideo,
            PlyrYoutube,
            Plyr
        },
        data() {
            return {
                imageLayouts: {
                    height: 0
                },
            }
        },
        methods: {
            calculateSize() {
                const attachments = this.attachments
                    .map(attachment => {
                            if (attachment.type === 'photo') {
                                const width = Math.min(attachment.photo.width, maxWidth);
                                return {width: width, height: attachment.photo.height};
                            } else {
                                const width = Math.min(attachment.video.width, maxWidth);
                                return {width: width, height: attachment.video.height || (maxWidth / 1.78)};
                            }
                        }
                    );

                if (attachments.length === 1) {
                    this.imageLayouts = layoutSingle(attachments, {
                        align: 'center',
                        containerWidth: maxWidth,
                        spacing: 10
                    });
                } else {
                    this.imageLayouts = layoutFixed(attachments, {
                        align: 'center',
                        containerWidth: maxWidth,
                        spacing: 10
                    });
                }
            },
        },
        created() {
            this.calculateSize();
        },
        mounted() {
            const callback =  () => {
                const width = this.$refs.container.clientWidth;
                if (width > 0) {
                    maxWidth = this.$refs.container.clientWidth;
                    this.calculateSize();
                }
            };

            callback();
            window.addEventListener('resize', debounce(callback, 100))
        }
    }
</script>

<style lang="less" scoped>
    .attachments {
        position: relative;
        display: flex;

        .attachment {
            position: absolute;

            .embed-attachment {
                width: 100%;
                height: auto;
                margin-top: auto;
                margin-bottom: auto;
            }
        }
    }
</style>