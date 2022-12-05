const Sequelize = require("sequelize");
const db = require("./database");

const Student = db.define("Student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://assets.stickpng.com/images/6127d693aa481f0004ea72c5.png",
  },
  gpa: {
    type: Sequelize.FLOAT,
    max: 4.0,
    min: 0.0,
  },
});

module.exports = Student;
