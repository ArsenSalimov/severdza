<template>
    <b-link class="ward-list-item">
        <b-card
                :img-src="ward.mainImage"
                style="max-width: 20rem;"
                img-top
                :title="ward.name">
            <b-card-body>
                <p class="card-text">{{ellipsizedDescription}}</p>
            </b-card-body>
        </b-card>
    </b-link>

</template>

<script>
    const DESCRIPTION_MAX_LENGTH = 150;

    export default {
        name: "WardListItem",
        props: ['ward'],
        computed: {
            ellipsizedDescription() {
                const description = this.ward.description;
                const ellipsizedText = description.substring(0, DESCRIPTION_MAX_LENGTH);

                return description.length > DESCRIPTION_MAX_LENGTH ? `${ellipsizedText}...` : ellipsizedText;
            }
        }
    }
</script>

<style>
    .ward-list-item {
        text-decoration: none;
        color: inherit;
    }

    .ward-list-item:hover {
        text-decoration: none;
        color: inherit;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>