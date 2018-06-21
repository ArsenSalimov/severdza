<template>
    <div>
        <h1>{{message}}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                message: 'Hello, hot world!'
            }
        }
    };
</script>