<template>
    <div class="title text-center">
        <h1>{{title}}</h1>
        <p v-if="subTitle">{{subTitle}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Title',
        props: ['title', 'subTitle']
    }
</script>

<style lang="less" scoped>
    .title {
        margin: 42px;

        h1 {
            font-size: 44px;
            position: relative;
            display: inline-block;

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