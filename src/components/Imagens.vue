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

  props: {
    url: {
      type: String,
      required: true,
    },

    titulo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.painel-img {
  width: 100%;
}
</style>
