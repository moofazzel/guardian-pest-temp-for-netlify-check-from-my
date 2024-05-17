import dbConnect from "@/lib/mongodb";
import Services from "@/models/Services";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const result = await req.json();

  await dbConnect();

  const existingUser = await User.findOne({ email: result.email });

  if (!existingUser)
    return new NextResponse.json("Something went wrong", {
      status: 500,
    });

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

  const newService = new Services({
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
  });

  try {
    await newService.save();
    // revalidatePath("/", "layout");
    return new NextResponse("Service created successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse.json("Error saving service", { status: 500 });
  }
}
