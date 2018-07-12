<template>
    <div :style="{height: `${imageLayouts.height}px`}">
        <div class="photo-attachments">
            <b-image v-for="(photo, index) in photos"
                     :key="photo.id"
                     class="photo-attachment"
                     :src="chooseSize(photo).url"
                     :width="imageLayouts.positions[index].width"
                     :height="imageLayouts.positions[index].height"
                     :style="{
                    left: `${imageLayouts.positions[index].x}px`,
                    top:  `${imageLayouts.positions[index].y}px`,
                 }"
            />
        </div>
    </div>
</template>

<script>
    const maxWidth = 1028;

    import * as layoutFixed from 'image-layout/layouts/fixed-partition';
    import * as layoutSingle from 'image-layout/layouts/single';

    export default {
        name: 'PhotoAttachments',
        props: ['photos'],
        data() {
            return {
                imageLayouts: null
            }
        },
        methods: {
            chooseSize(photo) {
                return photo.sizes.find(size => size.type === 'x');
            },
        },
        mounted() {
            const photos = this.photos
                .map(photo => photo.sizes.find(size => size.type === 'x'))
                .map(photo => ({width: photo.width, height: photo.height}));

            if (photos.length === 1) {
                this.imageLayouts = layoutSingle(photos, {
                    align: 'center',
                    containerWidth: maxWidth,
                    spacing: 10
                });
            } else {
                this.imageLayouts = layoutFixed(photos, {
                    align: 'center',
                    containerWidth: maxWidth,
                    spacing: 10
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .photo-attachments {
        position: relative;
        display: flex;

        .photo-attachment {
            position: absolute;
        }
    }
</style>