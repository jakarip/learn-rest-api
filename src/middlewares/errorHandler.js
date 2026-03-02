import mongoose from "mongoose";

const errorHandler = (err, req, res, next) => {
  let message = err.message || err;
  let status = 500;

  // Validation error
  if (err instanceof mongoose.Error.ValidationError) {
    let tempErr = [];
    for (let key in err.errors) {
      tempErr.push(err.errors[key].message);
    }
    message = tempErr;
    status = 400;
  }

  // Duplicate key (unique constraint)
  if (err.code === 11000) {
    message = "Email sudah terdaftar";
    status = 400;
  }

  res.status(status).json({ success: false, message });
};

export default errorHandler;
