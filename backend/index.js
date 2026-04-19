const express = require("express");
const cors = require("cors");

const app = express();

const generateRoute = require("./routes/generate");

app.use(cors());
app.use(express.json());

app.use("/generate", generateRoute);

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
