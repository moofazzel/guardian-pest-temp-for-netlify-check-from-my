"use client";

import TrashIcon from "@/components/Icons/TrashIcon";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const DeleteService = ({ id }) => {
  const session = useSession();

  const router = useRouter();

  const deleteService = async ({ id, email }) => {
    const response = await fetch(`/api/deleteService`, {
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
      Swal.fire("Deleted!", "Service deleted.", "success");
    }

    return response.json();
  };

  const handleDeleteService = async (e) => {
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
        // Delete the service
        deleteService({
          email: session?.data?.user?.email,
          id,
        });
        // .catch((e) => {
        //   console.error("Error deleting service:", e);
        //   Swal.fire("Error!", "An error occurred while deleting.", "error");
        // });
      }
    });
  };
  return (
    <div>
      <button onClick={handleDeleteService}>
        <TrashIcon />
      </button>
    </div>
  );
};

export default DeleteService;
