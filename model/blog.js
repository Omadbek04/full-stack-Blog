import mongoose, { models } from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    catName: String,
    postImg: String,
    postText: String,
    authorId: String,
  },
  { timestamps: true }
);

export const Blog = models.BlogItem || mongoose.model("BlogItem", blogSchema);
