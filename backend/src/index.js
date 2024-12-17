const express = require('express');
const cors = require('cors'); // Importa o cors
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para todas as origens
app.use(cors());

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Tratamento de erros não capturados
process.on('uncaughtException', (err) => {
  console.error(`Erro inesperado: ${err.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error(`Rejeição não tratada: ${err.message}`);
  process.exit(1);
});
