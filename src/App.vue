<template>
  <div id="app">
    <h1>
      {{ titulo }}
    </h1>
    <ul>
      <li v-for="foto in fotos" :key="foto.url">
        <meu-painel :titulo="foto.titulo">
          <img class="painel-img" :src="foto.url" :alt="foto.titulo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "./components/Painel.vue";
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

  components: {
    "meu-painel": Painel,
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

h1 {
  text-align: center;
}

ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.painel-img {
  width: 100%;
}
</style>
