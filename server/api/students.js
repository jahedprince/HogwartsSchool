const router = require("express").Router();
const { Student, Campus } = require("../db");

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
    const student = await Student.findByPk(req.params.studentId, {
      include: Campus,
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Student.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    await student.destroy();
    res.send(student);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
