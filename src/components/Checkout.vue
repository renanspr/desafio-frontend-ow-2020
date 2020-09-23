<template>
  <div class="container" v-if="Object.keys(products).length >= 1">
    <!-- CHECKOUT MENU -->

    <div id="checkout-menu" class="row mb-3">
      <div id="product-title" class="col ">
        <h2>PRODUTOS</h2>
      </div>

      <div id="qtd-title" class="col">
        <h2>QUANTIDADE</h2>
      </div>

      <div id="unique-title" class="col">
        <h2>VALOR UNITÁRIO</h2>
      </div>
      <div class="col p-0 empty-div"></div>
      <div id="total-title" class="col">
        <h2>TOTAL</h2>
      </div>
    </div>

    <!-- CHECKOUT PRODUCTS -->

    <div id="main" class="row" v-for="product in products" :key="product.id">
      <button id="delete-item" v-on:click="deleteQtd(product)">
        <img
          src="../assets/resourcesmin/icons/garbage.svg"
          alt="garbage-icon"
        />
      </button>
      <div id="product-checkout" class="col align-self-center">
        <p id="category-checkout">{{ product.category }}</p>
        <p id="name-checkout">{{ product.name }}</p>
      </div>

      <div id="quantity-counter" class="col align-self-center">
        <div class="quantity-counter">
          <button
            v-on:click="removeQtd(product)"
            id="counter-decrement"
            class="decrement"
          >
            -
          </button>
          <span id="counter-value" class="value" type="number">
            {{ product.qtd }}
          </span>
          <button
            v-on:click="addQtd(product)"
            id="counter-increment"
            class="increment"
          >
            +
          </button>
        </div>
      </div>

      <div class="col align-self-center unique-price">
        <p id="unique-price">
          <strong>R$ {{ product.price.toFixed(2) }}</strong> à vista
        </p>
        <p id="unique-price">ou 10x R${{ (product.price / 10).toFixed(2) }}</p>
      </div>
      <div class="col empty-div"></div>
      <div id="total-price" class="col align-self-center">
        <p>
          <strong>R${{ (product.price * product.qtd).toFixed(2) }}</strong> à
          vista
        </p>
        <p>ou 10x R${{ ((product.price * product.qtd) / 10).toFixed(2) }}</p>
      </div>
    </div>

    <!-- CHECKOUT TOTAL -->

    <div id="checkout-total" class="row">
      <div class="col"></div>

      <div class="col"></div>

      <div class="col empty-div"></div>

      <div class="col align-self-center">
        <h2 class="in-cash">
          TOTAL À VISTA
        </h2>
        <h2 class="parceled">
          TOTAL PARCELADO
        </h2>
      </div>

      <div class="col p-0 align-self-center">
        <div class="in-cash-total">
          <span id="in-cash-total">R${{ price }}</span>
        </div>
        <div class="parceled-total">
          <p>
            <span
              >em até <strong> 10x {{ (price / 10).toFixed(2) }}</strong></span
            >
          </p>
        </div>
      </div>
    </div>

    <!-- CHECKOUT BUTTONS -->
    <div id="checkout-buttons" class="row mt-5">
      <div class="col p-0 align-self-center">
        <button id="delete-cart" v-on:click="deleteCart">
          <img src="../assets/resourcesmin/icons/garbage.svg" alt="" />
          <p>Limpar carrinho</p>
        </button>
      </div>

      <div class="col empty-div"></div>

      <div class="col empty-div"></div>

      <div class="col align-self-center">
        <router-link to="/">
          <button id="keep-buying"><p>Continuar comprando</p></button>
        </router-link>
      </div>

      <div class="col p-0 align-self-center">
        <router-link to="/checkoutform">
          <button id="complete-purchase"><p>Concluir compra</p></button>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <div id="v-else" class="container">
      <h3>O carrinho está vazio!</h3>
      <h4>
        Volte para a página inicial, clicando no logo, para continuar comprando.
      </h4>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "Checkout",
  components: ProductCard,
  data() {
    return {
      products: [],
      price: 0,
    };
  },

  created() {
    this.products = JSON.parse(localStorage.getItem("CartItens"));
    this.priceTotal();
  },

  methods: {
    addQtd: function(product) {
      let products = JSON.parse(localStorage.getItem("CartItens"));
      let id = product.id;
      products[id].qtd++;
      localStorage.setItem("CartItens", JSON.stringify(products));

      this.products = products;

      this.$emit("ItemAdicionado");

      this.priceTotal();
    },

    removeQtd: function(product) {
      let products = JSON.parse(localStorage.getItem("CartItens"));
      let id = product.id;
      if (product.qtd > 1) {
        products[id].qtd--;
        localStorage.setItem("CartItens", JSON.stringify(products));
        this.products = products;
        this.$emit("ItemAdicionado");
      }

      this.priceTotal();
    },

    deleteQtd: function(product) {
      let products = JSON.parse(localStorage.getItem("CartItens"));
      let id = product.id;
      delete products[id];
      localStorage.setItem("CartItens", JSON.stringify(products));

      this.products = products;

      this.$emit("ItemAdicionado");

      this.priceTotal();
    },

    priceTotal: function() {
      let products = JSON.parse(localStorage.getItem("CartItens"));
      let price = 0;
      for (var product in products) {
        price = price + products[product].price * products[product].qtd;
      }

      this.price = price.toFixed(2);
    },

    deleteCart: function() {
      localStorage.removeItem("CartItens");
      this.$emit("ItemAdicionado");
      this.priceTotal();
      this.products = [];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/sass/index.scss";
</style>
