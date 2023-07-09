import connect from "@/app/utils/db";
import { NextResponse } from "next/server";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  console.log(newUser);

  try {
    await newUser.save();
    return new NextResponse("user has been Created", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
