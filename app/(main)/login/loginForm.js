"use client";

import InputField from "@/components/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { login } from "../../actions";

const LoginForm = () => {
  const [loginSuccess, setLoginSuccess] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const methods = useForm();

  const router = useRouter();

  // const { data: session } = useSession();

  // if (session) {
  //   router.refresh();
  //   router.replace("/dashboard");
  // }

  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const onSubmit = async (data) => {
    const res = await login(data);

    if (res && !res.error) {
      setLoginSuccess("Login successful");
      router.push("/services");
    } else {
      setLoginError("Wrong credentials");
    }
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

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </form>
        {loginSuccess && (
          <p className="inline-block px-5 py-2 mt-3 bg-green-500 rounded">
            {loginSuccess}
          </p>
        )}
        {loginError && (
          <p className="inline-block px-5 py-2 mt-3 bg-red-500 rounded">
            {loginError}
          </p>
        )}
      </FormProvider>
    </>
  );
};

export default LoginForm;
