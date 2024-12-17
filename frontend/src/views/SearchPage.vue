<template>
  <div class="search-page">
    <h1>Pesquisar Endereço por CEP</h1>
    <input
      v-model="cep"
      type="text"
      placeholder="Digite o CEP"
      maxlength="10"
      @input="formatCep"
    />
    <button @click="searchCep">Pesquisar</button>

    <div v-if="address">
      <p class="address"><strong>Endereço:</strong> {{ address }}</p>
    </div>
    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <router-link to="/">
      <button class="back-button">Voltar</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      cep: "",
      address: null,
      error: null,
    };
  },
  methods: {
    // Função para formatar o CEP com máscara
    formatCep() {
      this.cep = this.cep.replace(/\D/g, "").slice(0, 8);
      if (this.cep.length >= 5) {
        this.cep = `${this.cep.slice(0, 5)}-${this.cep.slice(5)}`;
      }
    },
    // Função para buscar o CEP na API
    async searchCep() {
      this.address = null; // Reseta o endereço
      this.error = null; // Reseta o erro

      const cepWithoutMask = this.cep.replace("-", ""); // Remove o hífen

      if (cepWithoutMask.length !== 8) {
        this.error = "Por favor, insira um CEP válido.";
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3000/api/cep/${cepWithoutMask}`
        );
        const data = await response.json();

        if (data && data.logradouro) {
          this.address = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        } else {
          this.error = "CEP não encontrado.";
        }
      } catch (err) {
        this.error = "Erro ao buscar o CEP. Por favor, tente novamente.";
      }
    },
  },
};
</script>

<style scoped>
.search-page {
  text-align: center;
  padding: 20px;
  max-width: 500px;
  margin: 50px auto;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

h1 {
  margin-bottom: 20px;
}

input {
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

button:hover {
  background-color: #45a049;
}

.address {
  font-size: 23px; /* Tamanho maior da fonte */
  font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B",
    "Helvetica Neue", Helvetica, Arial, sans-serif; /* Fontes desejadas */
  margin-top: 15px;
  color: #f0f0f0; /* Cor opcional */
}

.error {
  color: #ff6b6b;
  margin-top: 15px;
  font-size: 16px;
}

.back-button {
  margin-top: 20px;
  background-color: #555;
}

.back-button:hover {
  background-color: #333;
}
</style>
