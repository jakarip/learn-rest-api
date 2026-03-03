import { Router } from "express";
import {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from "../controllers/QuizController.js";
import authentication from "../middlewares/authentication.js";
import authorization from "../middlewares/authorization.js";

const router = Router();

router.use(authentication);

router.get("/", getAllQuizzes);
router.get("/:id", getQuizById);
router.post("/", authorization, createQuiz);
router.put("/:id", authorization, updateQuiz);
router.delete("/:id", authorization, deleteQuiz);

export default router;
