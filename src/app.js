import express from "express";
import QuizRoutes from "./routes/QuizRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/quizzes", QuizRoutes);
app.use("/api/users", UserRoutes);

// 404 — route tidak ditemukan
app.use((req, res) => {
  res
    .status(404)
    .json({
      success: false,
      message: `Route ${req.originalUrl} tidak ditemukan`,
    });
});

// Error handler
app.use(errorHandler);

export default app;
