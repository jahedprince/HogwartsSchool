const router = require("express").Router();
const { Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

router.get("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.campusId);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
