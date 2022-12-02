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

## rota de autenticação
### instrutores
```http
POST /api/auth/instrutores/login
```

### alunos
```http
POST /api/auth/alunos/login
```

## rota Alunos
#### Retorna todos os alunos
```http
  GET /api/alunos/
```

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

#### Atualiza um aluno

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

#### Deleta um aluno específico

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

#### Atualiza um instrutor

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

#### Deleta um instrutor específico

```http
  DEL /api/instrutores/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do instrutor que você quer |

## rota Fichas
#### Retorna todos as fichas

```http
  GET /api/fichas/
```

#### Retorna uma ficha específica

```http
  GET /api/fichas/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da ficha que você quer |

#### Cadastra uma ficha

```http
  POST /api/fichas/
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `aluno`      | `string` | **Obrigatório**. O Nome do aluno que você quer |
| `instrutor`      | `string` | **Obrigatório**. O Nome do instrutor que você quer |
| `ativa`      | `boolean` | **Obrigatório**. O status da ficha que você quer no formato true ou false |
| `dataInicio`      | `date` | **Obrigatório**. A data de início que você quer no formato yyyy/mm/dd |
| `execucoes`      | `array` | **Obrigatório**. A ou as execuções que você quer |

#### Atualiza uma ficha

```http
  PUT /api/fichas/{id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da ficha que você quer |
| `aluno`      | `string` | **Obrigatório**. O Nome do aluno que você quer |
| `instrutor`      | `string` | **Obrigatório**. O Nome do instrutor que você quer |
| `ativa`      | `boolean` | **Obrigatório**. O status da ficha que você quer no formato true ou false |
| `dataInicio`      | `date` | **Obrigatório**. A data de início que você quer no formato yyyy/mm/dd |
| `execucoes`      | `array` | **Obrigatório**. A ou as execuções que você quer |

#### Delata uma ficha específica

```http
  DEL /api/fichas/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da ficha que você quer |

## rota Grupo Muscular
#### Retorna todos os grupos musculares

```http
  GET /api/gruposmusculares/
```

#### Retorna um grupo muscular específico

```http
  GET /api/gruposmusculares/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do grupo muscular que você quer |

#### Cadastra um grupo muscular

```http
  POST /api/gruposmusculares/
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O Nome do grupo muscular que você quer |

#### Atualiza um grupo muscular

```http
  PUT /api/gruposmusculares/{id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do grupo muscular que você quer |
| `nome`      | `string` | **Obrigatório**. O Nome do grupo muscular que você quer |

#### Delata um grupo muscular específico

```http
  DEL /api/gruposmusculares/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do grupo muscular que você quer |

## rota Tipo Exercício
#### Retorna todos os tipos de exercícios

```http
  GET /api/tipoexercicios/
```

#### Retorna um tipo de exercício específico

```http
  GET /api/tipoexercicios/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do tipo de exercício que você quer |

#### Cadastra um tipo de exercício

```http
  POST /api/tipoexercicios/
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O Nome do tipo de exercício que você quer |
| `pesoMinimo`      | `number` | **Obrigatório**. O Número de peso mínimo que você quer |
| `pesoMaximo`      | `number` | **Obrigatório**. O Número de peso máximo que você quer |
| `degrauPeso`      | `number` | **Obrigatório**. O Número de degrau de peso que você quer |
| `grupoMuscular`      | `array` | **Obrigatório**. O Nome do grupo muscular que você quer |

#### Atualiza um tipo de exercício

```http
  PUT /api/tipoexercicios/{id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do tipo de exercício que você quer |
| `nome`      | `string` | **Obrigatório**. O Nome do tipo de exercício que você quer |
| `pesoMinimo`      | `number` | **Obrigatório**. O Número de peso mínimo que você quer |
| `pesoMaximo`      | `number` | **Obrigatório**. O Número de peso máximo que você quer |
| `degrauPeso`      | `number` | **Obrigatório**. O Número de degrau de peso que você quer |
| `grupoMuscular`      | `array` | **Obrigatório**. O Nome do grupo muscular que você quer |

#### Delata um tipo de exercício específico

```http
  DEL /api/tipoexercicios/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do tipo de exercício que você quer |

## Melhorias

É necessário adicionar autenticação em algumas rotas.

## Autores

- [@Andre-Rodrigues-Correia](https://github.com/Andre-Rodrigues-Correia)
- [@WilliamDS-Uchiha](https://github.com/WilliamDS-Uchiha)
