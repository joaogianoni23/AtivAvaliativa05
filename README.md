# Aula: Configuração de Projeto Backend com Prisma

## Descrição do Projeto

Este projeto é uma API RESTful desenvolvida em Node.js que utiliza o Prisma ORM para gerenciar a persistência de dados em um banco de dados SQLite. A API permite realizar operações CRUD (Create, Read, Update, Delete) em tarefas, com suporte a validações e tratamento de erros.

---

## Habilidades Trabalhadas

- Desenvolvimento de APIs RESTful com Node.js.
- Integração de ORM (Prisma) com projetos backend.
- Modelagem de dados e persistência.
- Tratamento de erros em aplicações assíncronas.
- Refatoração de código para padrões modernos.

---

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de código JavaScript no backend.
- **Express**: Framework para criação de APIs RESTful.
- **Prisma ORM**: Ferramenta para modelagem e manipulação de banco de dados.
- **SQLite**: Banco de dados leve e embutido para desenvolvimento local.
- **JavaScript (ES6+)**: Linguagem de programação utilizada no projeto.

---

## Como Instalar e Executar o Projeto

### 1. Pré-requisitos

- Node.js instalado (versão 14 ou superior).
- Gerenciador de pacotes `npm`.

### 2. Clonar o Repositório

git clone https://github.com/seu-usuario/AtivAvaliativa05.git
cd AtivAvaliativa05

### 3. Instalar as Dependências

```bash
npm install
```

### 4. Configurar o Banco de Dados

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```bash
DATABASE_URL="file:./dev.db"
```

### 5. Inicializar o prisma

Execute os comandos abaixo para configurar o banco de dados e gerar o cliente Prisma:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 6. Iniciar o servidor

Execute o comando abaixo para iniciar o servidor:

```bash
npm start
```

## Endpoints da API

### 1. **Listar Todos os Produtos**

**GET** `/produtos`

- **Descrição**: Retorna todos os produtos cadastrados.
- **Exemplo de Resposta**:
  ```json
  [
    {
      "id": 1,
      "name": "Produto A",
      "price": 100.0,
      "category": "Categoria A",
      "brand": "Marca A",
      "stock": 10,
      "imageUrl": "http://imagem.com/produto-a.jpg",
      "isActive": true
    }
  ]
  ```
  ### 2. **Buscar Produto por ID**

**GET** `/produtos/:id`

- **Descrição**: Retorna um produto específico pelo ID.
- **Exemplo de Resposta**:
  ```json
  {
    "id": 1,
    "name": "Produto A",
    "price": 100.0,
    "category": "Categoria A",
    "brand": "Marca A",
    "stock": 10,
    "imageUrl": "http://imagem.com/produto-a.jpg",
    "isActive": true
  }
  ```
 ### 3. **Criar um Novo Produto**

**POST** `/produtos`

- **Descrição**: Cria um novo produto.
- **Corpo da Requisição**:
  ```json
  {
    "name": "Produto A",
    "price": 100.0,
    "category": "Categoria A",
    "brand": "Marca A",
    "stock": 10,
    "imageUrl": "http://imagem.com/produto-a.jpg",
    "isActive": true
  }
  ```
  ### 4. **Atualizar um Produto**

**PUT** `/produtos/:id`

- **Descrição**: Atualiza os dados de um produto existente.
- **Corpo da Requisição**:
  ```json
  {
    "name": "Produto B",
    "price": 150.0,
    "category": "Categoria B",
    "brand": "Marca B",
    "stock": 5,
    "imageUrl": "http://imagem.com/produto-b.jpg",
    "isActive": false
  }
  ```
### 5. **Excluir um Produto**

**DELETE** `/produtos/:id`

- **Descrição**: Remove um produto pelo ID.
- **Exemplo de Resposta**:
  - **204 No Content**: Produto excluído com sucesso.