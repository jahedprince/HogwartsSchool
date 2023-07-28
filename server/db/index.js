const db = require("./database");
const Student = require("./Student");
const Campus = require("./Campus");

Campus.hasMany(Student);
// Campus.hasMany(Student, {foreignKey: "campusStudentsId",});
Student.belongsTo(Campus);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Student,
  Campus,
};
