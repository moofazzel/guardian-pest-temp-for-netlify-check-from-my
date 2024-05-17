"use client";

import EditIcon from "@/components/Icons/EditIcon";
import Modal from "@/components/Modal";
import { uploadImageToImageBB } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputField";
import Loading from "../Loading";
import TextAreaField from "../TextAreaField";

const EditReviewModal = ({ review }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [error, setError] = useState({
    message: null,
  });

  const [loading, setLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const methods = useForm();

  const session = useSession();

  const router = useRouter();

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleEditModal = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  // Handle update Review
  const updateReview = async (data) => {
    try {
      const response = await fetch(`/api/updateReview`, {
        method: "POST",

        body: JSON.stringify(data),
      });
      if (response.ok) {
        setLoading(false);
        setIsOpen(false);
        methods.reset();
        router.refresh();
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

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
      image: uploadImageUrl || review?.image,
      reviewId: review?._id,
    };

    // Call upload review mutation
    updateReview(allData);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <button onClick={handleEditModal}>
        <EditIcon />
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        // handleCloseModal={handleCloseModal}
      >
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="p-5 space-y-6 border mb-14"
          >
            <InputField
              defaultValue={review.name}
              name="name"
              label="Name"
              type="text"
              placeholder="Name name"
              required
              errorMessage="Name is required"
            />

            <InputField
              defaultValue={review.title}
              name="title"
              label="Title"
              type="text"
              placeholder="Title title"
              required
              errorMessage="Title is required"
            />

            <InputField
              defaultValue={review.rating}
              name="rating"
              label="Rating"
              type="number"
              placeholder="Rating rating"
              required
              errorMessage="Rating is required"
            />

            <div className="mb-4">
              <label className="block text-sm text-white font-medium mb-2 text-left">
                Reviewer Image
              </label>
              <input
                type="file"
                // required
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-900 rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 shadow-sm"
              />
            </div>

            <div className="mb-4">
              <TextAreaField
                defaultValue={review.review}
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
                Update Review
              </button>
            )}
          </form>
        </FormProvider>
      </Modal>
    </div>
  );
};

export default EditReviewModal;
