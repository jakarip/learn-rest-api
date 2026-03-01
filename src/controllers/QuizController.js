import Quiz from "../models/QuizModel.js";

// GET /api/quizzes
export const getAllQuizzes = async (req, res, next) => {
  try {
    const quizzes = await Quiz.find();
    res.json({ success: true, count: quizzes.length, data: quizzes });
  } catch (err) {
    next(err);
  }
};

// GET /api/quizzes/:id
export const getQuizById = async (req, res, next) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ success: false, message: "Quiz tidak ditemukan" });
    res.json({ success: true, data: quiz });
  } catch (err) {
    next(err);
  }
};

// POST /api/quizzes
export const createQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json({ success: true, data: quiz });
  } catch (err) {
    next(err);
  }
};

// PUT /api/quizzes/:id
export const updateQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!quiz) return res.status(404).json({ success: false, message: "Quiz tidak ditemukan" });
    res.json({ success: true, data: quiz });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/quizzes/:id
export const deleteQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) return res.status(404).json({ success: false, message: "Quiz tidak ditemukan" });
    res.json({ success: true, message: `Quiz '${quiz.title}' berhasil dihapus` });
  } catch (err) {
    next(err);
  }
};
