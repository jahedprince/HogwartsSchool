const db = require("./database");
const Student = require("./Student");
const Campus = require("./Campus");

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Student,
  Campus,
};
