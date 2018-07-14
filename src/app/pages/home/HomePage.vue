<template>
    <div>
        <app-title title="Волонтерское движение 'Сердце Севастополя'"
                   sub-title="Помощь людям в трудных жизненных обстоятельствах"/>

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
                    'https://pp.userapi.com/c830709/v830709009/f0a1e/pVl5NkD_8yo.jpg',
                    'https://pp.userapi.com/c850020/v850020072/16c5e/63fQVzVx8bQ.jpg',
                    'https://pp.userapi.com/c846324/v846324101/7e03d/64aqe8CcgcY.jpg',
                    'https://pp.userapi.com/c850032/v850032910/c588/w0bWKOsA6PY.jpg'
                ]
            }
        }
    }
</script>

<style lang="less">
    .carousel {
        height: 600px;

        &:focus {
            outline: none;
        }

        .image {
            object-fit: scale-down;
            object-position: center;
            width: inherit;
            height: inherit;
        }
    }

    .carousel-control-next-icon {
        background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='#f00' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/></svg>") !important;
    }

    .carousel-control-prev-icon {
        background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='#f00' viewBox='0 0 8 8'><path d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/></svg>") !important;
    }
</style>