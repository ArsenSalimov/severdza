<template>
    <div class="my-5">
        <h2 class="text-center mb-3">Наши волонтеры</h2>

        <b-row>
            <volontiers-list-item
                    v-for="volontier in volontiers"
                    :key="volontier.id"
                    :volontier="volontier"
                    cols="auto"
                    class="m-2"/>
        </b-row>
    </div>
</template>

<script>
    import VolontiersListItem from './VolontiersListItem.vue';

    export default {
        name: 'VolontiersList',
        props: ['volontiers'],
        components: {
            VolontiersListItem
        }
    }
</script>

<style scoped>

</style>