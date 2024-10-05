const express = require("express");
const axios = require("axios");
const router = express.Router();

// Route for generating docs
router.post("/", async (req, res) => {
  console.log("server.js hit");

  const codeText = req.body.code; // Get the code text from the request body
  const extraPrompt = req.body.extraPrompt; // Get the extraPrompt from the request body

  if (!codeText) {
    return res.status(400).json({ error: "No code provided" });
  }

  try {
    // Forward both codeText and extraPrompt to the Flask API
    const response = await axios.post(
      "http://localhost:5000/generate-docs",
      {
        code: codeText,
        extraPrompt: extraPrompt, // Include extraPrompt in the payload
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    // Check if the response contains documentation
    if (response.data && response.data.documentation) {
      res.json({ documentation: response.data.documentation });
    } else {
      res.status(500).json({ error: "Failed to get documentation" });
    }
  } catch (error) {
    console.error("Error forwarding request to Flask:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
