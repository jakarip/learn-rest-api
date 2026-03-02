import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "secret";

const generateToken = (payload) => {
  const token = jwt.sign(payload, secret);
  return token;
};

export default generateToken;
