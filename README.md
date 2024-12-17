# TradeUp - Teste Técnico

## 📋 Descrição do Projeto

Este projeto foi desenvolvido como parte de um **teste técnico** para a empresa **TradeUp**. O objetivo era criar uma aplicação **Full Stack** para consumo de dados de CEP, respeitando as seguintes especificações:

- **Backend**: Desenvolver uma API que consome dados de CEP de uma API externa e retorna os dados formatados.
- **Frontend**: Desenvolver uma SPA (Single Page Application) em Vue.js que permite a busca de CEP, com uma interface amigável e funcional.

---

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** com **Express.js**  
- **Axios** (para consumo da API externa: [ViaCEP](https://viacep.com.br/))  

### Frontend
- **Vue.js** com **Vue Router**  
- **Axios** (para realizar requisições ao backend)  
- **CSS** puro com **responsividade**  

---

## 📂 Estrutura do Projeto

### Backend (`/backend`)
```
backend/
├── server.js              # Arquivo principal do servidor
├── routes/cep.js          # Rotas para buscar CEP
└── package.json           # Configurações do projeto e dependências
```

### Frontend (`/frontend`)
```
frontend/
├── src/
│   ├── assets/            # Imagens e arquivos estáticos
│   ├── components/        # Componentes Vue.js
│   ├── router/index.js    # Configuração de rotas com Vue Router
│   ├── views/             # Páginas da aplicação
│   ├── App.vue            # Componente principal da aplicação
│   └── main.js            # Entrada principal do Vue.js
└── package.json           # Configurações do frontend e dependências
```

---

## 🛠️ Funcionalidades

### **Backend**
1. Rota de busca de CEP que consome a API externa [ViaCEP](https://viacep.com.br/) e retorna os dados formatados.
2. Resposta em JSON contendo: **logradouro**, **bairro**, **localidade** e **uf**.

### **Frontend**
1. **Página Home**:
   - Exibe uma breve descrição do projeto, uma imagem e um botão que direciona à **Página de Pesquisa**.
2. **Página de Pesquisa**:
   - Campo para pesquisa de CEP, aceitando somente números.
   - Validação do formato de CEP (ex.: `12345-678`).
   - Apresentação amigável do endereço retornado pela API.
   - Botão **Voltar** que retorna à página Home.

---

## ▶️ Como Executar o Projeto

### 1. Clonar o Repositório
```bash
git clone https://github.com/victorgovedice/tradeup-teste.git
cd tradeup-teste
```

### 2. Executar o Backend
```bash
cd backend
npm install
node server.js
```
O servidor rodará em: `http://localhost:3000`

### 3. Executar o Frontend
```bash
cd frontend
npm install
npm run serve
```
O frontend rodará em: `http://localhost:8080`

---

## 📈 Diferenciais Implementados
- Uso do **Vue Router** para navegação entre páginas.  
- Backend estruturado em **Node.js** com organização de rotas.  
- Validação do campo de CEP para aceitar apenas números e formato correto.  
- Consumo de API externa utilizando **Axios** tanto no backend quanto no frontend.  

---

## 📋 Melhorias Futuras
- Implementação de **Vuex** para centralizar o estado da aplicação.  
- Melhorias na interface com componentes reutilizáveis.  
- Testes unitários e de integração.  

---

## ✨ Contato

**Desenvolvedor**: Victor Hugo Almeida da Silva Govedice
**LinkedIn**: https://www.linkedin.com/in/victorgovedice  
**Email**: victorgovedice@gmail.com  

---
