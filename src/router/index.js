import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cadastro from "@/views/Cadastro.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/home",
    name: "home",
    title: "Home",
    menu: true,
    component: Home,
  },
  {
    path: "/cadastro",
    name: "cadastro",
    title: "Cadastro",
    menu: true,
    component: Cadastro,
  },
  {
    path: "*",
    menu: false,
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
