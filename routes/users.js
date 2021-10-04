const express = require("express")
const userController = require("../controllers/user.js")

//initializing our router
const router = express.Router()

/**
 * all routes in here was starting with /users...
 * but /users is the route in index.js, so we set
 * "/" to our routes, because this will result in
 * "/users/".
 */
router.get("/", userController.getUsers)
router.post("/", userController.createUser)
/**
 * the /:id means that we expect anything as param
 * after the "/".
 * 
 * Example:
 * /users/2 -> req.params {id:2}
 */
router.get("/:id", userController.getUserByID)
router.delete("/:id", userController.deleteUser)
router.patch("/:id", userController.updateUser)

module.exports = router