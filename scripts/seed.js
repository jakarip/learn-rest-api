import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../src/config/database.js";
import Quiz from "../src/models/QuizModel.js";

const quizzes = [
  {
    title: "Dasar JavaScript",
    description: "Quiz tentang fundamental JavaScript",
    questions: [
      {
        questionText: "Apa output dari typeof null?",
        options: ["null", "undefined", "object", "string"],
        correctAnswerIndex: 2,
      },
      {
        questionText: "Manakah yang bukan tipe data primitif di JS?",
        options: ["string", "boolean", "array", "number"],
        correctAnswerIndex: 2,
      },
      {
        questionText: "Apa fungsi dari Array.prototype.map()?",
        options: [
          "Menghapus elemen array",
          "Membuat array baru dari hasil transformasi",
          "Mengurutkan array",
          "Menggabungkan array",
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    title: "Pengenalan Node.js",
    description: "Quiz seputar dasar-dasar Node.js",
    questions: [
      {
        questionText: "Node.js berjalan di atas engine apa?",
        options: ["SpiderMonkey", "V8", "Chakra", "JavaScriptCore"],
        correctAnswerIndex: 1,
      },
      {
        questionText: "Perintah untuk menginisialisasi project Node.js?",
        options: ["node start", "npm init", "node init", "npm start"],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    title: "HTTP & REST API",
    description: "Pemahaman dasar HTTP method dan REST",
    questions: [
      {
        questionText: "HTTP method untuk mengambil data?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswerIndex: 2,
      },
      {
        questionText: "Status code 201 artinya?",
        options: ["OK", "Created", "Not Found", "Bad Request"],
        correctAnswerIndex: 1,
      },
      {
        questionText: "REST singkatan dari?",
        options: [
          "Remote Execution Service Transfer",
          "Representational State Transfer",
          "Request Entry Server Transport",
          "Responsive Server Technology",
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
];

await connectDB();
await Quiz.deleteMany();
const result = await Quiz.insertMany(quizzes);
console.log(`✅ ${result.length} quiz berhasil di-seed!`);
result.forEach((q) => console.log(`   ${q._id} | ${q.title} (${q.questions.length} soal)`));
await mongoose.disconnect();
console.log("🔌 Koneksi ditutup");
