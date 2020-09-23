<template>
  <div class="cards" :id="`${id}`">
    <img :src="`${imageUrl}`" alt="" class="img-fluid" />
    <div id="main-card-content">
      <p id="category">{{ category }}</p>
      <p id="name">{{ name }}</p>
      <!-- <p id="description">{{ description }}</p> -->
      <p id="price">R$ {{ price }}</p>
    </div>
    <button v-on:click="addItem">ADICIONAR AO CARRINHO</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    id: Number,
    name: String,
    category: String,
    description: String,
    price: Number,
    imageUrl: String,
  },
  methods: {
    addItem: function() {
      let id = this.id;

      var jsonData = localStorage.getItem("CartItens");

      if (jsonData == "undefined" || jsonData == "null" || jsonData === null) {
        jsonData = {};
      } else {
        jsonData = JSON.parse(jsonData);
      }

      if (!jsonData[id]) {
        jsonData[id] = {};
        jsonData[id].id = this.id;
        jsonData[id].qtd = 0;
        jsonData[id].name = this.name;
        jsonData[id].category = this.category;
        jsonData[id].description = this.category;
        jsonData[id].price = this.price;
        jsonData[id].imageUrl = this.imageUrl;
      }

      jsonData[id].qtd++;

      this.jsonData = jsonData;

      localStorage.setItem("CartItens", JSON.stringify(jsonData));

      console.log(jsonData);

      this.$emit("ItemAdicionado");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/sass/index.scss";
</style>
