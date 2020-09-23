import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "./router";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({ mode: "history", routes });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
