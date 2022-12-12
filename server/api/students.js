const router = require("express").Router();
const Campus = require("../db/Campus");
const Student = require("../db/Student");

router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: Campus,
    });
    res.send(students);
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

router.get("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId, {
      include: Campus,
    });
    res.send(student);
  } catch (err) {
    next(err);
  }
});

router.put("/:studentId", async (req, res, next) => {
  try {
    const todo = await Student.findByPk(req.params.studentId, {
      include: Campus,
    });
    res.send(await todo.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/:studentId", async (req, res, next) => {
  try {
    const todo = await Student.findByPk(req.params.studentId);
    await todo.destroy();
    res.send(todo);
  } catch (err) {
    next(err);
  }
});

router.put("/students/:id", async (req, res, next) => {
  try {
    const studentToUpdate = await Student.findByPk(req.params.id);
    const updatedStudentData = await studentToUpdate.update(req.body);
    res.status(201).send(updatedStudentData);
  } catch (err) {
    console.error("error in campuses put route: ");
    next(err);
  }
});

module.exports = router;
