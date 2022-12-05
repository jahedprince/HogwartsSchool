const router = require("express").Router();
const { Campus } = require("../db");

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

module.exports = router;
