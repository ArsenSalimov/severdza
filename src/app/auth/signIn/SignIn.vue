<template>
    <b-container>
        <b-row align-v="center">
            <b-col class="mt-3">
                <b-form novalidate @submit.prevent="onSignInClick">
                    <b-form-group
                            label="Email"
                            label-for="emailInput">
                        <b-form-input
                                id="emailInput"
                                type="email"
                                v-model="email"
                                placeholer="Email"
                                required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="Password"
                            label-for="passwordInput">
                        <b-form-input
                                id="passwordInput"
                                type="password"
                                v-model="password"
                                placeholer="Password"
                                required>
                        </b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Sign In</b-button>
                    <b-button type="button" variant="primary" href="/#/sign-up">Sign Up</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import bContainer from 'bootstrap-vue/es/components/layout/container';
    import bRow from 'bootstrap-vue/es/components/layout/row';
    import bCol from 'bootstrap-vue/es/components/layout/col';
    import bForm from 'bootstrap-vue/es/components/form/form';
    import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
    import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
    import bButton from 'bootstrap-vue/es/components/button/button';

    import {mapActions} from 'vuex';

    export default {
        name: 'signIn',
        components: {
            bContainer,
            bRow,
            bCol,
            bForm,
            bFormGroup,
            bFormInput,
            bButton
        },
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            credentials() {
                return {
                    email: this.email,
                    password: this.password
                }
            }
        },
        methods: {
            async onSignInClick() {
                try {
                    const a = await this.signIn(this.credentials);
                    console.log(a)
                } catch (error) {
                    this.$alertify.error(error.message)
                }

            },
            ...mapActions(['signIn'])
        }
    };
</script>