<template>
    <div class="last-news-section">
        <b-container class="last-news">
            <div class="title">Последие новости</div>

            <b-row>
                <b-col v-for="(post, index) in lastNews" :key="index">
                    <b-image width="245" height="163"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'LastNews',
        props: ['lastNews'],
    }
</script>

<style lang="less" scoped>
    .last-news-section {
        padding-top: 32px;
        padding-bottom: 32px;

        .last-news {
            margin-top: 44px;

            .title {
                font-size: 28px;
                padding-left: 13px;
                padding-bottom: 35px;
            }
        }
    }
</style>