const router = require("express").Router();
const { Campus, Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

router.get("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId);
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

router.get("/:campusId/students", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      where: { campusId: req.params.campusId },
      include: [Campus],
    });
    res.json(students);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Campus.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId);
    await campus.destroy();
    res.send(campus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
