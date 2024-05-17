import dbConnect from "@/lib/mongodb";
import HomePageModel from "@/models/HomePageModel";
import User from "@/models/User";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const result = await req.json();

  await dbConnect();

  const existingUser = await User.findOne({ email: result.email });

  if (!existingUser)
    return new NextResponse.json("Something went wrong", {
      status: 500,
    });

  let homePage = await HomePageModel.findOne();

  if (!homePage) {
    homePage = new HomePageModel({
      slogan: "Default Slogan",
      googleReviews: [result],
    });
  } else {
    homePage.googleReviews.push(result);
  }

  try {
    // Save the updated document
    await homePage.save();
    revalidatePath("/dashboard");
    return new NextResponse("Review created successfully", {
      status: 201,
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);

    return new NextResponse.json("Error saving review", { status: 500 });
  }
}
