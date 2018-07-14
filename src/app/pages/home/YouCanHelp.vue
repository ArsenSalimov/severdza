<template>
    <div class="help-section">
        <b-container>
            <app-title title="Вы тоже можете помочь"/>

            <b-row class="hel-container">
                <b-col>
                    <h3 class="title">Помочь деньгами</h3>

                    <div>
                        <iframe frameborder="0"
                                allowtransparency="true"
                                scrolling="no"
                                src="https://money.yandex.ru/embed/donate.xml?account=410014790821304&quickpay=donate&payment-type-choice=on&mobile-payment-type-choice=on&default-sum=&targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0+%D0%BD%D0%B0%D1%88%D0%B5%D0%B3%D0%BE+%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F&target-visibility=on&project-name=&project-site=&button-text=01&successURL="
                                width="522" height="90">
                        </iframe>
                    </div>
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

    export default {
        name: 'YouCanHelp',
        components: {
            AppTitle
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