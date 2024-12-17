# Buscador de CEP

Este projeto é um **buscador de CEP** que utiliza a API pública do [ViaCEP](https://viacep.com.br/) para buscar informações de endereços a partir de um CEP.

## Funcionalidades

- Permite consultar informações de um CEP, como:
  - Logradouro (rua, avenida, etc.)
  - Bairro
  - Localidade (cidade)
  - UF (unidade federativa)
  - DDD e código de SIAFI.
  
- Realiza validação para garantir que o CEP seja válido (somente 8 dígitos numéricos).
- Retorna mensagens de erro caso o CEP não seja encontrado ou caso o formato esteja incorreto.

## Tecnologias

- **Node.js** com **Express.js**
- **Axios** para realizar requisições HTTP
- **API do ViaCEP** para buscar dados do CEP

## Pré-requisitos

- Node.js e npm instalados no seu computador.
- A API do [ViaCEP](https://viacep.com.br/) será consumida via requisição HTTP GET.

## Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/victorgovedice/buscador-cep.git
cd buscador-cep
```

2. **Instale as dependências:**

```bash
npm install
```

## Como Rodar o Projeto

### 1. Rodar o servidor em desenvolvimento

Execute o seguinte comando para rodar o servidor:

```bash
npm run dev
```

Isso iniciará o servidor na porta **3000** (ou a porta definida pela variável de ambiente `PORT`).

### 2. Testar a Rota

A API estará disponível em `http://localhost:3000/api/cep/:cep`, onde você substitui `:cep` pelo CEP que deseja consultar.

#### Exemplo de Requisição:

Para consultar o CEP `01001000`, faça uma requisição GET para:

```
http://localhost:3000/api/cep/01001000
```

#### Exemplo de Resposta (para um CEP válido):

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

#### Exemplo de Resposta (para CEP inválido):

```json
{
  "error": "CEP inválido. Utilize apenas 8 dígitos numéricos."
}
```

#### Exemplo de Resposta (para CEP não encontrado):

```json
{
  "error": "CEP não encontrado."
}
```

## Estrutura do Projeto

```
/buscador-cep
  /node_modules       # Dependências do projeto
  /src
    index.js          # Arquivo principal que inicializa o servidor
    routes.js         # Define as rotas da API
  package.json        # Dependências e scripts do projeto
  README.md           # Documentação do projeto
```

## Scripts disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm start`: Inicia o servidor em produção.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
