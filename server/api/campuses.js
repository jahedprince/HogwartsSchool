const router = require("express").Router();
const { Campus, Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const data = await Campus.findAll({
      include: Student,
    });
    res.send(data);
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

//EDIT
router.put("/:campusId/", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId, {
      include: Student,
    });
    res.send(await campus.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.get("/:campusId", async (req, res, next) => {
  try {
    const data = await Campus.findByPk(req.params.campusId, {
      include: Student,
    });
    res.send(data);
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
