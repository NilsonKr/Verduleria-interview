const express = require("express");
const router = express.Router();

const db = require("./database");

router.get("/:id", async (req, res) => {
  const { id: clientId } = req.params;

  try {
    const result = await db.getTransactions(clientId);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const data = req.body;

  console.log(data);
  try {
    const result = await db.createTransaction(data);

    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
