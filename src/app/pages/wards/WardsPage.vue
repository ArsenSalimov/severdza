<template>
    <b-container>
        <b-row>
            <ward-list-item
                    v-for="ward in wards"
                    :key="ward.id"
                    :ward="ward"
                    cols="auto"
                    class="m-2"/>
        </b-row>
    </b-container>
</template>

<script>
    import bContainer from 'bootstrap-vue/es/components/layout/container';
    import bRow from 'bootstrap-vue/es/components/layout/row';
    import WardListItem from "./WardListItem.vue";

    export default {
        name: 'WardsPage',
        components: {
            WardListItem,
            bContainer,
            bRow
        },
        data() {
            return {
                wards: [
                    {
                        id: 1,
                        name: 'Игорь Анатольевич',
                        mainImage: 'https://pp.userapi.com/c831408/v831408017/e1f13/phrP-IG_0Ho.jpg',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur lacus porttitor rutrum bibendum. Sed a nibh eu quam fermentum commodo. Etiam ut ante nunc. In gravida quam eget nunc posuere, ac tincidunt nunc pellentesque. Curabitur non quam sed urna dapibus tempor id sed magna. Curabitur maximus turpis vitae arcu fringilla varius. Nam vel nunc varius, tempus magna eget, bibendum odio. Cras tortor ante, finibus at sagittis eget, cursus a ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eleifend facilisis mauris in ornare. Sed sapien tortor, iaculis at egestas in, congue sit amet purus. Maecenas et elit arcu. Mauris posuere dolor metus, quis suscipit libero egestas in. Cras pharetra lacinia semper. Mauris nec elit sollicitudin, dignissim justo facilisis, semper metus. Suspendisse ullamcorper condimentum nisl eget placerat.'
                    },
                    {
                        id: 2,
                        name: 'Альбина',
                        mainImage: 'https://pp.userapi.com/c849120/v849120575/5bb7/jgqgppKS10M.jpg'
                    },
                    {
                        id: 3,
                        name: 'Test 3'
                    },
                    {
                        id: 4,
                        name: 'Test 4'
                    },
                ]
            }
        }
    };
</script>