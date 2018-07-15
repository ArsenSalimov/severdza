<template>
    <div :style="{height: `${imageLayouts.height}px`}">
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

                <b-embed v-else-if="attachment.type === 'video'"
                         type="iframe"
                         aspect="1by1"
                         controls
                         class="embed-attachment"
                         :src="attachment.video.url"
                />
            </div>

        </div>
    </div>
</template>

<script>
    const maxWidth = 1028;

    import * as layoutFixed from 'image-layout/layouts/fixed-partition';
    import * as layoutSingle from 'image-layout/layouts/single';
    import bEmbed from 'bootstrap-vue/es/components/embed/embed';

    export default {
        name: 'Attachments',
        props: ['attachments'],
        components: {
            bEmbed
        },
        data() {
            return {
                imageLayouts: {
                    height: 0
                }
            }
        },
        methods: {
            chooseSize(photo) {
                return photo.sizes.find(size => size.type === 'x');
            },
        },
        created() {
            const attachments = this.attachments
                .map(attachment => {
                        if (attachment.type === 'photo') {
                            return {width: attachment.photo.width, height: attachment.photo.height};
                        } else {
                            return {width: attachment.video.width, height: attachment.video.height};
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