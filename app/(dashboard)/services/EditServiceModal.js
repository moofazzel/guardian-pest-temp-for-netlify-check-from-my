"use client";

import EditIcon from "@/components/Icons/EditIcon";
import InputField from "@/components/InputField";
import Modal from "@/components/Modal";
import TextAreaField from "@/components/TextAreaField";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import EditSquireFootageMatters from "./EditSquireFootageMatters";
import OneTime from "./OneTime";
import Others from "./Others";
import Subscription from "./Subscription";

const EditServiceModal = ({ serviceData }) => {
  const service = JSON.parse(serviceData);

  const [isOpen, setIsOpen] = useState(false);

  const [error, setError] = useState({
    message: null,
  });

  const [loading, setLoading] = useState(false);

  const [selectedServiceType, setServiceType] = useState(service?.type);

  const [checkedSquareFootageMatters, setCheckedSquareFootageMatters] =
    useState(service?.sqftCheckbox);

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

  // const handleCloseModal = () => {
  //   // router.back();
  //   setIsOpen(false);
  // };

  // const queryClient = useQueryClient();

  // Handle update service
  const updateService = async (data) => {
    try {
      const response = await fetch(`/api/updateService`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLoading(false);
        router.refresh();
        methods.reset();
      }

      setIsOpen(false);
    } catch (error) {
      setLoading(false);

      throw new Error(error);
    }
  };

  const onSubmit = async (data) => {
    const allData = {
      email: session?.data?.user?.email,
      id: service?._id,
      ...data,
      serviceType: selectedServiceType,
    };

    if (allData.sqftCheckbox && allData.sqftFields.length === 0) {
      setError({
        message: "Please add at least one field",
      });
      return;
    } else {
      setError({
        message: null,
      });
    }

    try {
      const res = await updateService(allData);
      setLoading(false);
      setIsOpen(false);
    } catch (error) {
      throw new Error(error);
      setLoading(false);
      setIsOpen(false);
    }

    // updateService.mutate({
    //   ...allData,
    //   redirect: false,
    // });
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
            className="text-white"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="mt-3">
              <h3 className="mb-4 font-semibold text-white">Update Service</h3>
            </div>
            <div className="">
              <InputField
                name="serviceName"
                type="text"
                defaultValue={service?.name}
                label="Service Name"
                required
                errorMessage="First Name is required"
                className="text-white placeholder:text-white"
              />
            </div>

            <div className="flex items-center w-full gap-5">
              <h3 className="font-semibold text-white  ">Service&nbsp;Type</h3>
              <ul className="items-center w-full text-sm font-medium text-white bg-dark2 border border-gray-200 rounded-lg sm:flex darkf:bg-gray-700  ">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r darkf:border-gray-600 ">
                  <div className="flex items-center ps-3 ">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value="One Time"
                      checked={selectedServiceType === "One Time"}
                      onChange={handleServiceTypeChange}
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ms-2 text-sm font-medium text-white darkf:text-gray-300 cursor-pointer"
                    >
                      One Time
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r darkf:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      value="Subscription"
                      checked={selectedServiceType === "Subscription"}
                      onChange={handleServiceTypeChange}
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="horizontal-list-radio-id"
                      className="w-full py-3 ms-2 text-sm font-medium text-white darkf:text-gray-300 cursor-pointer"
                    >
                      Subscription
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r darkf:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="horizontal-list-radio-military"
                      type="radio"
                      value="Others"
                      checked={selectedServiceType === "Others"}
                      onChange={handleServiceTypeChange}
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="horizontal-list-radio-military"
                      className="w-full py-3 ms-2 text-sm font-medium text-white darkf:text-gray-300 cursor-pointer"
                    >
                      Others
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <fieldset className="p-5 mt-1 mb-4 border rounded-md">
                <legend
                  className={`font-semibold text-white ${
                    checkedSquareFootageMatters &&
                    "!text-gray-600 cursor-not-allowed "
                  } `}
                >
                  {selectedServiceType}
                </legend>

                {selectedServiceType === "One Time" ? (
                  <OneTime
                    service={service}
                    checkedSquareFootageMatters={checkedSquareFootageMatters}
                  />
                ) : selectedServiceType === "Subscription" ? (
                  <Subscription
                    service={service}
                    checkedSquareFootageMatters={checkedSquareFootageMatters}
                  />
                ) : (
                  <Others service={service} />
                )}
              </fieldset>
            </div>

            <div>
              <TextAreaField
                defaultValue={service?.description}
                rows={5}
                label="Description"
                name="description"
                maxLength={600}
                placeholder="Write Description......"
                required
              />
            </div>

            <div>
              <EditSquireFootageMatters
                service={service}
                checkedSquareFootageMatters={checkedSquareFootageMatters}
                setCheckedSquareFootageMatters={setCheckedSquareFootageMatters}
                error={error}
              />
            </div>

            <div className="flex justify-center">
              <button className="px-4 py-2 mt-5 text-center border border-black rounded-md">
                Update
              </button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </div>
  );
};

export default EditServiceModal;
