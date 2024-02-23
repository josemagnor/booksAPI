# CRUD API Backend de Livros

Este é um projeto de um crud API backend de livros escrito em typescript usando node 20.11.1, fastify, mongodb e prisma. Ele permite criar, ler, atualizar e deletar livros em um banco de dados mongodb.

## Requisitos

- Node
- Mongodb
- Prisma

## Instalação

- Clone este repositório.
- Entre na pasta do projeto
- Instale as dependências: `npm install`
- Gere o esquema do prisma: `npx prisma generate`
- Inicie o servidor: `npm run dev`

## Uso

O servidor irá rodar na porta 3333 por padrão. Você pode usar um cliente HTTP como Postman ou curl para fazer as requisições para a API.

### Endpoints

- `GET /books`: Retorna todos os livros cadastrados no banco de dados.
- `GET /book`: Retorna um livro específico pelo seu id.
- `POST /book`: Cria um novo livro no banco de dados. O corpo da requisição deve ter o seguinte formato:
- `PUT /book`: Atualiza um livro presente no banco de dados:
- `DELETE /book`: Deleta um livro do banco de dados

```json
{
  "title": "O nome do livro",
  "author": "O nome do autor",
  "genre": "O gênero do livro",
}
