const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything inside Public/
app.use(express.static(path.join(__dirname, "Public")));

// Default route → index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Grove portal is breathing on port ${PORT}`);
});
