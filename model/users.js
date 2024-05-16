import mongoose, { models } from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: String,
    lastName: String,
    email: String,
    img: String,
  },
  { timestamps: true }
);

export const Users = models.Users || mongoose.model("Users", usersSchema);
