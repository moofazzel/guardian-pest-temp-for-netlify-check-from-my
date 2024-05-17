"use client";

import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const FORMSPARK_ACTION_URL = "https://submit-form.com/lLboQ96zy";
const Contact = () => {
  const methods = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        methods.reset(); // Reset the form fields
        setIsSubmitted(true); // Set isSubmitted to true
        setTimeout(() => setIsSubmitted(false), 5000); // Hide the message after 5 seconds
      }
    });
  };

  return (
    <section className="bg-white ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
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
              name="subject"
              label="Subject"
              type="text"
              required
              errorMessage="Subject is required"
            />

            <TextAreaField
              name="message"
              label="Your Message"
              placeholder="Enter your message"
              required
              errorMessage="Message is required"
              rows={4} // You can specify the number of rows
            />
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </form>
          {isSubmitted && (
            <div className="inline-block px-5 py-2 mt-4 font-semibold text-center bg-green-500 rounded-md">
              Your message has been successfully sent!
            </div>
          )}
        </FormProvider>
      </div>
    </section>
  );
};

export default Contact;
