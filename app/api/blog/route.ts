import { NextRequest } from "next/server";
import connectToDb from "./../../../utils/database";
import { Blog } from "./../../../model/blog";

export async function POST(req: NextRequest) {
  const { title, postImg, postText, authorId, catName } = await req.json();
  try {
    await connectToDb();

    const blog = new Blog({
      title,
      postImg,
      postText,
      authorId,
      catName,
    });

    await blog.save();
  } catch (error) {
    return Response.json({ status: 500, message: "Something went wrong" });
  }
  return Response.json({ status: 200, message: "New User created" });
}

export async function GET() {
  try {
    await connectToDb();
    const res = await Blog.find();
    return Response.json({ status: 200, message: res });
  } catch (error) {
    return Response.json({ status: 500, message: "Something went wrong" });
  }
}
