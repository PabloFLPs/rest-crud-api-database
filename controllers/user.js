const User = require("../models/User")

class UserController{
  async getUsers(request, response){
    const users = await User.findAll();

    //response.send("These are all the stored users:")
    return response.json(users);
  }

  async createUser(request, response){
    const {name, middlename, age} = request.body
    const user = await User.create({name, middlename, age})

    //response.send(`User with id ${id} succesfully created.`)
    return response.json(user)
  }

  async getUserByID(request, response){
    const {id} = request.params
    const user = await User.findOne({where: {id: id}})

    //response.send(`User with id ${id} is:`)
    return response.json(user)
  }

  async deleteUser(request, response){
    const {id} = request.params
    const user = await User.findOne({where: {id: id}})
    user.destroy()

    //response.send(`User with id ${id} succesfully deleted from the database.`)
    return response.json(user)
  }

  async updateUser(request, response){
    const {id} = request.params
    let user = await User.findOne({where: {id: id}})
    user = await user.update(request.body)

    //response.send(`User with id ${id} succesfully updated.`)
    return response.json(user)
  }
}

module.exports = new UserController()