# Api warapper da api [Ombd-Api](http://www.omdbapi.com/)

Esta API foi criada como projeto teste para vaga de desenvolvedor junior na Innovation Inteligence.

# Tópicos 

- [Tecologias](#techs)
- [Check List](#check)
- [Rotas da aplicação](#routes)
- [Rodando a aplicação](#execute)
- [API online](#online)

<a id="techs"></a>
## Tecnologias e bibliotecas utilizadas

- [NodeJS](https://nodejs.org/en/)
- [KnexJS](http://knexjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)

<a id="check"></a>
## Check List

- [x] Retorno de dados encontrados na busca do filme/serie/episodio
- [x] Retorno de dados de um filme/serie/episodio em específico
- [x] Cadastro de filme/serie/episodio nos favoritos globais
- [x] Retorno de todos os favoritos
- [x] Retorno dos dados de algum filme/serie/episodio salvo nos favoritos
- [x] Deleção de algum filme/serie/episodio salvo nos favoritos

<a id="routes"></a>
## Rotas da aplicação

### Públicas

> As rotas não necessitam da auteticação de usuário.

- ``/api/search/all`` 

Retorna todos os dados encontrados na pesquisa.

__Verbo http__ ``GET``

Query url  | Padrão     | 
-----------|------------|
page       |  1         |
-----------|------------|
type       | movies     |
-----------|------------| 
title      | requerido  |
-----------|------------|

__Retorno JSON__

```json
[
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    "title": "Batman: The Dark Knight Returns, Part 2",
    "year": "2013",
    "id": "tt2166834"
  }
]
```

- ``/api/search/infos/:id`` 

> Retorna os dados de um filme em específico.

__Verbo http__ ``GET``

__Retorno JSON__

```json
{
  "title": "Batman Begins",
  "released": "15 Jun 2005",
  "runtime": "140 min",
  "genre": "Action, Adventure",
  "director": "Christopher Nolan",
  "writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
  "actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
  "plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
  "language": "English, Mandarin",
  "country": "USA, UK",
  "poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "id": "tt0372784",
  "type": "movie"
}
```

- ``/api/favorite/add/`` 

> Rota para adicionar um filme aos favoritos globais para todos os usuários.

__Verbo http__ ``POST``

__Body__ 

```json
{
  "id": "..."
}
```

- ``/api/favorites`` 

> Retorna todos os filmes salvos em favoritos.

__Verbo http__ ``GET``

__Retorno JSON__

```json
{
  "title": "Batman Begins",
  "released": "15 Jun 2005",
  "runtime": "140 min",
  "genre": "Action, Adventure",
  "director": "Christopher Nolan",
  "writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
  "actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
  "plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
  "language": "English, Mandarin",
  "country": "USA, UK",
  "poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "id": "tt0372784",
  "type": "movie"
}
```

- ``/api/favorite/drop/:id`` 

> Rota para deletar algum filme salvo nos favoritos.

__Verbo http__ ``DELETE``

- ``/api/favorite/:id`` 

> Rota para deletar algum filme salvo nos favoritos.

__Verbo http__ ``GET``

<a id="execute"></a>
## Executando a API

Para executar a api em sua máquina siga os passos abaixo.

- 1 Clone meu repositório em sua máquina 

```sh
git clone git@github.com:edmilson-dk/inn-test-api.git

# entre na pasta

cd inn-test-api
```

- 2 Após o passo acima, instale as dependências necessárias, para isso é preciso que você tenha o [NodeJS](https://nodejs.org/en/) instalado em sua máquina.

```sh
npm install

# ou com yarn

yarn install
```

- 3 Feito a instalação de tudo é hora de configurar o banco de dados [PostgreSQL](https://www.postgresql.org/) 
em sua máquina, caso você não o tenha instalado, acesse o site do [PostgreSQL](https://www.postgresql.org/) e siga os passos de instalação em seu sistema operacional, quando instalar inicie o postgresql e entre na linha de comando dele ou em uma interface gráfica que você utilize, para podermos criar nossa database e nosso usuário para a api poder ser utilizada, no meu caso os comandos são os seguintes.

```sh
# Primeiro entro na linha de comandos do postresql e crio uma database.

❯ sudo -u postgres psql
[sudo] password for dk:         
psql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))
Type "help" for help.

postgres$ CREATE DATABASE "web_teste";
postgres$ \q;

# Após isso saiu da linha de comando em si, e entro na database que acabei de criar, para poder criar 
# uma role que é um tipo de usuário no postgresql, nela passamos o username que no meu caso eu escolhi
# "web_teste_user" e passo algumas opções necessárias para a conexão além do meu password que botei como 
# "webteste123", após isso já podemos conectar nossa api ao banco de dados.

❯ sudo -i -u postgres psql web_teste
psql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))
Type "help" for help.

web_teste$ CREATE ROLE web_teste_user CREATEDB LOGIN SUPERUSER PASSWORD 'webteste123';
postgres$ \q;
```

- 4 Após o processo acima, vamos adicionar nossas credências do banco em um arquivo de variaveis de ambiente, 
na pasta root do projeto que neste caso é a pasta ``inn-test-api``, crie o arquivo .env e adicione a mesma marcação que esta presente no arquivo env.example que deixei disponivél no repositório, após fazer a marcação, adicione as credências, o seu .env deve ficar mais ou menos assim.

```sh
# o banco de dados que estamos utilizando, neste caso pg que significa postgres
DB_CLIENT=pg

# o mesmo nome da database que você criou
DATABASE=web_teste 

# suas credências da database
DB_USERNAME=web_teste_user
DB_PASSWORD=webteste123

# url padrão da api utilizada no projeto, você deve gerar uma apikey no site da api, você pode fazer isso neste link http://www.omdbapi.com

API_URL_WITH_KEY=http://www.omdbapi.com/?apikey="suakey"

# aqui você não mexe
MIGRATIONS=./src/drivers/database/postgres/knex/migrations
```

- 5 Agora é só criarmos nossas [Migrations](https://medium.com/@juniorb2s/migrations-o-porque-e-como-usar-12d98c6d9269) para isso apenas execute o comando abaixo.

```sh
npx knex migrate:latest
```

- 6 Por fim é só iniciar nossa api.

```sh
npm dev 

# ou com yarn

yarn dev
```

<a id="online"></a>
## Veja a aplicação funcionando

Caso você não queira executar os passos de instalação manualmente, para sua sorte fiz o deploy da aplicação, a url da API é esta ``https://inn-node-api.herokuapp.com/api``.

Creator with 💙 by [Edmilson Jesus](https://www.linkedin.com/in/edmilson-jesus-4128711b5)
