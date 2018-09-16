<template>
    <div class="payment-form">
        <b-form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml" inline>
            <input type="hidden" name="receiver" value="410014790821304">
            <input type="hidden" name="quickpay-form" value="donate">
            <input type="hidden" name="targets" value="Пожертвование">
            <b-form-input name="sum" type="number" value="100"/>
            <b-form-radio-group>
                <b-form-radio value="AC">
                    <b-image src="/payment/card_logo.png"/>
                </b-form-radio>
                <b-form-radio value="MC">
                    <b-image src="/payment/phone_logo.png"/>
                </b-form-radio>
                <b-form-radio value="PC">
                    <b-image src="/payment/yandex_logo.png"/>
                </b-form-radio>
            </b-form-radio-group>
            <b-button type="submit" class="submit-button">Пожертвовать</b-button>
        </b-form>
    </div>
</template>

<script>
    import bForm from 'bootstrap-vue/es/components/form/form';
    import bButton from 'bootstrap-vue/es/components/button/button';
    import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
    import bFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group';
    import bFormRadio from 'bootstrap-vue/es/components/form-radio/form-radio';

    export default {
        name: 'PaymentForm',
        components: {
            bForm,
            bButton,
            bFormInput,
            bFormRadioGroup,
            bFormRadio
        }
    }
</script>

<style lang="less" scoped>
    .payment-form {
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 1px 3px #999;
        padding: 13px;
        font-size: 14px;

        .submit-button {
            background: #ffcc00;
            border: #ffcc00;
            border-radius: 4px;
            color: black;
            margin: 5px;

            &:hover {
                opacity: 0.7;
            }
        }
    }
</style>