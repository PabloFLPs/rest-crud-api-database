const Sequelize = require("sequelize")

class User extends Sequelize.Model{
  static init(sequelize){
    super.init(
      {
        name: Sequelize.STRING,
        middlename: Sequelize.STRING,
        age: Sequelize.INTEGER
      },
      {
        freezeTableName: true,
        tableName: "users",
        sequelize
      }
    )
    return this
  }
}

module.exports = User
