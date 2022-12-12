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
    defaultValue: "icon.jpeg",
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 4,
    },
  },
});

module.exports = Student;
