require("dotenv").config()

const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD
const database=process.env.DB_NAME
const host=process.env.HOST
const dialect=process.env.DB_DIALECT

module.exports = {
  "username": `${username}`,
  "password": `${password}`,
  "database": `${database}`,
  "host": `${host}`,
  "dialect": `${dialect}`
}