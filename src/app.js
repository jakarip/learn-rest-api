import express from "express";
import QuizRoutes from "./routes/QuizRoutes.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/quizzes", QuizRoutes);

// 404 — route tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} tidak ditemukan` });
});


export default app;
