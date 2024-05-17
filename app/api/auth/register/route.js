import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const { email, password } = await request.json();

  await dbConnect();

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return new NextResponse.json({ message: "User already exists" });
  }

  const hashedPassword = await hash(password, 12);
  const newUser = {
    email,
    password: hashedPassword,
  };

  try {
    await User.create(newUser);
    return new NextResponse("User created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
