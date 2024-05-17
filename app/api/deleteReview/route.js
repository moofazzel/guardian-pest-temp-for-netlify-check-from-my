import dbConnect from "@/lib/mongodb";
import HomePageModel from "@/models/HomePageModel";
import User from "@/models/User";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req, res) {
  const { id, email } = await req.json();

  await dbConnect();

  const existingUser = await User.findOne({ email });

  if (!existingUser)
    return NextResponse.json({ message: "Something went wrong" });

  // Find the single home page document
  let homePage = await HomePageModel.findOne();

  if (!homePage) {
    console.log("HomePage not found");
    return;
  }

  // Find the review by ID and remove it from the googleReviews array
  homePage.googleReviews = homePage.googleReviews.filter(
    (review) => review._id.toString() !== id
  );
  try {
    // Save the updated document
    await homePage.save();
    revalidatePath("/dashboard");

    return new NextResponse(
      JSON.stringify({ status: 200, message: "Delete success" })
    );
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json({
      status: 500,
      message: "Error deleting service",
    });
  }
}
