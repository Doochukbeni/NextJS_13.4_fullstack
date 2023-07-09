import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Post from "../../../models/Post";

export async function GET(request, response) {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");
  try {
    await connect();
    const posts = (await Post.find(username && { username })) || Post.find();

    return new NextResponse(JSON.stringify(posts), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
  //   return res.json();
}

export async function POST(request, response) {
  const body = await request.json();

  const newPost = new Post(body);
  try {
    await connect();

    await newPost.save();

    return new NextResponse("post has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
  //   return res.json();
}
