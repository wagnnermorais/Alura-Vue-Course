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
          <image-component
            :url="foto.url"
            :titulo="foto.titulo"
          ></image-component>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Imagens from "../components/Imagens.vue";
import Painel from "../components/Painel.vue";
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
    "image-component": Imagens,
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

.filtro {
  display: block;
  width: 100%;
  padding: 1rem;
}
</style>
