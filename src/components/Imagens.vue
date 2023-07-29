<template>
  <div>
    <img class="painel-img" :src="url" :alt="titulo" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: ["url", "titulo"],
};
</script>

<style scoped>
.painel-img {
  width: 100%;
}
</style>
