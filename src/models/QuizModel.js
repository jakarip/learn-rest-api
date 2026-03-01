import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: [true, "Teks pertanyaan harus diisi"], trim: true },
  options: {
    type: [String],
    validate: {
      validator: (arr) => arr.length >= 2,
      message: "Minimal harus ada 2 pilihan jawaban",
    },
  },
  correctAnswerIndex: { type: Number, required: [true, "Index jawaban benar harus diisi"], min: 0 },
});

const QuizSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Judul quiz harus diisi"], trim: true },
    description: { type: String, default: "", trim: true },
    questions: {
      type: [QuestionSchema],
      validate: {
        validator: (arr) => arr.length >= 1,
        message: "Quiz harus memiliki minimal 1 pertanyaan",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", QuizSchema);
