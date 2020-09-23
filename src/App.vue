<template>
  <div id="app">
    <HeaderMenu ref="header" />
    <router-view @ItemAdicionado="HandleItem" />
    <Footer />
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderMenu,
    Footer,
  },
  methods: {
    HandleItem: function() {
      this.$refs.header.cartAdded();
    },
  },
};
</script>

<style></style>
