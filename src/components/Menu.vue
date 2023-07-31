<template>
  <nav>
    <ul>
      <li v-for="rota in rotas" :key="rota.path">
        <router-link :to="rota.path" class="list-item">
          {{ rota.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Menu",

  props: {
    rotas: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.list-item {
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.788);
  text-decoration: none;
  transition: 0.5s;
}

.list-item:hover {
  color: #1e75c5;
}
</style>
