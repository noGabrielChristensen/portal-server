import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public"
app.use(express.static("public"));

// Root route
app.get("/api/health", (req, res) => {
  res.json({ status: "Grove portal alive 🔥🌙" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
