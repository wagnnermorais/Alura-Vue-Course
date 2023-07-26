<template>
  <div id="app">
    <h1>
      {{ titulo }}
    </h1>
    <ul>
      <li v-for="foto in fotos" :key="foto.url">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
    };
  },

  created() {
    let promise = this.$http.get("http://localhost:3000/v1/fotos");
    promise
      .then((response) => response.json())
      .then(
        (fotos) => (this.fotos = fotos),
        (err) => console.log(err)
      );
  },
};
</script>

<style>
#app {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
