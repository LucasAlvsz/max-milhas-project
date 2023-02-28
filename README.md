<p align="center"></br>
      <img 
      src="https://uploads-ssl.webflow.com/606907b169dcd481e8fd42c4/60749e148bc1211ddd5bdc7b_maxmilhas%20logo.png" alt="max milhas logo"
	  height="300px"
      />
</p>

</br>
<h1 align="center">
  MaxMilhas Project
  </br>
</h1>
<div align="center">

  <h3>Built With</h3>

  <img alt= "typescript logo" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img alt= "node.js logo" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" height="30px"/>
  <img alt= "express logo" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" height="30px"/>
 
  <img alt= "postgresql logo" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img alt= "prisma logo" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
 
  <img alt= "jest logo" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" height="30px"/>
  <img alt= "docker logo" src="https://img.shields.io/badge/Docker-228FE1?style=for-the-badge&logo=docker&logoColor=white" height="30px"/>

<img alt= "aws logo" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" height="30px"/>

  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

## Description

The CPF Control System is a backend system developed using Node.js and the Express.js framework, with PostgreSQL as the database. Prisma is used as the ORM (Object Relational Mapping) to interact with the database.

The system follows a layered architecture, separating concerns into different layers for better maintainability and scalability. It uses TypeScript, which provides static type checking, improved readability, and better developer experience.

The system follows a RESTful architecture, which makes it easy to consume by other systems and provides a clear separation between the server and the client. The use of unit tests ensures that the system is reliable and robust.

The system is deployed to AWS EC2, which provides scalability, security, and reliability. It can be easily accessed from anywhere with an internet connection, making it a valuable tool for the ecommerce anti-fraud analysis team.

In summary, the CPF Control System uses a combination of modern technologies, such as Node.js, Express.js, Prisma, TypeScript, and AWS EC2, to provide a scalable, reliable, and maintainable solution for the ecommerce anti-fraud analysis team.

The system allows the team to add and remove CPFs from a restricted list, as well as perform searches to check if a given CPF is on the list.

</br>

## Features

-   Add CPF to restricted list
-   Remove CPF from restricted list
-   Search for CPF in restricted list
-   Get all CPFs in restricted list

</br>

## Demo

The application has been deployed to AWS EC2 and is available for testing at http://ec2-18-230-85-1.sa-east-1.compute.amazonaws.com/

Please note that this is just for testing purposes and the environment may not be configured for production use.

## Table of Contents

-   [API Reference](#api-reference)

    -   [Add a CPF to restricted list](#add-a-cpf-to-restricted-list)
    -   [Get a CPF from restricted list](#get-a-cpf-from-restricted-list)
    -   [Remove a CPF from restricted list](#remove-a-cpf-from-restricted-list)
    -   [Get all CPFs from restricted list](#get-all-cpfs-from-restricted-list)

-   [Environment Variables](#environment-variables)

-   [Run Locally](#run-locally)

-   [Run Tests](#run-tests)

## API Reference

#### Add a CPF to restricted list

```http
POST /cpf
```

#### Request:

| Body  | Type     | Description  |
| :---- | :------- | :----------- |
| `cpf` | `string` | **Required** |

`cpf-format`: `00000000000`

#

#### Get a CPF from restricted list

```http
GET /cpf/:cpf
```

#### Request:

| Params | Type     | Description  |
| :----- | :------- | :----------- |
| `cpf`  | `string` | **Required** |

`cpf-format`: `00000000000`

#### Response:

```json
{
	"cpf": "07572261167",
	"createdAt": "2023-02-28T18:28:31.789Z"
}
```

#

#### Remove a CPF from restricted list

```http
DELETE /cpf/:cpf
```

#### Request:

| Params | Type     | Description  |
| :----- | :------- | :----------- |
| `cpf`  | `string` | **Required** |

`cpf-format`: `00000000000`

#

#### Get all CPFs from restricted list

```http
GET /cpf
```

#### Response:

```json
[
	{
		"cpf": "53067029704",
		"createdAt": "2023-02-28T18:43:01.629Z"
	},
	{
		"cpf": "04180601346",
		"createdAt": "2023-02-28T16:54:02.182Z"
	}
]
```

</br>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

##### Without Docker:

`DATABASE_URL = postgres://username:password@hostname:5432/databasename`

`PORT = 5000 or any port you want`

#

##### With Docker:

`PORT = 5000 or any port you want`

`POSTGRES_USER = postgres`

`POSTGRES_PASSWORD = postgres`

`POSTGRES_DB = max-milhas-project`

`POSTGRES_HOST = max-milhas-postgres-db`

`DATABASE_URL = postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}`

</br>

## Run Locally

> Remember to create a .env file with the environment variables in the root of the project.

### Without Docker:

> You will need to have Node.js and PostgreSQL installed on your machine

Clone the project

```bash
  git clone git@github.com:LucasAlvsz/max-milhas-project.git
```

Go to the project directory

```bash
  cd max-milhas-project/
```

Install the dependencies

```bash
  npm install
```

Create environment variables file and add the environment variables

```bash
  touch .env
```

> Remember to change the values of the environment variables to your own.

Unix based systems:

```bash

echo "PORT=5000" > .env
echo "DATABASE_URL=postgres://username:password@hostname:5432/databasename" >> .env

```

Windows:

```bash
echo PORT=5000 > .env
echo DATABASE_URL=postgres://username:password@hostname:5432/databasename >> .env
```

Build the app

```bash
  npm run build
```

Run the app

```bash
  npm run start
```

> The app will be running on http://localhost:5000/ by default.

#

### With Docker [recommended]:

> You will need to have Docker and Docker Compose installed on your machine

Clone the project

```bash
  git clone git@github.com:LucasAlvsz/max-milhas-project.git
```

Go to the project directory

```bash
  cd max-milhas-project/
```

Create environment variables file and add the environment variables

Unix based systems:

```bash
  touch .env
```

```bash
echo "PORT=5000" > .env
echo "POSTGRES_USER=postgres" >> .env
echo "POSTGRES_PASSWORD=postgres" >> .env
echo "POSTGRES_DB=max-milhas-project" >> .env
echo "POSTGRES_HOST=max-milhas-postgres-db" >> .env
echo "DATABASE_URL=postgres://\${POSTGRES_USER}:\${POSTGRES_PASSWORD}@\${POSTGRES_HOST}:5432/\${POSTGRES_DB}" >> .env

```

Windows:

```bash
echo PORT=5000 > .env
echo POSTGRES_USER=postgres >> .env
echo POSTGRES_PASSWORD=postgres >> .env
echo POSTGRES_DB=max-milhas-project >> .env
echo POSTGRES_HOST=max-milhas-postgres-db >> .env
echo DATABASE_URL=postgres://%POSTGRES_USER%:%POSTGRES_PASSWORD%@%POSTGRES_HOST%:5432/%POSTGRES_DB% >> .env

```

Run the app

```bash
  docker-compose -f docker-compose.production.yml up
```

> The app will be running on http://localhost:80/ by default.

</br>

## Run Tests

### Without Docker:

> Follow the steps to run the app without Docker until "Install the dependencies" and then run the following commands:

Create test environment variables file and add the environment variables

Unix based systems:

```bash
  touch .env.test
```

```bash
echo "PORT=5000" > .env.test
echo "DATABASE_URL=postgres://username:password@hostname:5432/databasename" >> .env.test

```

Windows:

```bash
echo PORT=5000 > .env.test
echo DATABASE_URL=postgres://username:password@hostname:5432/databasename >> .env.test
```

Run the tests

```bash
  npm run test
```

> You can ignore the warning about the "FSREQCALLBACK" error.

### With Docker:

> Follow the steps to run the app with Docker until "Go to the project directory" and then run the following commands:

Create environment variables file and add the environment variables

Unix based systems:

```bash
  touch .env.test
```

```bash
echo "PORT=5000" > .env.test
echo "POSTGRES_USER=postgres" >> .env.test
echo "POSTGRES_PASSWORD=postgres" >> .env.test
echo "POSTGRES_DB=max-milhas-project-test" >> .env.test
echo "POSTGRES_HOST=database-ci" >> .env.test
echo "DATABASE_URL=postgres://\${POSTGRES_USER}:\${POSTGRES_PASSWORD}@\${POSTGRES_HOST}:5432/\${POSTGRES_DB}" >> .env.test

```

Windows:

```bash
echo PORT=5000 > .env.test
echo POSTGRES_USER=postgres >> .env.test
echo POSTGRES_PASSWORD=postgres >> .env.test
echo POSTGRES_DB=max-milhas-project-test >> .env.test
echo POSTGRES_HOST=database-ci >> .env.test
echo DATABASE_URL=postgres://%POSTGRES_USER%:%POSTGRES_PASSWORD%@%POSTGRES_HOST%:5432/%POSTGRES_DB% >> .env.test

```

Run the tests

```bash
  docker-compose -f docker-compose.test.yml run api-ci npm run test:remote
```

#

## Authors

-   [@LucasAlvsz](https://www.github.com/LucasAlvsz) 🪐

<br/>

#

<a  href="mailto:contato.lucasalv@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg"></a>
