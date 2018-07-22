<template>
    <div class="help-section">
        <b-container>
            <app-title title="Вы тоже можете помочь" :main="false"/>

            <b-row class="hel-container">
                <b-col>
                    <h3 class="title">Помочь деньгами</h3>

                    <PaymentForm />
                </b-col>

                <b-col>
                    <h3 class="title">Мы с радостью примем</h3>
                    <ul>
                        <li>Продукты, не требующие приготовления</li>
                        <li>Вещи</li>
                        <li>Мебель</li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import AppTitle from '../../components/Title';
    import PaymentForm from './PaymentForm';

    export default {
        name: 'YouCanHelp',
        components: {
            AppTitle,
            PaymentForm
        }
    }
</script>

<style lang="less" scoped>
    .help-section {
        background: #f5f5f5;
        padding-top: 32px;
        padding-bottom: 32px;

        .help-container {
            margin-top: 44px;

            .title {
                font-size: 28px;
                margin-bottom: 15px;
            }
        }
    }
</style>