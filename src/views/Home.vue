<template>
  <div class="container">
    <h1>
      {{ titulo }}
    </h1>
    <p v-show="mensagem">{{ mensagem }}</p>
    <input
      type="search"
      class="filtro"
      placeholder="Filtre pelo título"
      v-model="filtro"
    />
    <ul>
      <li v-for="foto in fotosComFiltro" :key="foto.url">
        <card-component :titulo="foto.titulo">
          <image-component
            :url="foto.url"
            :titulo="foto.titulo"
            v-transform:scale.animate="1.2"
          />
          <router-link :to="{ name: 'altera', params: { id: foto._id } }">
            <Button tipo="button" rotulo="Alterar" />
          </router-link>
          <Button
            tipo="button"
            rotulo="Remover"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo"
          />
        </card-component>
      </li>
    </ul>
  </div>
</template>

<script>
import Imagens from "../components/Imagens.vue";
import Painel from "../components/Painel.vue";
import Button from "@/components/Button.vue";
import transform from "@/directives/Transform";
import Service from "@/domain/Service";
export default {
  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: "",
      mensagem: "",
    };
  },

  methods: {
    async remove(foto) {
      try {
        await this.service.apaga(foto._id).then(() => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = alert("Foto removida com sucesso");
        });
      } catch (err) {
        this.mensagem = err.message;
      }
    },
  },

  created() {
    try {
      this.service = new Service(this.$resource);
      this.service.lista().then((fotos) => (this.fotos = fotos));
    } catch (err) {
      this.mensagem = err.message;
    }
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
    "card-component": Painel,
    "image-component": Imagens,
    Button,
  },

  directives: {
    transform,
  },
};
</script>

<style scoped>
h1,
p {
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
