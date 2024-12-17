const express = require('express');
const axios = require('axios');

const router = express.Router();

// Rota para buscar o cep
router.get('/cep/:cep', async (req, res) => {
  const { cep } = req.params;

  try {
    // Validar cep
    if (!/^\d{8}$/.test(cep)) {
      return res.status(400).json({ error: 'CEP inválido. Utilize apenas 8 dígitos numéricos.' });
    }

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro) {
      return res.status(404).json({ error: 'CEP não encontrado.' });
    }

    // Retorno da informação do CEP
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o CEP.' });
  }
});

module.exports = router;
