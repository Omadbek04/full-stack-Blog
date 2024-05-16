import mongoose, { models } from "mongoose";

const CatSchema = new mongoose.Schema(
  {
    name: String,
    catPosts: [String],
  },
  { timestamps: true }
);

export const Category = models.Category || mongoose.model("Category", CatSchema);
