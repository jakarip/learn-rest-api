import { Router } from "express";
import {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from "../controllers/QuizController.js";
import authentication from "../middlewares/authentication.js";

const router = Router();

router.use(authentication);

router.get("/", getAllQuizzes);
router.get("/:id", getQuizById);
router.post("/", createQuiz);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);

export default router;
