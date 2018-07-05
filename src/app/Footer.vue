<template>
    <footer class="footer">
        <b-container class="h-100">
            <b-row class="text-center align-items-center">
                <b-col>Расскажите о Сердце Севастополя</b-col>
                <b-col>2018&copy;</b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    };
</script>

<style lang="less" scoped>
    .footer {
        background-color: #f5f5f5;
        width: 100%;
        position: fixed;
        bottom: 0;
        height: 70px;
        line-height: 70px;
    }
</style>