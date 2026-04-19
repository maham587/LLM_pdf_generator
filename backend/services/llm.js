const axios = require("axios");

async function generateText(topic) {
  const response = await axios.post("http://localhost:11434/api/generate", {
    model: "llama3",
    prompt: `Génère un document structuré niveau intermédiaire sur : ${topic}`,
    stream: false,
  });

  return response.data.response;
}

module.exports = generateText;
