import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Your Grove portal is live. 🔥🌙");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
