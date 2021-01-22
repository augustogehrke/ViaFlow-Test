### START DO PROJETO 

**OBS: Necessário ter instalado o node.js, npm, docker e docker compose no computador.**

**clonar o projeto**
```sh 
git clone https://github.com/augustogehrke/ViaFlow-Test.git AugustoGehrke-Test
```

**Instalar a cli do adonis**
```sh 
npm i -g @adonisjs/cli
```

**Instalar as dependências do projeto**
```sh 
npm install
```

**Criar o arquivo das variáveis de ambiente**
```sh
cp .env.example .env
```

**Observações:**
- O arquivo `.env` pode ser criado manualmente. Nele estará todas as variáveis de ambiente do projeto;
- Configurar a conexão com o banco de dados no arquivo `.env` caso queira subir manualmente o projeto.

**Criar a chave única do projeto**
```sh
adonis key:generate
```

**Criar as tabelas no banco de dados**
```sh
adonis migration:run
```

**Iniciar o servidor em modo de desenvolvimento**
```sh 
adonis serve --dev
```

O projeto iniciará localmente na porta 3333

Caso necessário, a porta pode ser trocada no arquivo `.env`

**Para subir a api em um container, verifique a sessão Usando Docker**

### PADRÃO DE DESENVOLVIMENTO

O projeto faz uso do eslint, seguindo o padrão [Standard](https://standardjs.com/).
O projeto faz uso de funções do ES6.
O projeto faz uso de princípios do Clean Code.

**Comando úteis:**

```sh
npm run lint
```
Verifica se todo o projeto está seguindo o padrão definido, caso não, informa quais os problemas encontrados.

```sh 
npm run lint-fix
```
Verifica se todo o projeto está seguindo o padrão definido, caso não, realiza a correção automática do que for possível e informa quais problemas ainda precisam ser resolvidos.


### REQUISIÇÃO

Informações necessárias no cabeçalho das requisições para padronização das requisições e respostas em formato JSON.

* **Content-Type**: application/json
* **Accept**: application/json

### ROTAS

**[GET] /poa-lines**: Busca todas as linhas ou filtrando pelo nome informado na api datapoa

* [name] - String - nome da linha desejada

**Request:**
```
{
  name: 1 DE MAIO
}
```

**Response:**
```
[
  {
    "id": "5516",
    "codigo": "250-1",
    "nome": "1 DE MAIO"
  },
  {
    "id": "5517",
    "codigo": "250-2",
    "nome": "1 DE MAIO"
  }
]
```

**[GET] /poa-itineraries**: Busca os etinerários de uma linha na api datapoa

* lineId - Int - Identificador da linha desejada. 

OBS: Existe validação para o lineId ser obrigatória e ser um número (app/Validators/Line.js)

**Request:**
```
{
  lineId: 5566
}
```

**Response:**
```
{
  "0": {
    "lat": "-30.02777157701300000",
    "lng": "-51.22692810954200000"
  },
  "1": {
    "lat": "-30.02769057701300000",
    "lng": "-51.22670710954200000"
  },
  "2": {
    "lat": "-30.02743257701300000",
    "lng": "-51.22672510954200000"
  }
  ...
}
```

**[GET] /lines ou /lines/:id**: Busca todas linhas ou uma cadastrada na base

**Response:**
```
{
  "id": 3,
  "name": "LInha X",
  "code": "A9",
  "created_at": "2021-01-21 22:27:35",
  "updated_at": "2021-01-21 22:27:35",
  "itineraries": [
    {
      "id": 1,
      "lat": "-53.4567567671",
      "lng": "-45.5656565656",
      "line_id": 3,
      "created_at": "2021-01-21 22:45:59",
      "updated_at": "2021-01-21 22:45:59"
    },
    {
      "id": 2,
      "lat": "-54.6775565667",
      "lng": "-23.5665656",
      "line_id": 3,
      "created_at": "2021-01-21 22:48:32",
      "updated_at": "2021-01-21 22:48:32"
    }
  ]
}
```

**[POST] /lines**: Cadastro de uma linha dentro da base

* name - String - nome da linha
* code - String - código da linha

**Request:**
```
{
	"name": "LInha X",
	"code": "A9"
}
```

**Response:**
```
{
  "name": "LInha X",
  "code": "A9",
  "created_at": "2021-01-21 22:40:06",
  "updated_at": "2021-01-21 22:40:06",
  "id": 6,
  "itineraries": []
}
```

**[PUT] /lines/:id**: Edição de uma linha dentro da base

* name - String - nome da linha
* code - String - código da linha

**Request:**
```
{
	"name": "Linha XY",
	"code": "A9"
}
```

**Response:**
```
{
  "name": "Linha XY",
  "code": "A9",
  "created_at": "2021-01-21 22:40:06",
  "updated_at": "2021-01-21 22:40:06",
  "id": 6,
  "itineraries": []
}
```

**[DELETE] /lines/:id**: Exclusão de uma linha dentro da base

**Response:**
```
true
```

**[GET] /itineraries ou /itineraries/:id**: Busca todos etinerários ou uma cadastrada na base

**Response:**
```
[
  {
    "id": 1,
    "lat": "-13.4567567671",
    "lng": "-85.5656565656",
    "line_id": 3,
    "created_at": "2021-01-21 22:45:59",
    "updated_at": "2021-01-21 22:45:59"
  },
  {
    "id": 2,
    "lat": "-53.4567567671",
    "lng": "-45.5656565656",
    "line_id": 3,
    "created_at": "2021-01-21 22:48:32",
    "updated_at": "2021-01-21 22:48:32"
  }
]
```

**[POST] /itineraries**: Cadastro de um etinerário dentro da base

* lat - String - latitude do etinerário
* lng - String - longitude do etinerário
* line_id - Number - Identificador da linha

**Request:**
```
{
	"lat": "-53.4567567671",
	"lng": "-45.5656565656",
	"line_id": "3"
}
```

**Response:**
```
{
  "lat": "-53.4567567671",
  "lng": "-45.5656565656",
  "line_id": "3",
  "created_at": "2021-01-21 23:13:49",
  "updated_at": "2021-01-21 23:13:49",
  "id": 4,
  "line": {
    "id": 3,
    "name": "LInha X",
    "code": "A9",
    "created_at": "2021-01-21 22:27:35",
    "updated_at": "2021-01-21 22:27:35"
  }
}
```

**[PUT] /itineraries/:id**: Edição de um etinerário dentro da base

* lat - String - latitude do etinerário
* lng - String - longitude do etinerário
* line_id - Number - Identificador da linha

**Request:**
```
{
	"lat": "-53.4567567671",
	"lng": "-45.5656565656",
	"line_id": "3"
}
```

**Response:**
```
{
  "lat": "-53.4567567671",
  "lng": "-45.5656565656",
  "line_id": "3",
  "created_at": "2021-01-21 23:13:49",
  "updated_at": "2021-01-21 23:13:49",
  "id": 4,
  "line": {
    "id": 3,
    "name": "LInha X",
    "code": "A9",
    "created_at": "2021-01-21 22:27:35",
    "updated_at": "2021-01-21 22:27:35"
  }
}
```

**[DELETE] /itineraries/:id**: Exclusão de uma etinerário dentro da base

**Response:**
```
true
```

### PADRÃO DE ERROS

Caso algo não ocorra como o esperado, existe retorno padrão da api.

Exemplo:
```
{
  "error": {
    "message": "Please enter an ingredient",
    "name": "IncorretParams",
    "status": 400
  }
}
```

### TESTES UNITÁRIOS

O projeto possui testes unitários. Para sua execução é necessário alguns passos.

**Criar o arquivo `.env.testing` responsável pelas variáveis dos testes**
```sh
cp .env.testing.example .env.testing
```

**Observações:**
- O arquivo `.env.testing` pode ser criado manualmente;
- Necessário preencher o arquivo `.env.testing` criado anteriormente com todas as variáveis de ambiente, conforme definidas no arquivo `.env.testing.example`
- As variáveis de testes (`.env.testing`) são mescladas juntos no `.env`;

**Execução dos testes**

```sh
adonis test
```
Executa todos os testes do projeto

```sh
adonis test -f api.spec.js
```
Executa apenas um arquivo de testes específico

**Testes implementados**

**test/unit/providers**
* Verificação se a API Recipe Puppy está online

### Usando Docker

Altere no arquivo `.env` a variável `HOST` para `0.0.0.0`, tornando assim a api acessível externamente

**Comando para subir a api:** 

```sh
docker-compose up --build -d
```

Importante alterar no .env e colocar o ip no qual subiu o Banco de Dados.
Necessário rodar as migration dentro no container para criar as tabelas

Será criado um container com a api rodando na porta 3333

Exemplo de chamada com a api subida via container: http://127.0.0.1:3333/lines
