import User from "../models/UserModel.js";
import { compare } from "../helpers/password.js";
import generateToken from "../helpers/token.js";

// POST /api/users/register
export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body || {};

    const user = await User.create({ email, password });
    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/users/login
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // cek user exist
    if (user) {
      // cek pass match
      const isMatch = compare(password, user.password);
      if (isMatch) {
        const token = generateToken({
          id: user._id,
          email: user.email,
          role: user.role,
        });
        res.json({
          success: true,
          data: {
            id: user._id,
            email: user.email,
            role: user.role,
            token,
          },
        });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Invalid email or password" });
      }
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (err) {
    next(err);
  }
};
