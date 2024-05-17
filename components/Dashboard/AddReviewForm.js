"use client";

import Loading from "@/components/Loading";
import { uploadImageToImageBB } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";

const AddReviewForm = () => {
  const session = useSession();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const methods = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);

    // Handle image upload
    let uploadImageUrl;
    if (selectedImage) {
      const imageUrl = await uploadImageToImageBB(selectedImage);
      uploadImageUrl = imageUrl;
    }

    let allData = {
      ...data,
      email: session?.data?.user?.email,
      image: uploadImageUrl,
      redirect: false,
    };

    // Call upload review mutation

    try {
      const response = await fetch(`/api/createReview`, {
        method: "POST",

        body: JSON.stringify(allData),
      });
      if (response.ok) {
        setLoading(false);
        methods.reset();
        router.refresh();
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="p-10 space-y-6 mb-14 mx-5 mt-10 rounded-lg bg-dark2"
        >
          <InputField
            name="name"
            label="Name"
            type="text"
            placeholder="Name name"
            required
            errorMessage="Name is required"
          />

          <InputField
            name="title"
            label="Title"
            type="text"
            placeholder="Title title"
            required
            errorMessage="Title is required"
          />

          <InputField
            name="rating"
            label="Rating"
            type="number"
            placeholder="Rating rating"
            required
            errorMessage="Rating is required"
          />

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">
              Reviewer Image
            </label>
            <input
              type="file"
              required
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-900 rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 shadow-sm"
            />
          </div>

          <div className="mb-4">
            <TextAreaField
              rows={5}
              label="Review"
              name="review"
              maxLength={600}
              placeholder="Write Review......"
              required
            />
          </div>

          {loading ? (
            <div className="flex justify-center w-full px-4 py-2 text-white bg-indigo-600 rounded-md">
              <Loading />
            </div>
          ) : (
            <button
              type="submit"
              className=" text-base px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add Review
            </button>
          )}
        </form>
      </FormProvider>
    </>
  );
};

export default AddReviewForm;
