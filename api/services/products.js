const express = require("express");
const database = require("./database");

const router = express.Router();

router.get("/", async (req, res) => {
  const filter = req.query;

  try {
    const result = await database.list(filter);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unexpected Error");
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await database.update(id, req.body);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unexpected Error");
  }
});

module.exports = router;
