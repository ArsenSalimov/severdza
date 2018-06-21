<template>
    <div>
        <b-card
                v-for="photographer in photographers"
                :title="photographer.name"
        ></b-card>
    </div>
</template>

<script>
    export default {
        name: 'photographers',
        data() {
            return {
                photographers: [
                    {
                        name: 'Test 1'
                    },
                    {
                        name: 'Test 2'
                    },
                    {
                        name: 'Test 3'
                    },
                ]
            }
        }
    };
</script>