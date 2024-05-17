import dbConnect from "@/lib/mongodb";
import Services from "@/models/Services";
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

  try {
    await Services.findOneAndDelete({
      _id: id,
    });
    revalidatePath("/");

    return new NextResponse(
      JSON.stringify({ status: 200, message: "Delete success" })
    );
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error deleting service",
    });
  }
}
