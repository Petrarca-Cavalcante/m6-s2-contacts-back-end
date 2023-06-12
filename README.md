# Apresentação      
---
#### O projeto Full-Stack Contacts é uma plataforma abrangente de gerenciamento de contatos. Ele oferece recursos de login, registro e a capacidade de criar, listar, editar e excluir seus contatos. O front-end foi desenvolvido utilizando a combinação de React/Vite e várias outras tecnologias, enquanto o Back-End foi construído com Node/Express e utiliza o banco de dados PostgreSQL.
---
### 1 Tecnologias usadas:
#### Back-End
- NodeJs
- TypeScript/Javascript
- Express
- TypeORM
- PostgreSql
- dotenv
- express async errors
- jsonwebToken
- yup
- cors
- bcrypt

#### Front-End
- React/vite
- TypeScript/JavaScript
- Styled Components
- React Router Dom
- React Hook Form
- Axios
- yup


#### Link do repositório do Front-End

#### https://github.com/Petrarca-Cavalcante/m6-s2-contacts-front-en#d

---
### 2.1 Instalando Dependências

Clone os projetos em sua máquina e instale as dependências de cada um com o comando (deve ser feito em ambos):

````
npm install

````

### 2.2 Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```
Configure as variáveis de ambiente com os dados do seu banco de dados pedidos no .env.

### 2.3 Gerando/Rodando as migrações do Back-End

Após isto, para fazer as migrações para seu banco de dados, rode este comando:
```
npm run typeorm migration:run -- -d src/data-source.ts
```
!!!
Caso algum erro ocorra em razão das migrações, delete o arquivo de migrações localizado na 
** src/migrations/* **
Também apague as tables criadas no banco de dados. Após isto, gere e rode as migrações com os seguintes comandos
!!!
```
npm run typeorm migration:generate src/migrations/createTables -- -d src/data-source.ts
-
npm run typeorm migration:run -- -d src/data-source.ts
```

### 2.4 Rodando As Aplicações

Para iniciar as aplicações use comando (deve ser feito em cada aplicação):

````
npm run dev
````

## 3. Endpoints

### Índice

-[ login ]
  -[ POST | /login ]


- [ user ]
  - [ POST | /user ]
  - [ GET | /user ]
  - [ PATCH | /user ]
  - [ DELETE | /user ]

- [ contact ]
  - [ POST | /contacts ]
  - [ GET | /contacts ]
  - [ PATCH | /contacts/:id ]
  - [ DELETE | /contacts/:id ]

  
  ## 4. **Características dos Login, Usuário e Contatos**

#### Login
| Campo      |    Tipo     | Descrição                                       |
| -----------|-------------|-------------------------------------------------|
| email      | string      | O e-mail do usuário.                            |
| password   | string      | A senha do usuário.                             |
-----------------------------------------------------------------------------

 #### Usuário
| Campo      |    Tipo     | Descrição                                       |
| -----------|-------------|-------------------------------------------------|
| id         | uuid/string | Identificador único do usuário                  |
| name       | string      | O nome do usuário.                              |
| email      | string      | O e-mail único do usuário.                      |
| telefones  | string[]    | A números do usuario                            |
| contacts   | contact[]   | Os contatos do usuário                          |
| createdAt  | timestamp   | Data de criação do usuário                      |
| updatedAt  | timestamp   | Data de atualização do usuário                  |
-----------------------------------------------------------------------------

#### Contato

| Campo      |    Tipo     | Descrição                                       |
| -----------|-------------|-------------------------------------------------|
| id         | uuid/string | Identificador único do contato                  |
| name       | string      | O nome do contato.                              |
| emails     | string[]    | Os emails do contato.                           |
| telefones  | string[]    | A números do contato                            |
| createdAt  | timestamp   | Data de criação do contato                      |
-----------------------------------------------------------------------------


### 1 **Login

### `/login`

### Exemplo de Request:
```
POST /login
Host: localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
  	"email": "pedro@mail.com",
	"password": "1234"
}
```

### Validação:
```javascript
{
  	"email": string/email,
	"password": string
}
```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
200 OK
```

```json
{
	"token": JWT é gerado.,
	"user": {
		"id": "e008b289-a559-4a1b-b939-2206f0eb6b77",
		"name": "BAM",
		"email": "aaa@mail.com",
		"telefones": [
			"11111"
		],
		"isActive": true,
		"isAdmin": false,
		"createdAt": "2023-06-07T01:05:07.866Z",
		"updatedAt": "2023-06-07T01:05:07.866Z",
		"contacts": []
	}
}
```

### Possíveis Erros:
| Código do Erro  | Descrição				       |
|-----------------|--------------------------------------------|
| 400 BAD REQUEST | "message": " "field" is a required field"  |
| 400 FORBIDDEN   | "message": "Invalid email or password"     |
-------------------------------------------------------------------------------------------------

### 1 **Criação de Usuário

### `/user`

### Exemplo de Request:
```
POST /user
Host: localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"name": "André",
	"telefones": ["85911112222",
	"email": "andre@mail.com",
  	"password": "1234"
}
```

### Validação:
```javascript
nome: string,
email: string/email,
telefones: string[],
password: string
```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
201 Created
```

```json
{
	"name": "André",
	"email": "andre@mail.com",
	"telefones": [
		"85911112222"
	],
	"contacts": [],
	"id": "52c66e0a-5d99-45a7-b457-b69899a4ea39",
	"isActive": true,
	"isAdmin": false,
	"createdAt": "2023-06-05T17:39:30.984Z",
	"updatedAt": "2023-06-05T17:39:30.984Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 400 BAD REQUEST| "message": "User aready exists" |

-------------------------------------------------------------------------------------------------------

### 2 **Listando Usuário Logado

### `/user`

### Exemplo de Request:
```
GET /user
Host: localhost:3000
Authorization: "Bearer: 52c66e0a-5d99-45a7-b457-b69899a4ea39"
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK

{
	"id": "52c66e0a-5d99-45a7-b457-b69899a4ea39",
	"name": "Pedro",
	"email": "jaao@gmail.com",
	"telefones": [
		"85911112222"
	],
	"isActive": true,
	"isAdmin": false,
	"createdAt": "2023-06-05T17:39:30.984Z",
	"updatedAt": "2023-06-05T17:39:30.984Z",
	"contacts": []
}
```

### Possíveis Erros:
| Código do Erro  | Descrição                  |
|-----------------|----------------------------|
| 401 UNATHORIZED | "message": "invalid token" |

------------------------------------------------------------------------------------------------------------

### 3 **Atualizando Usuário Logado

### `/user`

### Exemplo de Request:
```
PATCH /user
Host: localhost:3000
Authorization: "Bearer: "52c66e0a-5d99-45a7-b457-b69899a4ea39"
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"email": "joao@gmail.com",
	"password": "1234",
	"name": "Pedro Santos",
	"telefones": ["85911112222"]
}
```

### Exemplo de Response:
```
200 OK
```
{
	"id": "c3c77b8a-4390-41d4-98cf-fdffbb446d18",
	"name": "Pedro Santos",
	"email": "joao@gmail.com",
	"telefones": [
		"85911112222"
	],
	"contacts": [],
	"createdAt": "2023-05-26T17:01:11.931Z",
	"updatedAt": "2023-05-26T17:01:34.102Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição                                      |
|----------------|------------------------------------------------|
| 400 BAD REQUEST | "message": "Invalid x field"                  |
| 401 UNATHORIZED | "message": "invalid token"                    |

-----------------------------------------------------------------------------------------------------------------
``` 
### 4 **Deletando Usuário Logado

### `/user`

### Exemplo de Request:
```
DELETE /user
Host: localhost:3000
Authorization: "Bearer: "52c66e0a-5d99-45a7-b457-b69899a4ea39"
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 NO CONTENT
```
```json
NO BODY
```

### Possíveis Erros:
| Código do Erro    | Descrição |
|-------------------|-----------|
| 404 NOT FOUND     | "message": "User not found" |
| 401 UNATHORIZED   | "message": "invalid token"  | 
------------------------------------------------------------------------------------------------------------------

### 1 **Criação de Contato**

### `/contacts`

### Exemplo de Request:
```
POST /contacts
Host: localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"emails": ["antony@gmail.com"],
	"name": "Antony",
	"telefones": ["85911112222"]
}
```

### Validação:
```javascript
	"emails": string[],
	"name": string,
	"telefones": string[]
```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
201 Created
```

```json
{
	"id": "e876af68-fc98-4490-a469-16457563e23d",
	"name": "Antony",
	"emails": [
		"pedroa@gmail.com"
	],
	"telefones": [
		"85911112222"
	],
	"createdAt": "2023-06-07T16:52:08.775Z"
}
```

### Possíveis Erros:
| Código do Erro    | Descrição |
|-------------------|-----------|
| 400 BAD REQUEST   | "message": " 'x' is a required field" |
| 401 UNATHORIZED   | "message": "invalid token"  	    | 

-------------------------------------------------------------------------------------------------------

### 2 **Listando Contatos do Usuário Logado

### `/contacts`

### Exemplo de Request:
```
GET /contacts
Host: localhost:3000
Authorization: "Bearer: 52c66e0a-5d99-45a7-b457-b69899a4ea39"
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK

[
	{
		"id": "e876af68-fc98-4490-a469-16457563e23d",
		"name": "Antony",
		"emails": [
			"pedroa@gmail.com"
		],
		"telefones": [
			"85911112222"
		],
		"createdAt": "2023-06-07T16:52:08.775Z"
	},
	... demais contatos 
]
```

### Possíveis Erros:
| Código do Erro  | Descrição                  |
|-----------------|----------------------------|
| 401 UNATHORIZED | "message": "invalid token" |

------------------------------------------------------------------------------------------------------------

### 3 **Atualizando Contato

### `/contacts/:id`

### Exemplo de Request:
```
PATCH /contacts/e876af68-fc98-4490-a469-16457563e23d
Host: localhost:3000
Authorization: "Bearer: "52c66e0a-5d99-45a7-b457-b69899a4ea39"
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"emails": ["joao@mail.com"],
	"name": "Joao",
	"telefones": ["85911112222"]
}
```

### Exemplo de Response:
```
200 OK

{
	"id": "99272fd8-edee-46cd-9606-8dcecc5f63bf",
	"name": "Antony",
	"emails": ["joao@mail.com"],
	"telefones": ["85911112222"],
	"createdAt": "2023-06-07T16:52:08.775Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição                                      |
|----------------|------------------------------------------------|
| 400 BAD REQUEST | "message": """campo" must be a `tipo do campo` type, but the final value was: "valor enviado" "                  |
| 401 UNATHORIZED | "message": "invalid token"                    |

-----------------------------------------------------------------------------------------------------------------

``` 
### 4 **Deletando Contato

### `/contacts/:id`

### Exemplo de Request:
```
DELETE /user/e876af68-fc98-4490-a469-16457563e23d
Host: localhost:3000
Authorization: "Bearer: "52c66e0a-5d99-45a7-b457-b69899a4ea39"
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 NO CONTENT
```
```json
NO BODY
```

### Possíveis Erros:
| Código do Erro    | Descrição |
|-------------------|-----------|
| 404 NOT FOUND     | "message": "Contact not found or user does not own the contact" |
| 401 UNATHORIZED   | "message": "invalid token"  | 
