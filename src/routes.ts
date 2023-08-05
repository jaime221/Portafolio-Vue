import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";


let routes: RouteRecordRaw[] = [
  { name: "Home", path: "/", component: Home },
];

let Router = createRouter({
  history: createWebHistory(),
  routes,
});
export default Router;
