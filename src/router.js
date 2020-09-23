const ProductsCards = () => import("./components/ProductsCards.vue");
const Checkout = () => import("./components/Checkout.vue");
const CheckoutForm = () => import("./components/CheckoutForm.vue");

const routes = [
  { path: "/", component: ProductsCards },
  { path: "/checkout", component: Checkout },
  { path: "/checkoutform", component: CheckoutForm },
];

export default routes;
