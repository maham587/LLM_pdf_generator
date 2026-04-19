const express = require("express");
const router = express.Router();
const generateText = require("../services/llm");

router.post("/", async (req, res) => {
  try {
    const { topic } = req.body;

    const text = await generateText(topic);

    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur génération" });
  }
});

module.exports = router;
