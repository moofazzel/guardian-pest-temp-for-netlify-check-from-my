"use server";

import { signIn, signOut } from "@/auth";
import Services from "@/models/Services";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function doSignOut() {
  await signOut({ callbackUrl: "/" });
}

export async function doSignIn() {
  await signIn("google", { callbackUrl: "http://localhost:3000" });
}

export async function login(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    return response;
  } catch (err) {
    throw err;
  }
}
