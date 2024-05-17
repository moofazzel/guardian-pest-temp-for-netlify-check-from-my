import dbConnect from "@/lib/mongodb";
import Services from "@/models/Services";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const result = await req.json();

    await dbConnect();

    if (!result.id) {
      return NextResponse.json({
        status: 400,
        message: "Service ID is required",
      });
    }

    // Validate email exists
    if (!result.email) {
      return NextResponse.json({ status: 400, message: "Email is required" });
    }

    const existingUser = await User.findOne({ email: result.email });
    if (!existingUser) {
      return NextResponse.json({ status: 404, message: "User not found" });
    }

    // Construct update data
    const updateData = {
      name: result.serviceName,
      type: result.serviceType,
      description: result.description,
      sqftCheckbox: result.sqftCheckbox,
      ...(result.sqftCheckbox && {
        squireFootageMatters: result.sqftFields?.map(
          ({ range, monthlyPrice, initialPrice }) => ({
            range,
            monthlyPrice,
            initialPrice,
          })
        ),
      }),
      ...(result.serviceType === "One Time" &&
        !result.sqftCheckbox && {
          oneTimeService: {
            price: result.price,
            followUpCheckbox: result.followUpCheckbox,
            followUpPrice: result.followUpPrice,
          },
        }),
      ...(result.serviceType === "Subscription" &&
        !result.sqftCheckbox && {
          subscriptionService: {
            subscriptionPrice: result.subscriptionPrice,
            initialPriceCheckbox: result.initialPriceCheckbox,
            initialPrice: result.initialPrice,
          },
        }),
      ...(result.serviceType === "Other" && {
        otherService: {
          descriptionPrice: result.descriptionPriceBox,
        },
      }),
    };

    // Update the service
    const updatedService = await Services.findByIdAndUpdate(
      result.id,
      updateData,
      { new: true }
    );

    if (!updatedService) {
      return NextResponse.json({ status: 404, message: "Service not found" });
    }

    // Optionally revalidate Next.js data (uncomment if needed)
    // revalidatePath("/", "layout");

    return NextResponse.json({
      status: 200,
      message: "Service updated successfully",
    });
  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json({
      status: 500,
      message: "Error updating service",
    });
  }
}
