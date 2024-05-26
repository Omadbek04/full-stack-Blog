import mongoose, { models } from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    image: String,
  },
  { timestamps: true }
);

export const Users = models.Users || mongoose.model("Users", usersSchema);
