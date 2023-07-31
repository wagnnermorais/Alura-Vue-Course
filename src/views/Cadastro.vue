<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 v-if="foto._id" class="centralizado">Alterando</h2>
    <h3 v-else class="centralizado">Incluindo</h3>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">Título</label>
        <input id="titulo" autocomplete="off" v-model="foto.titulo" />
      </div>

      <div class="controle">
        <label for="url">Url</label>
        <input id="url" autocomplete="off" v-model.lazy="foto.url" />
        <image-component :url="foto.url" />
      </div>

      <div class="controle">
        <label for="descricao">Descrição</label>
        <textarea id="descricao" autocomplete="off" v-model="foto.descricao" />
      </div>

      <div class="centralizado">
        <Button rotulo="Gravar" tipo="submit" />
        <router-link :to="{ name: 'home' }">
          <Button rotulo="Voltar" tipo="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Imagens from "@/components/Imagens.vue";
import Button from "@/components/Button.vue";
import Foto from "@/domain/Foto";
import Service from "@/domain/Service";

export default {
  data() {
    return {
      foto: new Foto(),
      id: this.$route.params.id,
    };
  },

  methods: {
    async grava() {
      try {
        await this.service.cadastra(this.foto).then(() => {
          if (this.id) {
            this.$router.push({ name: "home" });
          }
          this.foto = new Foto();
        });
      } catch (err) {
        this.mensagem = err.message;
      }
    },
  },

  created() {
    this.service = new Service(this.$resource);
    if (this.id) {
      this.service.busca(this.id).then((foto) => (this.foto = foto));
    }
  },

  components: {
    "image-component": Imagens,
    Button,
  },
};
</script>
<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>
