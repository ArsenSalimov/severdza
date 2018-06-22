<template>
    <b-container>
        <b-row>
            <b-col>
                <b-form novalidate @submit.prevent="onSignUpClick">
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

                    <b-button type="submit" variant="primary">Sign Up</b-button>
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
        name: 'signUp',
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
            userInfo() {
                return {
                    email: this.email,
                    password: this.password
                }
            }
        },
        methods: {
            onSignUpClick() {
                this.signUp(this.userInfo);
            },
            ...mapActions(['signUp'])
        }
    };
</script>