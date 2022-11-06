# API - Academia de musculação

API Rest desenvolvida utilizando Node.Js, express e mongoDB para o CRUD(Create, Read, Update e Delete).




## Funcionalidades

- CRUD de Alunos
- CRUD de Instrutores
- CRUD de Grupos Musculares
- CRUD de Tipos de  exercicios
- CRUD de Fichas


## Instalação

Instale Academia-API com npm, estando na raiz dp projeto excute os seguintes comandos:

```bash
  npm install
```
```bash
  npm start
```
    
## Documentação da API

## rota Alunos
#### Retorna todos os alunos

```http
  GET /api/alunos/
```

#### Retorna um aluno específico

```http
  GET /api/alunos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do aluno que você quer |

#### Cadastra um aluno

```http
  POST /api/alunos/
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O Nome do aluno que você quer |
| `dataNascimento`      | `string` | **Obrigatório**. A data de nascimento do aluno que você quer no formato yyyy/mm/dd |
| `Sexo`      | `string` | **Obrigatório**. O Sexo do aluno que você quer no formato 'M' ou 'F|
| `email`      | `string` | **Obrigatório**. O email do aluno que você quer |
| `senha`      | `string` | **Obrigatório**. A senha do aluno que você quer |
| `ativo`      | `boolean` | **Obrigatório**. O status do aluno que você quer no formato true ou false|
| `ficha`      | `array` | . A ou as ficha do aluno que você quer |

#### atualiza um aluno

```http
  PUT /api/alunos/{id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do aluno que você quer |
| `nome`      | `string` | **Obrigatório**. O Nome do aluno que você quer |
| `dataNascimento`      | `string` | **Obrigatório**. A data de nascimento do aluno que você quer no formato yyyy/mm/dd |
| `Sexo`      | `string` | **Obrigatório**. O Sexo do aluno que você quer no formato 'M' ou 'F|
| `email`      | `string` | **Obrigatório**. O email do aluno que você quer |
| `senha`      | `string` | **Obrigatório**. A senha do aluno que você quer |
| `ativo`      | `boolean` | **Obrigatório**. O status do aluno que você quer no formato true ou false|
| `ficha`      | `array` | . A ou as ficha do aluno que você quer |

#### delata um aluno específico

```http
  DEL /api/alunos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do aluno que você quer |

## rota Instrutores
#### Retorna todos os instrutores

```http
  GET /api/instrutores/
```

#### Retorna um instrutor específico

```http
  GET /api/instrutores/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do instrutor que você quer |

#### Cadastra um instrutor

```http
  POST /api/isntrutores/
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O Nome do instrutor que você quer |
| `dataNascimento`      | `string` | **Obrigatório**. A data de nascimento do instrutor que você quer no formato yyyy/mm/dd |
| `Sexo`      | `string` | **Obrigatório**. O Sexo do instrutor que você quer no formato 'M' ou 'F|
| `email`      | `string` | **Obrigatório**. O email do instrutor que você quer |
| `senha`      | `string` | **Obrigatório**. A senha do instrutor que você quer |
| `ativo`      | `boolean` | **Obrigatório**. O status do instrutor que você quer no formato true ou false|

#### atualiza um instrutor

```http
  PUT /api/instrutores/{id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do instrutor que você quer |
| `nome`      | `string` | **Obrigatório**. O Nome do instrutor que você quer |
| `dataNascimento`      | `string` | **Obrigatório**. A data de nascimento do instrutor que você quer no formato yyyy/mm/dd |
| `Sexo`      | `string` | **Obrigatório**. O Sexo do instrutor que você quer no formato 'M' ou 'F|
| `email`      | `string` | **Obrigatório**. O email do instrutor que você quer |
| `senha`      | `string` | **Obrigatório**. A senha do instrutor que você quer |
| `ativo`      | `boolean` | **Obrigatório**. O status do instrutor que você quer no formato true ou false|

#### delata um instrutor específico

```http
  DEL /api/instrutores/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do instrutor que você quer |
## Melhorias

É necessário adicionar autenticação em algumas rotas.

## Autor

- [@Andre-Rodrigues-Correia](https://github.com/Andre-Rodrigues-Correia)

