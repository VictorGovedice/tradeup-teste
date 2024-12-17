<template>
  <div class="home">
    <div class="overlay"></div> <!-- Fundo escuro transparente -->
    <div class="content">
      <img src="../assets/logo.png" alt="Logo" class="logo" />
      <h1>Bem-vindo ao TradeUp</h1>
      <p>Busque rapidamente o endereço utilizando seu CEP!</p>
      <router-link to="/search">
        <button>Ir para Pesquisa</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/mailman.jpg') no-repeat center center;
  background-size: cover;
  opacity: 0.6;
}

.content {
  position: relative;
  text-align: center;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.logo {
  width: 150px;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 15px;
  font-size: 24px;
}

p {
  margin-bottom: 20px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}
</style>
