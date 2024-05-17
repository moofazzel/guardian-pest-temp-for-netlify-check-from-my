import dbConnect from "@/lib/mongodb";
import Services from "@/models/Services";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(res, { params }) {
  await dbConnect();
  const service = await Services.findById({ _id: params?.id }).lean();

  return new NextResponse({ service });
}
