<template>
  <div id="app">
    <Menu :rotas="routes" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import { routes } from "./router";
export default {
  data() {
    return {
      routes: routes.filter((route) => route.menu),
    };
  },

  components: {
    Menu,
  },
};
</script>

<style>
#app {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-2em);
}

.fade-enter-active,
.fade-leave-active {
  transition: 200ms ease-in-out;
}
</style>
