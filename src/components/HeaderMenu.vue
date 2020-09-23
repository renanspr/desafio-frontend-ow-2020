<template>
  <header>
    <div id="header" class="container">
      <div class="row mt-5 mb-5 align-items-center">
        <div class="col-2 ">
          <router-link to="/"
            ><img src="../assets/resourcesmin/icons/MktPlace.jpg"
          /></router-link>
        </div>
        <div class="col-10">
          <div id="shopping-cart" class="float-right">
            <ShoppingCart ref="shopping" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ShoppingCart from "./ShoppingCart.vue";

export default {
  name: "HeaderMenu",
  components: {
    ShoppingCart,
  },
  methods: {
    cartAdded: function() {
      this.$refs.shopping.cartAdded();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/sass/index.scss";
</style>
