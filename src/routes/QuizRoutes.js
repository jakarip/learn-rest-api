import { Router } from "express";
import { getAllQuizzes, getQuizById, createQuiz, updateQuiz, deleteQuiz } from "../controllers/QuizController.js";

const router = Router();

router.get("/", getAllQuizzes);
router.get("/:id", getQuizById);
router.post("/", createQuiz);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);

export default router;
