"use server";

import dbConnect from "@/lib/mongodb";
import Services from "@/models/Services";
import User from "@/models/User";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function addService(result) {
  const con = await dbConnect();

  const existingUser = await User.findOne({ email: result.email });

  if (!existingUser)
    return NextResponse.json({ message: "Something went wrong" });

  const sqft = result.sqftFields?.map((sqftField) => ({
    range: sqftField.range,
    monthlyPrice: sqftField.monthlyPrice,
    initialPrice: sqftField.initialPrice,
  }));

  const oneTime = {
    price: result.price,
    followUpCheckbox: result.followUpCheckbox,
    followUpPrice: result.followUpPrice,
  };

  const subscription = {
    subscriptionPrice: result.subscriptionPrice,
    initialPriceCheckbox: result.initialPriceCheckbox,
    initialPrice: result.initialPrice,
  };

  const other = {
    descriptionPrice: result.descriptionPriceBox,
  };

  const newService = {
    name: result.serviceName,
    type: result.serviceType,
    description: result.description,
    sqftCheckbox: result.sqftCheckbox,
    ...(result.sqftCheckbox && { squireFootageMatters: sqft }),

    ...(result.serviceType === "One Time" &&
      !result.sqftCheckbox && { oneTimeService: oneTime }),

    ...(result.serviceType === "Subscription" &&
      !result.sqftCheckbox && {
        subscriptionService: subscription,
      }),
    ...(result.serviceType === "Other" && { otherService: other }),
  };

  try {
    await Services.create(newService);
    revalidatePath("/");

    return NextResponse({
      status: 200,
      message: "Service created successfully",
    });
  } catch (error) {
    return new NextResponse({ status: 500, message: "Error saving service" });
  }
}

export async function editService(result) {
  await dbConnect();

  if (!result.id) {
    return NextResponse.json({
      status: 400,
      message: "Service ID is required",
    });
  }

  // Validate email exists
  if (!result.email) {
    return NextResponse.json({ status: 400, message: "invalid access" });
  }

  const existingUser = await User.findOne({ email: result.email });

  if (!existingUser) {
    return NextResponse.json({ status: 404, message: "User not found" });
  }

  try {
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
    revalidatePath("/");

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

export async function deleteService({ id, email }) {
  await dbConnect();

  const existingUser = await User.findOne({ email });

  if (!existingUser)
    return NextResponse.json({ message: "Something went wrong" });

  try {
    await Services.findOneAndDelete({
      _id: id,
    });
    revalidatePath("/");

    return new NextResponse("Service deleted successfully", {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting service:", error);
    return NextResponse("Error deleting service", { status: 500 });
  }
}

export async function addReviewToDb(result) {
  const existingUser = await User.findOne({ email: result.email });

  if (!existingUser)
    return NextResponse.json({ message: "Something went wrong" });

  try {
    await Services.create(newService);
    revalidatePath("/dashboard");

    return NextResponse({
      status: 200,
      message: "review added successfully",
    });
  } catch (error) {
    return new NextResponse({ status: 500, message: "Error saving review" });
  }
}
