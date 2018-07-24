<template>
    <b-container>
        <b-carousel
                class="carousel"
                indicators
                img-width="1200"
                img-height="600"
                controls>
            <b-carousel-slide class="carousel" v-for="(slide, index) in slides" :key="index">
                <b-image slot="img" class="image" :src="slide"/>
            </b-carousel-slide>
        </b-carousel>
    </b-container>
</template>

<script>
    import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
    import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide';

    export default {
        name: 'Carousel',
        props: ['slides'],
        components: {
            bCarousel,
            bCarouselSlide,
        }
    }
</script>

<style lang="less">
    .carousel {
        @media (min-width: 1em) {
            height: 250px;
        }

        @media (min-width: 800px) {
            height: 400px;
        }

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
</style>