import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "../../../../models/Post";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connect();
    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
  //   return res.json();
}
export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await connect();
    await Post.findByIdAndDelete(id);

    return new NextResponse("post was deleted successfully", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
  //   return res.json();
}
export async function PUT(request, { params }) {
  const body = await request.json();

  const upDatedPost = new Post(body);
  const { id } = params;
  try {
    await connect();
    await Post.findByIdAndUpdate(id, { upDatedPost });

    return new NextResponse("post was Updated successfully", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
  //   return res.json();
}
