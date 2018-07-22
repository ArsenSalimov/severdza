<template>
    <div>
        <app-title title="Волонтерское движение “Сердце Севастополя“"
                   sub-title="Помощь людям в трудных жизненных обстоятельствах"/>

        <b-container>
            <b-carousel
                    class="carousel"
                    indicators
                    img-width="1200"
                    img-height="600"
                    controls>
                <b-carousel-slide class="carousel" v-for="(slide, index) in slides" :key="index">
                    <img slot="img" class="image" :src="slide"/>
                </b-carousel-slide>
            </b-carousel>
        </b-container>

        <MediaNews class="media-news"/>
        <VideoPublications />
        <LastNews :last-news="lastNews"/>
        <YouCanHelp/>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
    import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide';
    import AppTitle from '../../components/Title';
    import MediaNews from './MediaNews';
    import YouCanHelp from './YouCanHelp';
    import LastNews from './LastNews';
    import VideoPublications from './VideoPublications';

    export default {
        name: 'HomePage',
        components: {
            VideoPublications,
            LastNews,
            YouCanHelp,
            MediaNews,
            bCarousel,
            bCarouselSlide,
            AppTitle
        },
        computed: {
            ...mapState({
                feedItems: state => state.feed.items,
            })
        },
        data() {
            return {
                slides: [
                    '/images/F6azbi5AbnI.jpg',
                    '/images/pVl5NkD_8yo.jpg',
                    '/images/63fQVzVx8bQ.jpg',
                    '/images/64aqe8CcgcY.jpg',
                    '/images/w0bWKOsA6PY.jpg'
                ],
                lastNews: [
                    {},
                    {},
                    {},
                    {},
                ]
            }
        }
    }
</script>

<style lang="less">
    .carousel {
        height: 400px;

        &:focus {
            outline: none;
        }

        .image {
            object-fit: scale-down;
            object-position: center;
            width: inherit;
            height: inherit;
        }

        .carousel-control-next-icon {
            background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='#f00' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/></svg>") !important;
        }

        .carousel-control-prev-icon {
            background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='#f00' viewBox='0 0 8 8'><path d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/></svg>") !important;
        }
    }

    .media-news {
        margin-top: 75px;
    }
</style>