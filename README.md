# REST API
## CRUD API with NodeJS and Express

This application is a CRUD API. "CRUD" is assign to "Create, Read, Update and Delete". In this case, we have:
- creating user route;
- get users route;
- update user route;
- delete user route.

This is a simple application with focus on database integration. So the users entity have only the following attributes:
```
JSON:
{
	name: name,
	middlename: middlename:
	age: age
}
```
And the following as automatic attributes (dont need to be added on the create user route):
```
JSON:
{
	createdAt: createdAt
	updateAt: updatedAt
}
```

## Settings to run:
`yarn add express`: adding express;
`yarn add pg`: adding postgres config;
`yarn add sequelize`: adding sequelize.

**Remember to add your own database credentials to the database config file!**
Use the dotenv library with the .env file structured as below.

## Tutorial:
- Adding express dependencies:
`yarn add express`

- Adding sequelize dependencies:
`yarn add sequelize`

- Adding postgres databse config dependencies:
`yarn add pg`

- Adding the sequelize command line interface:
`yarn add sequelize-cli`

- Adding dotenv library:
`yarn add dotenv`

The .env file must have this structure:
```
DB_USERNAME=database_username
DB_PASSWORD=database_password
DB_NAME=database_name
HOST=host
DB_DIALECT=database_type
```


## Database
We need a database to rest our data, so lets create one!
After downloading the Postgres client installer, we can choose to install only the Command Line Tools and the PG Server.

- Search to "psql shell" and open it. The password is the same that was set on the installation.
- Creating the database:
`create database [database name]`

And you have your local database!

**Important Commands to database integration:**
`yarn sequelize init` initialize the Sequelize configuration files, dont worry about it.
`yarn sequelize migration:create --name=create-user` creating migration, it already exists on the project, so dont worry about it too.
`yarn sequelize db:migrate` migrate the migrations for the entities creation on database.

## Backup de Problemas:
**Problemas enfrentados para realizar o projeto**
- utilizar `type: module` no package.json e trollar o Sequelize;
- problema na model -> refiz o projeto 2 vezes (exceto bd);
- falta do created_at e updated_at que n sabia que eram necessarios;
- created_at sem a propriedade de underscored;
- falta de dar require do databse na index.js da API.
