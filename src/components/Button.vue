<template>
  <button @click="disparaAcao" class="botao" :class="estiloBotao" :type="tipo">
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
    tipo: {
      required: true,
      type: String,
    },

    rotulo: {
      required: true,
      type: String,
    },

    confirmacao: {
      required: false,
      type: Boolean,
    },

    estilo: {
      required: false,
      type: String,
    },
  },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("confirma operação?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    },
  },

  computed: {
    estiloBotao() {
      if (this.estilo == "padrao" || !this.estilo) return "botao-padrao";
      if (this.estilo == "perigo") return "botao-perigo";
    },
  },
};
</script>

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2rem;
  cursor: pointer;
}

.botao-perigo {
  background: #b22222;
  color: #fff;
}

.botao-padrao {
  background: darkcyan;
  color: #fff;
}
</style>
