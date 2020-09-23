<template>
  <div class="main">
    <!-- CAROUSEL -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide mt-5"
      data-ride="carousel"
    >
      <div>
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="../assets/resourcesmin/icons/Slide1.png"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/resourcesmin/icons/Slide2.png"
            alt="Second slide"
          />
        </div>
      </div>
    </div>

    <!-- SEARCH BAR -->
    <div id="find-products" class="container">
      <div class="row">
        <div class="col-3">
          <p>Encontre seu produto</p>
        </div>

        <div class="col-9">
          <form>
            <input type="text" v-model="search" placeholder="Pesquisar..." />
            <img
              src="../assets/resourcesmin/icons/search-icon.png"
              alt="search-icon"
              class="img-fluid pb-1"
            />
          </form>
        </div>
      </div>
    </div>

    <!-- CARDS -->
    <div class="container mt-5">
      <div
        class="row products-cards justify-content-between"
        v-for="rowIdx in Math.ceil(products.length / 3)"
        :key="rowIdx"
      >
        <div
          class="col-md-4 card"
          v-for="product in filteredProducts.slice(
            3 * (rowIdx - 1),
            3 * rowIdx
          )"
          :key="product.name"
        >
          <ProductCard
            @ItemAdicionado="HandleItem"
            :id="product.id"
            :name="product.name"
            :category="product.category"
            :description="product.description"
            :price="product.price"
            :imageUrl="product.imageUrl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "ProductsCards",
  components: {
    ProductCard,
  },
  computed: {
    filteredProducts: function() {
      return this.products.filter((product) => {
        return product.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  beforeMount() {
    Vue.axios
      .get(
        "https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json"
      )
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    HandleItem: function() {
      this.$emit("ItemAdicionado");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/sass/index.scss";
</style>
