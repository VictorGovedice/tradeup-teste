module.exports = {
    env: {
      node: true, // Isso indica que estamos em um ambiente Node.js
      browser: true, // Isso também permite que o Vue reconheça o navegador
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
    ],
    plugins: ['vue'],
  };
  