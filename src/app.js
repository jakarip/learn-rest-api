import express from "express";
import QuizRoutes from "./routes/QuizRoutes.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/quizzes", QuizRoutes);

// 404 — route tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} tidak ditemukan` });
});

// Global error handler (harus paling bawah)
app.use(ErrorHandler);

export default app;
