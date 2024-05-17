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

  try {
    // Find the review by ID and update its fields
    const review = homePage.googleReviews.id(result.reviewId);
    if (review) {
      review.set(result);

      // Save the updated document
      await homePage.save();
      // Save the updated document
      revalidatePath("/dashboard");
      return new NextResponse("Review created successfully", {
        status: 201,
      });
      console.log("Review updated successfully");
    } else {
      console.log("Review not found");

      return new NextResponse.json("Review not found", { status: 404 });
    }
  } catch (error) {
    console.log("🚀 ~ error:", error);

    return new NextResponse.json("Error saving review", { status: 500 });
  }
}
