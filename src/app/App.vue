<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-navbar-brand href="#">Wedding</b-navbar-brand>

            <b-nav-item-dropdown right>
                <template slot="button-content">
                    <em>User</em>
                </template>

                <b-dropdown-item href="#">Sign in</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
    import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand'
    import bNavItemDropdown from 'bootstrap-vue/es/components/nav/nav-item-dropdown'
    import bDropdownItem from 'bootstrap-vue/es/components/dropdown/dropdown-item'

    export default {
        name: 'app',
        components: {
            bNavbar,
            bNavbarBrand,
            bNavItemDropdown,
            bDropdownItem
        },
        data() {
            return {}
        }
    };
</script>