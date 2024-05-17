"use client";

import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ServiceDetailsModal = ({ serviceData }) => {
  const [isOpen, setIsOpen] = useState(true);

  const service = JSON.parse(serviceData);

  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleCloseModal={handleCloseModal}
    >
      <div className="">
        <fieldset className="h-auto p-5 m-5 border border-white rounded-md ">
          <legend className="font-semibold text-white text-xl">
            {service.type}
          </legend>

          <article className="space-y-3 text-white">
            <p className="font-semibold  ">Service Name: {service.name}</p>
            {/* only for one time */}
            {service?.type === "One Time" && (
              <div className="border rounded-md p-3">
                <p>One Time Price : {service?.oneTimeService?.price} </p>
                <div>
                  <p>
                    Follow up :{" "}
                    {service?.oneTimeService?.followUpCheckbox ? "Yes" : "No"}
                  </p>
                  {service?.oneTimeService?.followUpCheckbox && (
                    <p>
                      Follow up Price : {service?.oneTimeService?.followUpPrice}
                    </p>
                  )}
                </div>
              </div>
            )}
            {/* only for subscription */}
            {service?.type === "Subscription" && (
              <div className="border rounded-md p-3">
                <p>
                  Subscription Price : {service?.subscriptionService?.price}{" "}
                </p>
                <div>
                  <p>
                    Initial Price Different :{" "}
                    {service?.subscriptionService?.initialPriceCheckbox
                      ? "Yes"
                      : "No"}
                  </p>
                  {service?.subscriptionService?.initialPriceCheckbox && (
                    <p>
                      Initial Price :{" "}
                      {service?.subscriptionService?.initialPrice}
                    </p>
                  )}
                </div>
              </div>
            )}
            {/* only for other */}
            {service?.type === "Other" && (
              <div className="border rounded-md p-3">
                <p>
                  Description Price Box :{" "}
                  {service?.otherService?.descriptionPrice}{" "}
                </p>
              </div>
            )}

            <p>Square Footage Matters: {service.sqftCheckbox ? "Yes" : "No"}</p>

            {service.sqftCheckbox && (
              <div className="border rounded-md p-3 space-y-3">
                {service?.squireFootageMatters.map((sqft) => (
                  <div key={sqft._id}>
                    <p>Range: {sqft.range}</p>
                    <p>Monthly Price: {sqft.monthlyPrice}</p>
                    <p>Initial Price: {sqft.initialPrice}</p>
                  </div>
                ))}
              </div>
            )}

            <p>Description: {service.description}</p>
          </article>
        </fieldset>
      </div>
    </Modal>
  );
};

export default ServiceDetailsModal;
