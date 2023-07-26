<template>
  <div id="app">
    <h1>
      {{ titulo }}
    </h1>
    <input
      type="search"
      class="filtro"
      placeholder="Filtre pelo título"
      @input="filtro = $event.target.value"
    />
    <ul>
      <li v-for="foto in fotosComFiltro" :key="foto.url">
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
      filtro: "",
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

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
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

.filtro {
  display: block;
  width: 100%;
  padding: 1rem;
}
</style>
