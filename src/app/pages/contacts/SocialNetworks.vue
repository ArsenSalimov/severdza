<template>
    <div class="my-5 social-networks">
        <h2 class="text-center mb-3">Мы в социальных сетях</h2>

        <b-row align-h="center">
            <b-col sm="2">
                <b-link :href="socialNetworks.vk" target="_blank">
                    <b-image :src="vkIcon" center width="75" height="75"/>
                </b-link>
            </b-col>

            <b-col sm="2">
                <b-link :href="socialNetworks.facebook" target="_blank">
                    <b-image :src="facebookIcon" center width="75" height="75"/>
                </b-link>
            </b-col>

            <b-col sm="2">
                <b-link :href="socialNetworks.instagram" target="_blank">
                    <b-image :src="instagramIcon" center width="75" height="75"/>
                </b-link>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import bContainer from 'bootstrap-vue/es/components/layout/container';
    import bRow from 'bootstrap-vue/es/components/layout/row';
    import bCol from 'bootstrap-vue/es/components/layout/col';
    import bImage from 'bootstrap-vue/es/components/image/img';
    import bLink from 'bootstrap-vue/es/components/link/link';

    import facebookIcon from '../../images/socialNetworks/facebook.svg';
    import vkIcon from '../../images/socialNetworks/vk.svg';
    import instagramIcon from '../../images/socialNetworks/instagram.svg';

    export default {
        name: "SocialNetworks",
        props: ['socialNetworks'],
        components: {
            bContainer,
            bRow,
            bCol,
            bImage,
            bLink
        },
        data() {
            return {
                facebookIcon,
                vkIcon,
                instagramIcon,
            }
        }
    }
</script>

<style lang="less" scoped>
    .social-networks {
        img:hover {
            opacity: .7;
            cursor: pointer;
        }
    }
</style>