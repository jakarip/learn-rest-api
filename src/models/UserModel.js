import mongoose from "mongoose";
import { hash } from "../helpers/password.js";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email harus diisi"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password harus diisi"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true },
);

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await hash(this.password);
});

export default mongoose.model("User", UserSchema);
