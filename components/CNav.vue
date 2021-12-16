<template>
  <b-navbar type="light" variant="white">
    <b-navbar-brand href="#">
      <img src="/logo.png" class="d-inline-block align-top" alt="Logo">
    </b-navbar-brand>
    <h4>Pharm Inc.</h4>
    <b-navbar-nav class="ml-auto">
      <b-nav-item>
        <b-icon-person-circle scale="1.5" />
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { BNavbar, BNavbarNav, BNavbarBrand, BNavItem, BIconPersonCircle } from 'bootstrap-vue'

export default {
    name: 'CNav',
    components: {
      "b-navbar": BNavbar,
      "b-navbar-nav": BNavbarNav,
      "b-navbar-brand": BNavbarBrand,
      "b-nav-item": BNavItem,
      "b-icon-person-circle": BIconPersonCircle,
    },
}
</script>
