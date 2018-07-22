<template>
    <div class="title text-center">
        <h1 v-if="main">{{title}}</h1>
        <h2 v-else>{{title}}</h2>

        <p v-if="subTitle">{{subTitle}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Title',
        props: {
            title: {},
            subTitle: {},
            main: {
                default: true
            }
        },
    }
</script>

<style lang="less" scoped>
    .title {
        margin: 42px;

        @media screen and (max-width: 500px) {
            margin: 21px;
        }

        h1, h2 {
            font-size: 44px;
            position: relative;
            display: inline-block;

            @media screen and (max-width: 500px) {
                font-size: 40px;
            }

            &:after {
                content: "";
                position: absolute;
                left: 0;
                width: 100%;
                height: 10px;
                display: inline-block;
                bottom: -5px;
                background-color: #ffdf5c;
            }
        }

        p {
            font-size: 16px;
            color: gray;
        }
    }
</style>