# Learn REST API — Quiz Manager

REST API sederhana untuk **mengelola Quiz** menggunakan **Express.js** + **MongoDB (Mongoose)**.

## Fitur
- Create quiz baru (POST)
- Read semua quiz (GET)
- Read quiz by ID (GET)
- Update quiz (PUT)
- Delete quiz (DELETE)
- Error handling middleware (ValidationError, CastError, 404, duplicate key)

## Struktur Folder

```
learn-rest-api/
├── server.js                        # Entry point: load env, koneksi DB, start server
├── src/
│   ├── app.js                       # Setup Express: middleware, routes, error handler
│   ├── config/
│   │   └── db.js                    # Konfigurasi & koneksi MongoDB
│   ├── models/
│   │   └── quiz.model.js            # Mongoose schema & model Quiz
│   ├── controllers/
│   │   └── quiz.controller.js       # Handler CRUD (logic bisnis)
│   ├── routes/
│   │   └── quiz.routes.js           # Definisi endpoint API
│   ├── middlewares/
│   │   ├── notFound.js              # Middleware 404 (route tidak ditemukan)
│   │   └── errorHandler.js          # Global error handler
│   └── utils/
│       ├── ApiError.js              # Custom error class
│       └── asyncHandler.js          # Wrapper async (hilangkan try/catch)
├── scripts/
│   └── seed.js                      # Script seed data contoh
└── .env                             # Environment variables (tidak di-push ke git)
```

## Instalasi

```bash
npm install
```

## Seed Data Contoh

```bash
npm run seed
```

## Menjalankan Server

```bash
npm start
```

## API Endpoints

| Method | URL                | Keterangan          |
| ------ | ------------------ | ------------------- |
| GET    | /api/quizzes       | Ambil semua quiz    |
| GET    | /api/quizzes/:id   | Ambil quiz by ID    |
| POST   | /api/quizzes       | Buat quiz baru      |
| PUT    | /api/quizzes/:id   | Update quiz         |
| DELETE | /api/quizzes/:id   | Hapus quiz          |

## Contoh Body POST/PUT

```json
{
  "title": "Quiz JavaScript",
  "description": "Soal dasar JS",
  "questions": [
    {
      "questionText": "Apa itu closure?",
      "options": ["Fungsi dalam fungsi", "Variabel global", "Tipe data", "Operator"],
      "correctAnswerIndex": 0
    }
  ]
}
```
