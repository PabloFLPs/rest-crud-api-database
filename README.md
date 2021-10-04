# REST API
## CRUD API with NodeJS and Express

This application is a CRUD API, CRUD is assign to "Create, Read, Update and Delete". In this case, we have:
- creating user route;
- get users route;
- update user route;
- delete user route.

This is a simple application without interaction with any databases, so the users in question are added in run-time and remain available while the API is running. For the users ID attibute, was used the uuid - Universal Unic Identifier library to generate IDs.

## Settings to run:

## Tutorial:
- Adding express dependencies:
`yarn add express`

`yarn add cors`

`yarn add sequelize`

`yarn add pg`

`yarn add sequelize-cli`

- Adding "uuid" dependencies:
`yarn add uuid`

## Database
We need a database to rest our data, so lets create one!
After downloading the Postgres client installer, we can choose to install only the Command Line Tools and the PG Server.

- Search to "psql shell" and open it. The password is the same that was set on the installation.
- Creating the database:
`create database [database name]`

And you have your local database!

**Important Commands:**
`yarn init -y`

`yarn add express sequelize pg`

`yarn add nodemon -D`

`yarn add sequelize-cli -D`

`yarn sequelize init`

`yarn sequelize migration:create --name=create-user`

`yarn sequelize db:migrate`


## Backup de Problemas:
**Problemas enfrentados para realizar o projeto**

* problema na model -> refiz o projeto 2 vezes (exceto bd)
* falta do created_at e updated_at que n sabia que eram necessarios
* created_at sem a propriedade de underscored
* falta de dar require do databse na index.js da API
