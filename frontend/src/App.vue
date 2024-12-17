<template>
  <router-view></router-view> <!-- Renderiza a página atual com base na rota -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

  /* Configurações da imagem de fundo */
  background-image: url('@/assets/mailman.jpg');
  background-size: cover;      /* Faz a imagem cobrir toda a tela */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Impede a repetição da imagem */
  min-height: 100vh;           /* Garante que a altura mínima ocupe toda a tela */

  /* Para centralizar o conteúdo */
  display: flex;               
  justify-content: center;     /* Centraliza horizontalmente */
  align-items: center;         /* Centraliza verticalmente */
  position: relative;          /* Necessário para o pseudo-elemento */
}

/* Pseudo-elemento para aplicar a opacidade à imagem de fundo */
#app::before {
  content: ""; /* Necessário para que o pseudo-elemento exista */
  position: absolute; /* Permite que ele se sobreponha ao conteúdo */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/mailman.jpg'); /* Repetindo a imagem */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* Garante que o pseudo-elemento fique atrás do conteúdo */
}
</style>
