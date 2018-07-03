<template>
    <b-col>
        <div class="volontier">
            <b-link :href="volontier.vkProfile" target="_blank">
                <b-image rounded="circle"
                         width="148"
                         height="148"
                         center
                         class="volontier-image"
                         :src="volontier.photo"
                />
            </b-link>
            <div class="volontier-text-info">
                <b-link :href="volontier.vkProfile" target="_blank">{{volontier.name}}</b-link>
                <p>{{volontier.position}}</p>
                <p>{{volontier.phone}}</p>
            </div>
        </div>

    </b-col>
</template>

<script>
    import bCol from 'bootstrap-vue/es/components/layout/col';
    import bImage from 'bootstrap-vue/es/components/image/img';
    import bLink from 'bootstrap-vue/es/components/link/link';

    export default {
        name: "VolontiersListItem",
        props: ['volontier'],
        components: {
            bImage,
            bCol,
            bLink
        }
    }
</script>

<style lang="less" scoped>
    .volontier {
        cursor: pointer;
        text-align: center;

        .volontier-text-info {
            line-height: 1rem;

            a {
                display: block;
                font-size: 1.2em;
                margin-bottom: 10px;
                color: #0099f5;
                text-decoration: none;
            }

            p {
                margin: 0;
            }
        }

        .volontier-image {
            margin-bottom: 10px;

            object-fit: cover;
        }

        &:hover {
            .volontier-text-info {
                a {
                    color: #e42a32
                }
            }

            .volontier-image {
                opacity: .7;
            }
        }
    }
</style>