<template>
    <div>
        <app-title title="Волонтерское движение “Сердце Севастополя“"
                   sub-title="Помощь людям в трудных жизненных обстоятельствах"/>

        <Carousel :slides="slides"/>
        <About class="section"/>
        <MediaNews class="media-news"/>
        <VideoPublications/>
        <LastNews :last-news="lastNews"/>
        <YouCanHelp/>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    import AppTitle from '../../components/Title';
    import MediaNews from './sections/MediaNews';
    import YouCanHelp from './sections/YouCanHelp';
    import LastNews from './sections/LastNews';
    import VideoPublications from './sections/VideoPublications';
    import About from './sections/About';
    import Carousel from './sections/Carousel';

    export default {
        name: 'HomePage',
        components: {
            Carousel,
            About,
            VideoPublications,
            LastNews,
            YouCanHelp,
            MediaNews,
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
    .media-news {
        @media (min-width: 1em) {
            margin-top: 15px;
        }

        @media (min-width: 800px) {
            margin-top: 75px;
        }
    }

    .section {
        @media (min-width: 1em) {
            padding-top: 16px;
        }

        @media (min-width: 800px) {
            padding-bottom: 64px;
        }

        padding-bottom: 32px;
    }
</style>