<template>
    <div>
        <app-title title="Волонтерское движение 'Сердце Севастополя'" sub-title="Помощь людям в трудных жизненных обстоятельствах"/>

        <b-carousel
                class="carousel"
                indicators
                img-width="1200"
                img-height="400"
                controls>
            <b-carousel-slide class="carousel" v-for="(slide, index) in slides" :key="index">
                <img slot="img" class="image" :src="slide"/>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
    import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide';
    import AppTitle from '../../components/Title';

    export default {
        name: 'HomePage',
        components: {
            bCarousel,
            bCarouselSlide,
            AppTitle
        },
        data() {
            return {
                slides: [
                    'https://pp.userapi.com/c846321/v846321510/99929/F6azbi5AbnI.jpg',
                    'https://pp.userapi.com/c848416/v848416217/1e096/ULG7kLn9fgs.jpg',
                    'https://pp.userapi.com/c845523/v845523992/90340/0LyX7s22ipg.jpg',
                    'https://pp.userapi.com/c846018/v846018897/7c94d/hA6Jg02EXg0.jpg',
                    'https://pp.userapi.com/c850032/v850032910/c588/w0bWKOsA6PY.jpg'
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .carousel {
        height: 400px;

        .image {
            object-fit: scale-down;
            object-position: center;
            width: inherit;
            height: inherit;
        }
    }
</style>