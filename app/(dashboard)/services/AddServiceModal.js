"use client";

import InputField from "@/components/InputField";
import Loading from "@/components/Loading";
import Modal from "@/components/Modal";
import TextAreaField from "@/components/TextAreaField";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import OneTime from "./OneTime";
import Others from "./Others";
import SquireFootageMatters from "./SquireFootageMatters";
import Subscription from "./Subscription";

const AddServiceModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  const session = useSession();

  const router = useRouter();
  const methods = useForm();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    message: null,
  });

  // set the service type
  const [selectedServiceType, setServiceType] = useState("One Time");

  // toggle the visibility of the square footage matters checkbox
  const [checkedSquareFootageMatters, setCheckedSquareFootageMatters] =
    useState(false);

  // handle service type
  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  // handle form submit
  const onSubmit = async (data) => {
    setLoading(true);

    const allData = {
      email: session?.data?.user?.email,
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
      const response = await fetch(`/api/addService`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allData),
      });

      if (response.ok) {
        setLoading(false);
        router.refresh();
        methods.reset();
      }

      setIsOpen(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      throw new Error(error);
    }

    // try {
    //   const res = await addService(allData);
    //   setLoading(false);
    //   setIsOpen(false);
    // } catch (error) {
    //   setLoading(false);
    //   setIsOpen(false);
    // }
  };

  return (
    <div>
      <article className="grid justify-center text-white">
        <h1 className="text-3xl font-bold text-center ">
          Dashboard Calculator
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 mt-5 text-center border border-white rounded-md"
        >
          Add Service
        </button>
      </article>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <FormProvider {...methods}>
          <form
            className="text-white"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="mt-3">
              <h3 className="mb-4 font-semibold ">Add Service</h3>
            </div>

            <div className="">
              <InputField
                name="serviceName"
                type="text"
                // placeholder="Service Name"
                label="Service Name"
                required
                errorMessage="First Name is required"
              />
            </div>

            <div className="flex items-center w-full gap-5">
              <h3 className="font-semibold text-white  ">Service&nbsp;Type</h3>
              <ul className="items-center w-full text-sm font-medium text-white bg-dark2 border border-gray-200 rounded-lg sm:flex  ">
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
                      className="w-full py-3 ms-2 text-sm font-medium cursor-pointer"
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
                      className="w-full py-3 ms-2 text-sm font-medium  cursor-pointer"
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
                      value="Other"
                      checked={selectedServiceType === "Other"}
                      onChange={handleServiceTypeChange}
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="horizontal-list-radio-military"
                      className="w-full py-3 ms-2 text-sm font-medium  cursor-pointer"
                    >
                      Other
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <fieldset className="p-5 mt-1 mb-4 border rounded-md">
                <legend
                  className={`font-semibold ${
                    checkedSquareFootageMatters &&
                    selectedServiceType !== "Other" &&
                    "text-white bg-dark2 cursor-not-allowed"
                  }  `}
                >
                  {selectedServiceType}
                </legend>

                {selectedServiceType === "One Time" ? (
                  <OneTime
                    checkedSquareFootageMatters={checkedSquareFootageMatters}
                  />
                ) : selectedServiceType === "Subscription" ? (
                  <Subscription
                    checkedSquareFootageMatters={checkedSquareFootageMatters}
                  />
                ) : (
                  <Others />
                )}
              </fieldset>
            </div>

            <div>
              <TextAreaField
                rows={5}
                label="Description"
                name="description"
                maxLength={600}
                placeholder="Write Description......"
                required
              />
            </div>

            <div>
              <SquireFootageMatters
                checkedSquareFootageMatters={checkedSquareFootageMatters}
                setCheckedSquareFootageMatters={setCheckedSquareFootageMatters}
                error={error}
              />
            </div>

            <div className="flex justify-center">
              {loading ? (
                <Loading />
              ) : (
                <button
                  className="px-4 py-2 mt-5 text-center bg-blue-500 border border-black rounded-md hover:bg-blue-700 hover:text-white"
                  type="submit"
                >
                  Add Service
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </Modal>
    </div>
  );
};

export default AddServiceModal;
