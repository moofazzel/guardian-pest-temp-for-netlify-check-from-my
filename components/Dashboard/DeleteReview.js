"use client";

import TrashIcon from "@/components/Icons/TrashIcon";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const DeleteReview = ({ id }) => {
  const session = useSession();

  const router = useRouter();

  const deleteReview = async ({ id, email }) => {
    const response = await fetch(`/api/deleteReview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, email, redirect: false }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      router.refresh();
      Swal.fire("Deleted!", "Review deleted.", "success");
    }

    return response.json();
  };

  const handleDeleteReview = async (e) => {
    e.stopPropagation();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the review
        deleteReview({
          email: session?.data?.user?.email,
          id,
        });
        // .catch((e) => {
        //   console.error("Error deleting review:", e);
        //   Swal.fire("Error!", "An error occurred while deleting.", "error");
        // });
      }
    });
  };
  return (
    <div>
      <button onClick={handleDeleteReview}>
        <TrashIcon />
      </button>
    </div>
  );
};

export default DeleteReview;
