import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Lab AP API funcionando",
  });
});

app.listen(PORT, () => {
  console.log(`Lab AP API running on http://localhost:${PORT}`);
});
