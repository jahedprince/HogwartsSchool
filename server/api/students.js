const router = require("express").Router();
const { Student, Campus } = require("../db");

Campus.hasMany(Student);
Student.belongsTo(Campus);

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

router.put("/unregister/:studentId", async (req, res, next) => {
  try {
    const todo1 = await Student.findByPk(req.params.studentId, {
      include: Campus,
    });

    const todo2 = await Campus.findByPk(todo1.campusId);

    await todo2.unregisterStudent(todo1);

    res.send(todo1);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
