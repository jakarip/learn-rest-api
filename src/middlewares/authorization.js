const authorization = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({
        success: false,
        message: "Akses ditolak, hanya admin yang diizinkan",
      });
  }
  next();
};

export default authorization;
