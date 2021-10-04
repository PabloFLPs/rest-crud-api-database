const express = require("express")
const User = require("./models/User")
const usersRoutes = require("./routes/users.js")

//initializing our application
const app = express()
const PORT = 3000

//bodyparser is deprecated
app.use(express.json()) //initializing express middleware

require("./database/index.js") //

//setting our /users path routes
app.use("/users", usersRoutes)

//our API homepage
app.get("/", (request, response) => response.send("You're on the Homepage!"))

//setting the API listening
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`))