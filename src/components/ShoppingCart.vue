<template>
  <div id="shopping-cart">
    <router-link to="/checkout"
      ><img src="../assets/resourcesmin/icons/shopping-cart.svg" />
      <strong id="item-counter">{{ qtd }}</strong>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data: function() {
    return {
      qtd: 0,
    };
  },
  methods: {
    cartAdded: function() {
      let cart = JSON.parse(localStorage.getItem("CartItens"));
      let qtd = 0;
      for (var product in cart) {
        qtd = qtd + cart[product].qtd;
      }

      this.qtd = qtd;
    },
  },
  beforeMount() {
    let cart = JSON.parse(localStorage.getItem("CartItens"));
    let qtd = 0;
    for (var product in cart) {
      qtd = qtd + cart[product].qtd;
    }

    this.qtd = qtd;
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/sass/index.scss";
</style>
