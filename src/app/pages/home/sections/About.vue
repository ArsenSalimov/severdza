<template>
    <b-container class="about">
        <div class="text">
            Главным направлением деятельности волонтерского движения «Сердце Севастополя» является адресная помощь
            людям, попавшим в тяжелую жизненную ситуацию. Благодаря освещению ситуации через СМИ и социальные сети,
            волонтерам удается аккумулировать помощь от неравнодушных граждан и передавать ее нуждающимся.
            Помимо продуктов питания, средств личной гигиены, одежды, предметов мебели и помощи в финансовых вопросах,
            фондом оказываются психологические и юридические консультации подопечных, помощь в оформлении документов
            и пособий. За время существования фонда добровольцами была оказана поддержка сотням гражданам,
            среди которых дети из неблагополучных и малообеспеченных семей, матери-одиночки, одинокие старики,
            граждане без определенного места жительства.
        </div>

    </b-container>
</template>

<script>
    export default {
        name: 'About'
    }
</script>

<style lang="less" scoped>
    .about {
        display: flex;

        &:before {
            content: "“";
            line-height: 1rem;
            color: #ffdf5c;

            @media (min-width: 1em) {
                font-size: 2rem;
            }

            @media (min-width: 800px) {
                font-size: 5rem;
            }
        }

        &:after {
            content: "”";
            color: #ffdf5c;
            align-self: flex-end;
            line-height: 0;

            @media (min-width: 1em) {
                font-size: 2rem;
            }

            @media (min-width: 800px) {
                font-size: 5rem;
            }
        }

        .text {
            font-style: italic;
            text-align: justify;
            font-size: 1.2rem;
            line-height: 2rem;

            @media (min-width: 1em) {
                padding: 0;
            }

            @media (min-width: 800px) {
                padding: 10px;
            }
        }
    }
</style>