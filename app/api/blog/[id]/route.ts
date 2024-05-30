import { NextRequest } from "next/server";
import connectToDb from "./../../../../utils/database";
import { Blog } from "./../../../../model/blog";

// GET with by id
export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").slice(-1)[0];
  try {
    await connectToDb();
    const post = await Blog.findById(id).populate("creator");
    return Response.json({ status: 200, message: post });
  } catch (error) {
    return Response.json({ status: 500, message: "blog not found" });
  }
}

// DELETE method
export async function DELETE(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").slice(-1)[0];
  try {
    await connectToDb();
    const post = await Blog.deleteOne({ _id: id });
    return Response.json({ status: 200, message: { post: post, text: "post successfuly deleted" } });
  } catch (error) {
    return Response.json({ status: 500, message: "blog not found" });
  }
}

// PATCH update
export async function PATCH(req: NextRequest) {
  const { title, postImg, postText, authorId, catName } = await req.json();
  try {
    await connectToDb();
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").slice(-1)[0];

    let blog = await Blog.findOneAndUpdate(
      { _id: id },
      {
        title,
        postImg,
        postText,
        authorId,
        catName,
      }
    );

    await blog.save();
  } catch (error) {
    return Response.json({ status: 500, message: "Something went wrong" });
  }
  return Response.json({ status: 200, message: " User created Updated" });
}