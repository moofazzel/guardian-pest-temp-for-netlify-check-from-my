"use client";

import InputField from "@/components/InputField";
import { useRouter } from "next/navigation";

import { FormProvider, useForm } from "react-hook-form";

const RegisterForm = () => {
  const methods = useForm();

  const router = useRouter();

  // const { data: session } = useSession();

  // if (session) {
  //   router.refresh();
  //   router.replace("/");
  // }

  const onSubmit = async (data) => {
    const response = await fetch(`/api/auth/register`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    response.status === 201 && router.push("/login");
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          // action={dispatch}
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <InputField
            name="email"
            label="Email"
            type="email"
            required
            validation={{
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
            errorMessage="Email is required"
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            required
            errorMessage="Password is required"
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default RegisterForm;
